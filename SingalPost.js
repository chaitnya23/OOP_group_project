import React from "react";

export default function SingalPost({ name, company, content ,placed_as }) {
  return (
    <>
      <div className="container  py-1 my-5  px-3 post mt-3">
        <div className="row py-1 pt-2 post-header bg-dark">
          <div className="col-1 py-1">
          <i class="fas fa-user-circle"></i>
          </div>
          <div className="col">
            <div className="row">{name}</div>
            <div className="row company">{company}, {placed_as}</div>
          </div>
        </div>
        <div className="row py-2">{content}</div>
        <hr/>
      </div>
    </>
  );
}
