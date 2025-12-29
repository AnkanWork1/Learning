export default function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-black font-sans ">
      <main className="flex min-h-screen min-w-screen gap-20 flex-col   py-30 px-16 bg-black-100  text-green-600">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold  tracking-tight ">
            About Us
          </h1>
          <p className="max-w-md text-lg ">
            This is the about page of Hunting Coders. We provide quality coding tutorials and resources for developers.
          </p>
        </div>
      </main>
    </div>
  );
}