import { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");//string
  const [rating, setRating] = useState(0);//number
  const [resolved, setResolved] = useState(false);//boolean
  const [showSummary, setShowSummary] = useState(false);//boolean
   {/* This is a jsx comment  */} 
  return (
    <div style={{ padding: "20px" }}> {/* 2 curly brace--1. enter JS, 2. enter object  */} 
      <h1>Customer Service Feedback</h1>

      {/* Controlled Input */}
      <input
        type="text"
        placeholder="Enter customer name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <hr />

      {/* Rating Counter */}
      <h3>Rating: {rating}</h3>
      <button onClick={() => rating < 5 && setRating(rating + 1)}>+</button>
      <button onClick={() => rating > 0 && setRating(rating - 1)}>-</button>

      <hr />

      {/* Issue Resolved Toggle */}
      <button onClick={() => setResolved(!resolved)}>
        {resolved ? "Issue Resolved" : "Not Resolved"}
      </button>

      <hr />

      {/* Show Summary Button */}
      <button onClick={() => setShowSummary(!showSummary)}>
             {/* conditional rendering --"Only show this if showSummary is true" */}
            {showSummary ? "Hide Summary" : "Show Summary"} 
      </button>

      {showSummary && (
        <div style={{ marginTop: "20px" }}>
          <h3>Feedback Summary</h3>
          <p>Name: {name || "Not provided"}</p>
          <p>Rating: {rating} / 5</p>
          <p>Status: {resolved ? "Resolved" : "Not Resolved"}</p>
        </div>
      )}
    </div>
  );
}

export default Feedback;