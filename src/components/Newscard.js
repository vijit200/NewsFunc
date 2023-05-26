import React from "react";
import "./Newsp.css"

export default function Newscard(props) {

  return (
    <div>
      <div className="card hs" style ={{ transition:"all 0.5s linear"}}>
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <p class="card-text"><small class="text-muted">By {props.author} on {props.date}</small></p>
          <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
