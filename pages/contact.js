export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-center gap-8 font-semibold">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>

      <section className="max-w-3xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          You can reach out to us anytime for questions, suggestions, or sharing resources.
        </p>
        <p className="text-lg text-gray-800 font-semibold">📧 Email: jgirish0624@gmail.com</p>
        <p className="text-lg text-gray-800 mt-2">🏫 School: Sacred Heart Public School</p>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        &copy; 2025 Mission 10th SHPS | Contact Page
      </footer>
    </div>
  );
}
