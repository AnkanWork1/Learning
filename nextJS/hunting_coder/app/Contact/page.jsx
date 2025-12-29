"use client";
export default function Contact() {
    return (
        <>

            <div className="flex flex-col items-center justify-center bg-black font-sans ">
                <main className="flex min-h-screen min-w-screen gap-20 flex-col   py-30 px-16 bg-black-100  ">
                    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                        <h1 className="contact">
                            Contact Us
                        </h1>
                        <p className="max-w-md text-lg ">
                            This is the contact page of Hunting Coders. Feel free to reach out to us for any inquiries or support.
                        </p>
                    </div>
                </main>
            </div>

            <style jsx>{`
                .contact {
                    color: red;                     /* Correct property */
                    max-width: 20rem;               /* approx Tailwind xs */
                    font-size: 1.875rem;            /* Tailwind 3xl */
                    font-weight: 600;               /* Tailwind semibold */
                    letter-spacing: -0.025em;       /* Tailwind tracking-tight */
                }
            `}</style>

        </>
    );
}