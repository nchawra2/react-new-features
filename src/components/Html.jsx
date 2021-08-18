import React, { useState } from "react";
import Links from "./MyLinks";
import Scroll from "./scrollTop/Scroll";

export default function Html() {
  let [invalid, setInvalid] = useState("");

  let getFile = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setInvalid("Please select image[ jpg/jpeg ]");
      return;
    }

    console.log(file);
    if (!file.name.match(/\.(jpg|jpeg)$/)) {
      setInvalid("Please select valid image[ jpg/jpeg ]");
      return;
    } else {
      setInvalid("");
    }
  };

  return (
    <React.Fragment>
      <Links />
      <Scroll />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="display-5 text-white bg-dark p-1">
              <h5 className="bg-info text-dark p-2">
                <strong>Scroll To Top</strong> Functionality
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" text-white bg-dark p-1">
              <h5 className="bg-info text-dark p-2">
                <strong>Sticky Side Links</strong> Functionality
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" text-white bg-dark p-1">
              <h5 className="bg-info text-dark p-2">
                <strong>Image Upload</strong> With Validations
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-secondary text-white">
                <h4>Upload Image With Validations</h4>
              </div>
              <div className="card-body">
                <form>
                  <input type="file" name="fileInput" onChange={getFile} />
                </form>
                <h6 className="text-danger text-uppercase">{invalid}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
