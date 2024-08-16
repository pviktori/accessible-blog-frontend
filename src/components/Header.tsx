import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/create" className="hover:underline">
              Create Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
