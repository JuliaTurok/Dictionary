import React, { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Keyword" onChange={updateKeyword} />

      <input type="submit" value="Submit" />
    </form>
  );
}
