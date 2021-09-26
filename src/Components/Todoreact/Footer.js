import React from "react";

export const Footer = () => {
  return (
    <div className="mainFooter">
      {/* footer */}
      <div id="menu-outer">
        <div class="table">
          <ul id="horizontal-list">
            <h2>
              <li >
                <i className="fab fa-github fa-2x"></i>
                <a href="https://github.com/zainshahbaz786">
                  <b id="x">ZainShahbaz786</b>
                </a>
              </li>
              {/* <li><i className="fab fa-linkedin-in"></i> <a href="https://www.linkedin.com/in/zain-shahbaz-874712165/?fbclid=IwAR1txxx2p-y7NKKE0KFhKUvmNrJLTpl2nl_HwAsCLzYJQFoMShhwweqxMiU" ></a><b>ZainShahbaz</b></li> */}
              <li >
                <i className="fab fa-instagram fa-2x"></i>{" "}
                <a href="https://www.instagram.com/zain__shahbaz/">
                  <b id="y">zain__shahbaz</b>
                </a>
              </li>
            </h2>
          </ul>
        </div>
      </div>
    </div>
  );
};
