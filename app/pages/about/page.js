function Header() {
  return <h1 className="text-center">ABOUT PAGE 🐈‍⬛</h1>;
}

function Content() {
  const names = ["Widaad", "Rizki", "Made"];

  return (
    <ul className="m-5">
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <>
      {}
      <Header />
      <Content />
    </>
  );
}
