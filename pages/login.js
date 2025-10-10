import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) setMessage('Invalid credentials or user not found');
    else {
      const user = data.user;
      setMessage(`Welcome ${user.user_metadata?.name || ''}`);
      setTimeout(() => router.push('/'), 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-blue-900 text-white p-6"
    >
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-md bg-blue-950 p-6 rounded-xl shadow-lg space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 rounded text-black" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 rounded text-black" />
        <button type="submit" className="w-full bg-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">Login</button>
        {message && <p className="text-sm mt-2">{message}</p>}
        <p className="text-center">New here? <Link href="/signup" className="text-blue-400 underline">Register</Link></p>
      </form>
    </motion.div>
  );
}
