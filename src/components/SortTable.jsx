import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SortTable() {
  let [users, setUsers] = useState([]);
  let [sort, setSort] = useState("");
  let [sortWhat, setSortWhat] = useState({
    id: false,
    name: false,
    username: false,
    city: false,
  });

  useEffect(() => {
    let getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };
    getData();
  }, []);

  const sorted =
    sort === ""
      ? users
      : users.slice().sort((a, b) => {
          if (sortWhat.name) {
            if (sort === "asc") {
              return a.name > b.name ? 1 : -1;
            } else if (sort === "dsc") {
              return a.name > b.name ? -1 : 1;
            }
          } else if (sortWhat.id) {
            if (sort === "asc") {
              return a.id > b.id ? 1 : -1;
            } else if (sort === "dsc") {
              return a.id > b.id ? -1 : 1;
            }
          } else if (sortWhat.username) {
            if (sort === "asc") {
              return a.username > b.username ? 1 : -1;
            } else if (sort === "dsc") {
              return a.username > b.username ? -1 : 1;
            }
          } else if (sortWhat.city) {
            if (sort === "asc") {
              return a.address.city > b.address.city ? 1 : -1;
            } else if (sort === "dsc") {
              return a.address.city > b.address.city ? -1 : 1;
            }
          }
        });

  let sortme = (whatToSort, howToSort) => {
    setSort(howToSort);
    if (whatToSort === "name") {
      setSortWhat({
        id: false,
        name: true,
        username: false,
        city: false,
      });
    } else if (whatToSort === "id") {
      setSortWhat({
        name: false,
        id: true,
        username: false,
        city: false,
      });
    } else if (whatToSort === "username") {
      setSortWhat({
        name: false,
        id: false,
        username: true,
        city: false,
      });
    } else if (whatToSort === "city") {
      setSortWhat({
        name: false,
        id: false,
        username: false,
        city: true,
      });
    }
  };

  let resetTable = () => {
    setSort("");
    setSortWhat({
      id: false,
      name: false,
      username: false,
      city: false,
    });
  };

  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-8 m-auto">
          <table className="table table-striped table-hover text-center">
            <thead>
              <tr className="bg-dark text-white text-uppercase text-center">
                <th>id</th>
                <th onClick={sortme.bind(this, "name")}>name</th>
                <th onClick={sortme.bind(this, "username")}>username</th>
                <th onClick={sortme.bind(this, "city")}>city</th>
              </tr>
              <tr className="bg-light">
                <th>
                  <span
                    onClick={sortme.bind(this, "id", "dsc")}
                    className="badge bg-secondary"
                  >
                    dsc
                  </span>{" "}
                  <span
                    onClick={sortme.bind(this, "id", "asc")}
                    className="badge bg-primary"
                  >
                    asc
                  </span>
                </th>
                <th>
                  <span
                    onClick={sortme.bind(this, "name", "dsc")}
                    className="badge bg-secondary"
                  >
                    dsc
                  </span>{" "}
                  <span
                    onClick={sortme.bind(this, "name", "asc")}
                    className="badge bg-primary"
                  >
                    asc
                  </span>
                </th>
                <th>
                  <span
                    onClick={sortme.bind(this, "username", "dsc")}
                    className="badge bg-secondary"
                  >
                    dsc
                  </span>{" "}
                  <span
                    onClick={sortme.bind(this, "username", "asc")}
                    className="badge bg-primary"
                  >
                    asc
                  </span>
                </th>
                <th>
                  <span
                    onClick={sortme.bind(this, "city", "dsc")}
                    className="badge bg-secondary"
                  >
                    dsc
                  </span>{" "}
                  <span
                    onClick={sortme.bind(this, "city", "asc")}
                    className="badge bg-primary"
                  >
                    asc
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.length > 0 &&
                sorted.map((user) => {
                  return (
                    <>
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.address.city}</td>
                      </tr>
                    </>
                  );
                })}
              <tr>
                <td colSpan="4">
                  <button
                    className="btn btn-outline-danger btn-sm text-uppercase"
                    onClick={resetTable}
                  >
                    reset table
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
