import React, { useEffect, useState } from "react";
import axios from "axios";
import "./feedbacktable.css";
import _ from "lodash";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from 'react-bootstrap';

const pageSize = 5;
const FeedbackTable = () => {

  const navigate = useNavigate();

  const [posts, setposts] = useState();
  const [paginatedPosts, setpaginatedPosts] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://updated-innovative-server.herokuapp.com/api/user/getfeedback"
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
        <div className="Feedback_Search">
          <span className="Feedback_Search_Icon">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder="Search feedbacks by name"
            className="Feedback_Search_Input"
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <h4 className="feed_name">Feedbacks</h4>
        </div>

        {!paginatedPosts ? (
          <Spinner animation="border" size="sm" className="Feedback_Spinner" />
        ) : (
          <table className="table table-bordered">
            <thead className="feedback_thead">
              <tr className="feedback_tr_head">
                <th>Name</th>
                <th>Email</th>
                <th className="feedback_th">View / Delete</th>
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
                  <tr className="feedback_tr" key={index}>
                    <td className="feedback_td">{post.name}</td>
                    <td className="feedback_td">{post.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate(`/feedback-profile/${post._id}`, {
                            state: [
                              post.name,
                              post.email,
                              post.feedback,
                            ],
                          });
                        }}
                        className="btn-success Feed_View_Button"
                      >
                        View
                      </button>
                      <button
                        className="btn-danger Feed_Del_Button"
                        onClick={async () => {
                          await axios
                            .delete(
                              "https://updated-innovative-server.herokuapp.com/api/user/delete-profile",
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
        <nav className="Feedback_Pagination d-flex justify-content-end">
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

export default FeedbackTable;
