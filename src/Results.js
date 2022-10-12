import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";
 
export default function Results(props){
 if (props.results){
    return (
      <div>
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function(phonetic, index){return(<div key="index"><Phonetic phonetic = {phonetic} /></div>)})}
        {props.results.meanings.map(function(meaning, index){
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
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