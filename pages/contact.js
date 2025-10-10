import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-black bg-opacity-80 shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">Grade 10 SHPS</h1>
        <nav className="space-x-6 text-lg">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          <Link href="/login" className="hover:text-blue-400 transition">Login / Signup</Link>
        </nav>
      </header>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center"
      >
        <h2 className="text-4xl font-semibold mb-6 text-blue-300">Contact Us</h2>

        <div className="max-w-3xl text-lg leading-relaxed mb-8 space-y-3">
          <p><span className="font-semibold text-blue-400">Name:</span> J. Girish</p>
          <p><span className="font-semibold text-blue-400">Phone:</span> +91 63797 66162</p>
          <p><span className="font-semibold text-blue-400">Email:</span> jgirish0624@gmail.com</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-blue-950 bg-opacity-70 p-6 rounded-2xl shadow-lg max-w-4xl"
        >
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">About Me</h3>
          <p className="text-lg leading-relaxed mb-4">
            I’m a <span className="font-semibold text-blue-400">silent</span>, 
            <span className="font-semibold text-blue-400"> introverted</span>, 15-year-old student from 
            <span className="font-semibold text-blue-400"> Sacred Heart Public School</span>.  
            I may look quiet on the outside, but I have a strong passion for learning, creativity, and friendship.  
            I’m proud that I’ve built this website with my basic coding knowledge and the helpful support of ChatGPT.
          </p>
        </motion.div>

        {/* Classmates Table */}
        <div className="mt-10 w-full max-w-3xl">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Our Class Boys</h3>
          <table className="w-full border-collapse border border-blue-700 text-center text-lg">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="border border-blue-700 px-4 py-2">No.</th>
                <th className="border border-blue-700 px-4 py-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Alfred","Anto","Antony","Binolin","Cibi","Gill","Girish","Gideon",
                "Gowshik","Iyyappan","Jefrin","Jerin Issac","Kawaskar","Manishakar",
                "Nadeem","Nithin","Sakthi","Sharon","Soosai"
              ].map((name, index) => (
                <tr key={index} className="hover:bg-blue-800 transition">
                  <td className="border border-blue-700 px-4 py-2">{index + 1}</td>
                  <td className="border border-blue-700 px-4 py-2">{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-center py-3 text-sm">
        Created by <span className="font-semibold text-blue-400">J. Girish</span>
      </footer>
    </div>
  );
}
