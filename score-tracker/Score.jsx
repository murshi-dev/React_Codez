import { useState } from "react";

function Score() {

  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [winner, setWinner] = useState("");

  function p1Correct() {
    if (winner !== "") return;

    let newScore = player1 + 1;

    if (newScore >= 5) {
      newScore = 5;
      setWinner("Player 1 Wins!");
    }

    setPlayer1(newScore);
  }

  function p1Wrong() {
    if (winner !== "") return;

    let newScore = player1 - 1;

    if (newScore < 0) newScore = 0;

    setPlayer1(newScore);
  }

  function p2Correct() {
    if (winner !== "") return;

    let newScore = player2 + 1;

    if (newScore >= 5) {
      newScore = 5;
      setWinner("Player 2 Wins!");
    }

    setPlayer2(newScore);
  }

  function p2Wrong() {
    if (winner !== "") return;

    let newScore = player2 - 1;

    if (newScore < 0) newScore = 0;

    setPlayer2(newScore);
  }

  function resetGame() {
    setPlayer1(0);
    setPlayer2(0);
    setWinner("");
  }

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Score Tracker</h1>

      <h2>Player 1      Score: {player1}</h2>
      <button onClick={p1Correct}>Correct +1</button>&nbsp;&nbsp;&nbsp;
      <button onClick={p1Wrong}>Wrong -1</button>

      <h2>Player 2      Score: {player2}</h2>
      <button onClick={p2Correct}>Correct +1</button>&nbsp;&nbsp;&nbsp;
      <button onClick={p2Wrong}>Wrong -1</button>

      <h2 style={{color:"brown"}}>{winner}</h2>

      {winner && (
        <button onClick={resetGame}>Reset Scores</button>
      )}

    </div>
  );
}

export default Score;