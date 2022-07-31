import React from "react";
import "./css/footer.css"
export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container p-4">
        <p className="text-white text-center fs-3 fw-bold">K  LAB</p>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <i className="fa-solid fa-envelope text-white me-2 fs-4" />
          <input
            style={{
              outline: "none",
              width: "40%",
              border: "none",
              borderBottom: "3px solid white",
              backgroundColor: "#212529",
            }}
            type="text"
          />
        </div>
        <div className="list row justify-content-between align-items-start p-5">
          <div className="col-md-3 col-sm-5 mb-4">
            <h5 className="text-white mb-2 fs-3">Service</h5>
            <ul style={{ listsStyleType: "none", margin: "0", padding: "0" }}>
              <li>
                <a href="../App.js">glabvn@gmail.com</a>
              </li>
              <li>
                <a href="../App.js">666898789</a>
              </li>
              <li>
                <a href="../App.js">loactions</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <h5 className="text-white mb-2 fs-3">Info</h5>
            <ul style={{ listsStyleType: "none", margin: "0", padding: "0" }}>
              <li>
                <a href="../App.js">Consignment Terms</a>
              </li>
              <li>
                <a href="../App.js">Connect With Us</a>
              </li>
              <li>
                <a href="../App.js">Delivery</a>
              </li>
              <li>
                <a href="../App.js">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <h5 className="text-white mb-2 fs-3">Follow Us</h5>
            <ul style={{ listsStyleType: "none", margin: "0", padding: "0" }}>
              <li>
                <a href="../App.js">Facebook</a>
              </li>
              <li>
                <a href="../App.js">Instagram</a>
              </li>
              <li>
                <a href="../App.js">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-white" style={{ fontSize: "10px" }}>
          Copyright © 2018 GLAB.VN
        </p>
      </div>
    </footer>
  );
}
