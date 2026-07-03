import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-5">
      <nav className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">My Portfolio</h1>

        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}