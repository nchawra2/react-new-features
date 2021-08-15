import React, { useState } from "react";
import { ArrowSquareUp } from "phosphor-react";

export default function Scroll() {
  let [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div>
      <a href="#BackToTop">
        <ArrowSquareUp
          size={75}
          color="#631212"
          weight="fill"
          className={`scrollTop ${scroll ? "" : "hidden"}`}
        />
      </a>
    </div>
  );
}
