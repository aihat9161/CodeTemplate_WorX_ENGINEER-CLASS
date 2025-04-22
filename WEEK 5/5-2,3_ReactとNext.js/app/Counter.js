"use client";
import { useState } from "react"; // useState をインポート

export default function Counter() {
    const [count, setCount] = useState(0);
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>現在のカウント: {count}</p>
        <button onClick={incrementCount}>カウントを増やす</button>
      </div>
    );
  }