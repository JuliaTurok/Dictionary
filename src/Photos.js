import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Photos(props){
    if(props.photos){
        return(<section className="Photos">
            <div className="row">
            {props.photos.map(function(photo, index){
                return (
                  <div className="col-4" key={index}>
                    <a
                      href={photo.src.original}
                      rel="noreferrer"
                       target="_blank"
                    >
                      {" "}
                      <img
                        src={photo.src.landscape}
                        alt="what you are looking for"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                );
            })}</div>
        </section>);
    }else{
        return(null);
    }
}