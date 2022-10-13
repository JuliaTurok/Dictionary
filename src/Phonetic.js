import React from "react";

export default function Phonetic(props){
return (
  <div >
    <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
      Listen
    </a>
    <span className="text">
    {props.phonetic.text}</span>
    <br />
  </div>
);
}