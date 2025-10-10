import { motion } from "framer-motion";
import Link from "next/link";

export default function Creator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white flex flex-col items-center justify-center p-8"
    >
      <div className="max-w-3xl bg-blue-950/70 backdrop-blur-md p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-2">Creator’s Message</h1>
        <p className="text-center text-blue-400 mb-8">by <span className="font-semibold">J. Girish</span></p>

        <p className="text-lg leading-relaxed mb-6">
          What’s up everyone! <br /><br />
          I’m <strong>J. Girish</strong>, the creator of this website. It took me almost a month to complete it, and every bit of it reflects my hard work, patience, and passion. While building this site, I faced thousands of errors and many struggles — but that’s exactly what made it meaningful.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I’ve learned that success after hard work is the truest form of happiness. It’s a feeling you can’t really express in words, but you know it deep inside. Just like in coding, life gives you errors. Sometimes things crash, sometimes you need to debug, and sometimes you just have to start again. But every time you fix a bug, you grow stronger — in life and in code.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          One of the most important lessons I learned from this journey is patience. Nothing great comes instantly. You keep learning, improving, and pushing through challenges until it all starts working — both in your project and in life.
        </p>

       <div className="border-l-4 border-blue-400 pl-4 italic text-blue-300 mb-6"></div>
        
        Note: This website is a personal project, so it may have some minor bugs during login or signup. Most features, however, should work smoothly.
       
       
        <div className="border-l-4 border-blue-400 pl-4 italic text-blue-300 mb-6">
          “Every error you face teaches you something new — in coding and in life.” <br />
          — J. Girish
        </div>
        
        <div className="border-l-4 border-blue-400 pl-4 italic text-blue-300 mb-6">
          “Success tastes best when it’s earned through hard work and patience.” <br />
          — J. Girish
        </div>

        <p className="text-lg leading-relaxed mb-6">
          This website is not just a project for me — it’s a piece of my journey.
        </p>

        <div className="text-center text-sm text-blue-400 mt-6">
          © Created with dedication by <strong>J. Girish</strong>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg text-white font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
