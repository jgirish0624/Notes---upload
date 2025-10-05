import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-center gap-8 font-semibold">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>

      <section className="max-w-3xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          We are a group of 10th grade boys from Sacred Heart Public School who share not only a classroom but also a strong bond of friendship. Over the years, we have grown together, learning not just academic lessons but also life lessons that shape who we are as individuals and as a group. Our days are filled with laughter, curiosity, and exploration. Together, we study, solve problems, discuss ideas, and push each other to achieve our personal and collective goals.

          Our friendship is built on trust, support, and understanding. We celebrate each other&apos;s successes and provide encouragement during challenges. Each member brings unique talents and perspectives, which makes our group vibrant and diverse. Whether it &apos;s helping a friend understand a difficult topic in mathematics or collaborating on a science project, we always work together as a team.

          One of the most important influences in our journey is our class teacher, Mary Surekha. She has guided us not only academically but also in our personal growth. Her patience, encouragement, and dedication inspire us to do our best in studies and life. She supports our group activities, motivates us during challenges, and ensures that we remain focused while enjoying learning. Her guidance has strengthened our teamwork, discipline, and the values we uphold as a group.

          In addition to academics, we actively participate in extracurricular activities, sports, and creative projects. We organize small events, engage in competitions, and explore hobbies like painting, coding, music, and drama. These experiences teach us responsibility, time management, and collaboration. We have learned that success is not just about grades but about developing skills, confidence, and resilience.

          Through this website, we want to create a legacy. Not only do we want to share our notes and PDFs, but we also want to inspire other students to collaborate, support each other, and achieve their best. More than just schoolmates, we are best friends, partners in learning, and teammates in life. We are building memories, skills, and experiences that will last a lifetime, shaping the people we will become.
        </p>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        &copy; 2025 Mission 10th SHPS | About Page
      </footer>
    </div>
  );
}

