import React, { useState } from "react";
import Links from "./MyLinks";
import axios from "axios";

let Table = () => {
  let [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  let [filters, setFilters] = useState({
    search: "",
  });

  let filterSearch = (posts) => {
    return posts.filter((post) => {
      if (filters.search === "") {
        return post;
      } else {
        return (
          post.body.toLowerCase().includes(filters.search.toLowerCase()) ||
          post.title.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
    });
  };

  let requiredPosts = posts;
  requiredPosts = filterSearch(requiredPosts);

  let updateFilter = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = requiredPosts.slice(indexOfFirstPost, indexOfLastPost);

  let maxPage = Math.ceil(requiredPosts.length / postsPerPage);
  let minPage = 1;

  let getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Change page
  const paginate = (val) => {
    if (val === "next") {
      setCurrentPage(currentPage + 1 > maxPage ? currentPage : currentPage + 1);
    }
    if (val === "prev") {
      setCurrentPage(currentPage - 1 < minPage ? currentPage : currentPage - 1);
    }
  };

  let getPostPerPage = (e) => {
    setPostsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <button onClick={getPosts} className="btn btn-danger btn-lg">
              Get Posts
            </button>
          </div>
          <div className="col-md-2 text-center ">
            <select onChange={getPostPerPage} className="form-control">
              <option value="10">Select No Of Rows</option>
              <option value="5">5</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="39">39</option>
            </select>
          </div>
          <div className="col-md-5">
            <div className="form-group">
              <input
                name="search"
                value={filters.search}
                onChange={updateFilter}
                type="search"
                className="form-control"
                placeholder="Search Movies ..."
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8 m-auto">
            <table className="table table-bordered table-striped">
              <thead className="bg-dark text-uppercase text-center">
                <tr className="text-white">
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>BODY</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.length > 0 ? (
                  currentPosts.map((post) => {
                    return (
                      <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="text-center ">
                    <td colSpan="3">
                      <h3>No Posts Found</h3>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="container">
            <div className="col-md-4 m-auto">
              <button
                disabled={currentPage === minPage}
                className="btn btn-dark btn-sm m-3 p-2 text-uppercase"
                onClick={paginate.bind(this, "prev")}
              >
                previous
              </button>
              <button
                disabled={currentPage === maxPage}
                className="btn btn-dark btn-sm m-3 p-2 text-uppercase"
                onClick={paginate.bind(this, "next")}
              >
                nextpage
              </button>
            </div>
          </div>
        </div>

        <div className="mb-5"></div>
      </div>

      <Links />
    </React.Fragment>
  );
};

export default Table;
