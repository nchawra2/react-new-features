import React from "react";
import {
  TwitterLogo,
  InstagramLogo,
  GithubLogo,
  FacebookLogo,
} from "phosphor-react";
const Links = () => {
  return (
    <React.Fragment>
      <div className="myLinks">
        <a href="https://github.com/nchawra2" target="_blank">
          <GithubLogo
            size={50}
            className="link-3"
            color="#4169e1"
            weight="light"
          />
        </a>
        <a href="#">
          <TwitterLogo
            className="link-1"
            size={50}
            weight="thin"
            color="#fafafa"
          />
        </a>
        <a href="#">
          <InstagramLogo size={50} className="link-2" color="#f33312" />
        </a>

        <a href="https://www.facebook.com/naishadh.chawra/" target="_blank">
          <FacebookLogo
            size={50}
            color="#4169e1"
            weight="thin"
            className="link-4"
          />
        </a>
      </div>
    </React.Fragment>
  );
};

export default Links;
