import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api_key = "AIzaSyD84uSJR_acygc8KdqayD6Dg37QyUFiROk";

const { GoogleGenerativeAI } = require("@google/generative-ai");

function App() {
  const user_search = useState('');
  const conv_result = useState('');

  const handle_submit = () => {
    comversation(user_search);
  };

  return (
    <div className="App">
      <header>
        <h1 class=".header-title">Trip Recomendator</h1>
      </header>
      <div class="credits">
      <a class="header-link">BY: juan-ant</a>
      </div>
      <div class="searcher_box">
        <div>
          <input type="text" id ="searcher" placeholder="Type anything"></input><button id="submitter" onClick={handle_submit}>v</button>
        </div>
        <div id="response_box">
          {conv_result}
        </div>
      </div>
    </div>
  );
}

async function comversation(promp) {
  let result = "";

  if (promp != "")
  {
    try { const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(api_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    const prompt = "Explain how AI works";
    result = await model.generateContent(prompt);
    } catch (error) {
      result = "Gemini Error";
      return (
        <p>{result}</p>
      );
    }
  }
  return (
    <p>{result}</p>
  );
}

export default App;
