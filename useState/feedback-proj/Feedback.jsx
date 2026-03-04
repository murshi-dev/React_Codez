import { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [summary, setSummary] = useState(false);

  const statusText = resolved ? "Resolved" : "Not Resolved";

  function handleSubmit(e) {
    e.preventDefault(); // stop page refresh
    setSummary(true);
  }

  return (
    <div>
      <h2>Customer Feedback</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Enter customer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={summary}
        />
        {/* Rating */}
        <h3>Rating: {rating}</h3>
        <button
          type="button"
          onClick={() => setRating(rating + 1)}
          disabled={summary}
        >
          {" "}
          +
        </button>

        <button
          type="button"
          onClick={() => setRating(rating - 1)}
          disabled={summary}
        >
          {" "}
          -
        </button>

        {/* Status */}
        <button
          type="button"
          onClick={() => setResolved(!resolved)}
          disabled={summary}
        >
        {statusText}
        </button>

        {/* Submit */}
        <button type="submit" disabled={summary}>
          Submit Feedback
        </button>
      </form>

      {/* Summary */}
      {/* summary = true  → show summary
          summary = false → show nothing */}
      {summary ? (
        <div style={{ marginTop: "20px" }}>
          <h3>Feedback Summary</h3>
          <p>Name: {name}</p>
          <p>Rating: {rating}</p>
          <p>Status: {statusText}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Feedback;
