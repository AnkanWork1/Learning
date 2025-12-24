
import Image from "next/image";
import Script from "next/script";
export const metadata = {
  title: "Hunting Coders",
  description: "A Next.js project template with Tailwind CSS and Dark Mode support.",
};
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black font-sans ">
      {/* <Script src='/sc.js' stratergy="lazyOnload"></Script> */}

      <main className="flex min-h-screen min-w-screen gap-20 flex-col   py-30 px-16 bg-black-100  text-red-600">

        <div className="flex flex-col items-center gap-6 text-center  ">
          <h1 className="max-w-xs text-3xl font-semibold  tracking-tight ">
            Hunting Coders
          </h1>
          {/* <Image
            src="/Home.png"
            alt="Hunting Coders Logo"
            width={500}
            height={200}
            justify-self="center"
          /> */}
          <p className="max-w-md text-lg ">
            Looking for a starting point or more instructions? Head over to{" "}
          </p>
          
        </div>
        <div className="w-full flex flex-col gap-8 text-left text-green-500">
          <div className="blogItem text-left">
            <h1>Blog 1</h1>
            <p>This is blog 1 description</p>
          </div>
          <div className="blogItem text-left">
            <h1>Blog 2</h1>
            <p>This is blog 1 description</p>
          </div>
          <div className="blogItem text-left">
            <h1>Blog 3</h1>
            <p>This is blog 1 description</p>
          </div>
          <div className="blogItem text-left">
            <h1>Blog 4</h1>
            <p>This is blog 1 description</p>
          </div>
        </div>

      </main>
    </div>
  );
}
