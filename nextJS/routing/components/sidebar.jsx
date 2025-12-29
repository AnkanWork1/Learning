import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className=" w-60 bg-gray-100 h-[calc(100vh-56px)] pt-18 p-15">
      <div className="pt-20 flex flex-col gap-5 ">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/Tables">Tables</Link>
        <Link href="/dashboard/profile">Profile</Link>
      </div>
    </aside>
    );
}