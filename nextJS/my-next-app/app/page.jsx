import Home from "../abc/Home";

export default function RootLayout() {
  return (
    <html>
      <body>
        <header>
          <h1>Layout Header</h1>
        </header>
        <main>
          <h2>This is hardcoded in layout</h2>
          <Home />  {/* ALWAYS renders Home */}
        </main>
      </body>
    </html>
  );
}
