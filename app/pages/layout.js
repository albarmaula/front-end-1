import "../globals.css";
import Link from "next/link";

export default function PagesLayout({children}) {
  return (
    <>
      {}
      <div className="header h-16 flex items-center justify-between bg-gray-800">
        <img
          className="max-h-full max-w-full px-2"
          src="../favicon.ico"
          alt="Icon"
        />
        <div className="flex space-x-7">
          <Link href="/pages/home" className="px-4">
            Home
          </Link>
          <Link href="/pages/about" className="px-4">
            About
          </Link>
        </div>
      </div>
      <div className="px-20">{children}</div>
      <div>
        <footer className="footer bg-gray-800">
          &copy; Ini punya Widaad Albar Maula. RPL. 1201200022
        </footer>
      </div>
    </>
  );
}
