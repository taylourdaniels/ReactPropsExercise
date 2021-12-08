// 4c
import Bonus from "../bonus/Bonus";

// 3b
// function Exercise({ good, bad}) {

// 1a & 3d
function Exercise({ good = "Great", bad = "Not Great" }) {
// 2a
  return (
    <div>
      {/* 
      <h1>Great</h1>
      <h1>Not Great</h1>
      */}

      {/* 3c */}
      <h1>{good}</h1>
      <h1>{bad}</h1>

      {/* 4c */}
      <Bonus />
    </div>
  );
}

// 1b
export default Exercise;