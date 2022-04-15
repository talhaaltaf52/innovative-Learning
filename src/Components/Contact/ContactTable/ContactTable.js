import React, { useEffect, useState } from "react";
import axios from "axios";
import "./contacttable.css";
import _ from "lodash";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const pageSize = 5;
const ContactTable = () => {
  const navigate = useNavigate();

  const [posts, setposts] = useState();
  const [paginatedPosts, setpaginatedPosts] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://updated-innovative-server.herokuapp.com/api/user/getcontact"
      )
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
        <div className="Contact_Search">
          <span className="Contact_Search_Icon">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder="Search contacts by name"
            className="Contact_Search_Input"
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h4 className="cont_name">Contacts</h4>
        </div>

        {!paginatedPosts ? (
          <Spinner animation="border" size="sm" className="Contact_Spinner" />
        ) : (
          <table className="table table-bordered">
            <thead className="contact_thead">
              <tr className="contact_tr_head">
                <th>Name</th>
                <th>Email</th>
                <th className="contact_th">View / Delete</th>
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
                  <tr className="contact_tr" key={index}>
                    <td className="contact_td">{post.name}</td>
                    <td className="contact_td">{post.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate(`/contact-profile/${post._id}`, {
                            state: [
                              post.name,
                              post.email,
                              post.phone,
                              post.mainMessage,
                            ],
                          });
                        }}
                        className="btn-success Cont_View_Button"
                      >
                        View
                      </button>
                      <button
                        className="btn-danger Cont_Del_Button"
                        onClick={async () => {
                          await axios
                            .delete(
                              "https://updated-innovative-server.herokuapp.com/api/user/delete-contact",
                              { data: { id: post._id } }
                            )
                            .then((res) => {
                              toast.success(res.data.msg);
                              window.location.reload(false);
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
        <nav className="Contact_Pagination d-flex justify-content-end">
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

export default ContactTable;
