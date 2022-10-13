import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";
 
export default function Results(props){
 if (props.results){
    return (
      <div>
        <section className="Phonetic">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key="index" className="Phonetic-container">
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (<div>
            <section key={index} className="Meaning">
              <Meaning meaning={meaning} />
             
              <Synonyms synonyms={meaning.synonyms} />
            </section>
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