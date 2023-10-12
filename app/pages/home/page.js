"use client";
import { useState } from "react";

function Header({ title }) {
  // Parameter bernama title
  return <h1 className="text-center">HOME PAGE 🐈‍⬛ {title ? title : "Contoh parameter"}</h1>;
}

function Content() {
  const names = ["Widaad", "Rizki", "Made"];
  const [likes, setLikes] = useState(0);

  return (
    <div className="m-5">
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button
        className="mx-auto block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Like ({likes})
      </button>
    </div>
  );
  function handleClick() {
    setLikes(likes + 1);
  }
}

export default function HomePage() {
  return (
    <>
      {}
      <div>
        <Header />
        <Content />
      </div>
    </>
  );
}
