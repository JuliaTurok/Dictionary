import React from "react";

import Synonyms from "./Synonyms"
 
export default function Results(props){
 if (props.results){
    return (
      <div>
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function(meaning, index){
            return (
              <div key={index}>
                <strong>Synonyms</strong>
                <Synonyms synonyms={meaning.synonyms} />
              </div>
            );
        })}
      </div>
    );
 }
 else{
    return null;
 }

}