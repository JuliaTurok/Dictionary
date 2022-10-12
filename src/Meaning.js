import React from "react";

export default function Meaning(props){
    return (
      <div className="meaning">
        <h3> {props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
            return (
              <div key={index}>
                <p>
                  {definition.definition}
                  <br />
                  <strong>
                  {definition.example}</strong>
                  
                </p>
              </div>
            );
        })}
        
      </div>
    );

}