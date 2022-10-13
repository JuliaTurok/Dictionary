import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function LoginForm(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(){
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
     axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
  search();
   
  }
  function load(){
    setLoaded(true);
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
 if(loaded){
   return (
     <div>
       <section className="Form">
        <h1>What word do you want to look up?</h1>
         <form onSubmit={handleSubmit}>
           <input type="text" placeholder={props.defaultKeyword} onChange={updateKeyword} />

           <input type="submit" value="Submit" />
         </form>
         <div className="hint">suggested words: sunset, wind, yoga...</div>
       </section>
       <Results results={results} />
     </div>
   );
 } else{
  load()
  return"Loading";
 }
}
