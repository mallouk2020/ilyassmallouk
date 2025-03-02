// app/components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="  text-gradient  text-2xl">ilyass mallouk</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="#about" className="text-white hover:text-gray-300 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-gray-300 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-gray-300 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}