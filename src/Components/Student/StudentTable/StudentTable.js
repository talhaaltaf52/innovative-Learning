import React, { useEffect, useState } from "react";
import axios from "axios";
import "./studenttable.css";
import _ from "lodash";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from 'react-bootstrap';

const pageSize = 5;
const StudentTable = () => {
  const navigate = useNavigate();

  const [posts, setposts] = useState();
  const [paginatedPosts, setpaginatedPosts] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://updated-innovative-server.herokuapp.com/api/user/students")
      .then((res) => {
        console.log(res.data);
        setposts(res.data);
        setpaginatedPosts(_(res.data).slice(0).take(pageSize).value());
      });
  }, []);

  const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;

  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
    setpaginatedPosts(paginatedPost);
  };

  return (
    <>
      <div>
        <div className="Student_Search">
          <span className="Student_Search_Icon">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder="Search students by name"
            className="Student_Search_Input"
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h4 className="stud_name">Students</h4>
        </div>

        {!paginatedPosts ? (
          <Spinner animation="border" size="sm" className="Student_Spinner" />
        ) : (
          <table className="table table-bordered">
            <thead className="student_thead">
              <tr className="student_tr_head">
                <th>Name</th>
                <th>Gender</th>
                <th>Qualification</th>
                <th className="student_th">View / Delete</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPosts
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((post, index) => (
                  <tr className="student_tr" key={index}>
                    <td className="student_td">{post.name}</td>
                    <td className="student_td">{post.gender}</td>
                    <td className="student_td">{post.qualification}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate(`/student-profile/${post._id}`, {
                            state: [
                              post.pic,
                              post.name,
                              post.username,
                              post.email,
                              post.gender,
                              post.contact,
                              post.qualification,
                              post.role,
                            ],
                          });
                        }}
                        className="btn-success Stud_View_Button"
                      >
                        View
                      </button>
                      <button
                        className="btn-danger Stud_Del_Button"
                        onClick={async () => {
                          await axios
                            .delete(
                              "https://updated-innovative-server.herokuapp.com/api/user/delete-profile",
                              { data: { id: post._id } }
                            )
                            .then((res) => {
                              toast.success(res.data.msg);
                              window.location.reload(false)
                            })
                            .catch((e) => console.log(e));
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        <nav className="Student_Pagination d-flex justify-content-end">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <p className="page-link" onClick={() => pagination(page)}>
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default StudentTable;
