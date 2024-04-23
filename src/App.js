import React, { useState } from "react";
import "./App.css";
import photo from "./image.jpg";

function App() {
  const keywords = [
    "Product Lifecycle Management",
    "Market Research",
    "Data Analysis",
    "Financial Acumen",
    "Project Management",
    "Agile Methodologies",
    "User Experience Design",
    "Technical Proficiency",
    "Prototyping and MVP Development",
    "Competitive Analysis",
    "Regulatory Knowledge",
    "Roadmapping",
  ];

  const [jobDescription, setJobDescription] = useState("");
  const [matchingKeywords, setMatchingKeywords] = useState([]);

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleProceedClick = () => {
    if (jobDescription.trim() === "") {
      alert("Please enter a job description.");
      return;
    }
    const matchedKeywords = matchKeywords(jobDescription, keywords);
    setMatchingKeywords(matchedKeywords);
  };

  const matchKeywords = (jobDescription, keywords) => {
    const lowerCaseJobDescription = jobDescription.toLowerCase();
    const lowerCaseKeywords = keywords.map((keyword) => keyword.toLowerCase());
    return lowerCaseKeywords.filter((keyword) =>
      lowerCaseJobDescription.includes(keyword)
    );
  };

  return (
    <div className="container">
      <img src={photo} alt="Background" className="background-image" />
      <h1 className="title">Job Description</h1>
      <textarea
        className="textarea"
        placeholder="Paste job description here"
        value={jobDescription}
        onChange={handleJobDescriptionChange}
      />
      <button className="button" onClick={handleProceedClick}>
        Proceed
      </button>
      {matchingKeywords.length > 0 && (
        <div>
          <h2 style={{ color: "black" }}>Matching Keywords:</h2>
          <ul className="list">
            {matchingKeywords.map((keyword, index) => (
              <li className="list-item" key={index}>
                <b>{keyword}</b>
              </li>
            ))}
          </ul>
          <p>
            <strong>Total Matching Keywords: {matchingKeywords.length}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
