import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
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

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex-1 flex flex-col items-center justify-center px-8 py-10 text-center"
      >
        <h2 className="text-4xl font-semibold mb-6 text-blue-300">About Us</h2>

        <p className="max-w-4xl text-lg leading-relaxed mb-6">
          We are the <span className="font-semibold text-blue-400">Aura Boys</span> of Grade 10, Sacred Heart Public School.
          Our group is a mix of calm, cool, funny, and loyal friends who share one strong bond — <span className="italic">Friendship</span>.
          In the case of friendship, we are kings. We never leave anyone behind, no matter what.
        </p>

        <p className="max-w-4xl text-lg leading-relaxed mb-6">
          Sometimes we fight, argue, or misunderstand each other, but within one hour we’re back together laughing like nothing happened.
          That’s what makes our bond real and unbreakable. We support each other in every challenge — whether it’s studies, sports, or life itself.
        </p>

        <p className="max-w-4xl text-lg leading-relaxed">
          Our class is full of energy, positivity, and fun. We learn, play, and grow together — like a family.
          We’re not just classmates, we’re brothers with an aura that makes Grade 10 SHPS truly unforgettable.
          
          <p className="max-w-4xl text-lg leading-relaxed mb-6"></p>
        My class teacher, Mary Surekha mam, is not just a teacher but a true guide.
        She teaches us lessons that go beyond books and classrooms.
        Her words inspire us to be disciplined, kind, and confident.
        She treats every student with care and understanding.
        We’re lucky to have her as our teacher and role model.
        
        
        </p>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-center py-3 text-sm">
        Created by <span className="font-semibold text-blue-400">J. Girish</span>
      </footer>
    </div>
  );
}

