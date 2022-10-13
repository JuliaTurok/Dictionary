import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function LoginForm(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response){
    setPhotos(response.data.photos)
  }

  function search(){
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
     axios.get(apiUrl).then(handleResponse);
     let pexelsApiKey =
       `563492ad6f917000010000017ea05f137d344f4d8a26fe4224e9bfb7`;
       let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
       let headers = { Authorization: `Bearer ${pexelsApiKey}`}
         axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
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
       <Photos photos={photos} />
     </div>
   );
 } else{
  load()
  return"Loading";
 }
}
