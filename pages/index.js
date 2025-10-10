import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-black bg-opacity-80 shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">Grade 10 SHPS</h1>
        <nav className="space-x-6 text-lg">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          <Link href="/creator" className="text-blue-400 hover:text-blue-600">Creator’s Message</Link>
          <Link href="/login" className="hover:text-blue-400 transition">Login / Signup</Link>
        </nav>
      </header>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative flex-1 flex flex-col items-center justify-center text-center px-6"
      >
        <img
          src="/download.jpeg"
          alt="School"
          className="w-full max-h-[400px] object-cover rounded-2xl shadow-lg mb-8"
        />
        <h2 className="text-4xl font-semibold mb-4 text-blue-300">
          Welcome to Our Friendship Zone
        </h2>
        <p className="max-w-3xl text-lg leading-relaxed">
          We are a group of spirited and united boys from Grade 10 at Sacred Heart Public School.
          Together we share knowledge, laughter, and memories that shape our journey.
          Our friendship is built on trust, fun, and understanding — a bond that makes every moment
          special inside and outside the classroom.
        </p>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-center py-3 text-sm mt-10">
        Created by <span className="font-semibold text-blue-400">J. Girish</span>
      </footer>
    </div>
  );
}
