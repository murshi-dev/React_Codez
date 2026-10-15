import { useState } from "react";
function Feedback() {
  //state/variable for username textbox
  const [uname, setUName] = useState("");
  //state/variable for rating combo box
  const [rating, setRating] = useState(0);
  //state/variable for status radio button
  const [resolved, setResolved] = useState(false);
  //state/variable for summary display
  const [summary, setSummary] = useState(false);

  //function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    //when form loads is submitted --display the content
    setSummary(true);
  }
  //design the UI
  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        {/* username textbox */}
        <input
          type="text"
          placeholder="Enter the username"
          value={uname}
          onChange={(e) => setUName(e.target.value)}
          disabled={summary}
        />
        <br />
        {/* label and combo box for rating */}
        <label>Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          disabled={summary}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        {/* label and radio button for status */}
        <label>Status</label>
        <input
          type="radio"
          name="status"
          checked={!resolved}
          onChange={(e) => setResolved(false)}
          disabled={summary}
        />
        Not Resolved
        <input
          type="radio"
          name="status"
          checked={resolved}
          onChange={(e) => setResolved(true)}
          disabled={summary}
        />
        Resolved
        <br />
        {/* submit button */}
        <button type="submit" disabled={summary}>
          Send Feedback
        </button>
      </form>
      {/* display summary */}
      {summary ? (
        <div>
          <h3>Feedback Summary</h3>
          <p>Username: {uname}</p>
          <p>Rating: {rating}</p>
          <p>Status: {resolved ? "Resolved" : "Not Resolved"}</p>
        </div>
      ) : null}
    </div>
  );
}
export default Feedback;
