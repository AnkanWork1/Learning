import "./globals.css";
import Home from "../abc/Home"; // correct import

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-6">
        <header className="bg-gray-800 text-white p-4 rounded">
          <h1>My Dashboard Layout</h1>
        </header>

        <div className="my-4">
          <Home /> {/* Home component renders here */}
        </div>

        <main className="mt-4">
          {children} {/* Page content goes here */}
        </main>
      </body>
    </html>
  );
}
