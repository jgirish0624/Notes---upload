import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', class: '10th Grade', email: '', password: '', shps: false });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Password strength validation
    const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!strong.test(password)) {
      setMessage('Password must have uppercase, lowercase, number & at least 6 characters.');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, class: formData.class, shps: formData.shps },
        emailRedirectTo: 'http://localhost:3000/login'
      }
    });

    if (error) setMessage(error.message);
    else setMessage('Verification email sent! Check your inbox to confirm.');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-blue-900 text-white p-6"
    >
      <h1 className="text-3xl font-bold mb-4">Create Account</h1>
      <form onSubmit={handleSignup} className="w-full max-w-md bg-blue-950 p-6 rounded-xl shadow-lg space-y-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 rounded text-black" />
        <select name="class" value={formData.class} onChange={handleChange} className="w-full p-2 rounded text-black">
          <option>10th Grade</option>
        </select>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="shps" checked={formData.shps} onChange={handleChange} /> Are you SHPS student?
        </label>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 rounded text-black" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 rounded text-black" />
        <button type="submit" className="w-full bg-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">Register</button>
        {message && <p className="text-sm mt-2">{message}</p>}
        <p className="text-center">Already registered? <Link href="/login" className="text-blue-400 underline">Login</Link></p>
      </form>
    </motion.div>
  );
}
