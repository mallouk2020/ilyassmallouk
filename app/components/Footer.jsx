// app/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 ilyass mallouk. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  }