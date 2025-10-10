import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Navbar() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check if a user is logged in
    const session = supabase.auth.session();
    if (session?.user) {
      supabase
        .from("users")
        .select("name")
        .eq("email", session.user.email)
        .single()
        .then(({ data }) => {
          if (data) setUserName(data.name);
        });
    }

    // Listen for login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        supabase
          .from("users")
          .select("name")
          .eq("email", session.user.email)
          .single()
          .then(({ data }) => {
            if (data) setUserName(data.name);
          });
      } else {
        setUserName("");
      }
    });

    return () => {
      listener.unsubscribe();
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-5 bg-black bg-opacity-80 shadow-lg">
      <h1 className="text-3xl font-bold tracking-wide">Grade 10 SHPS</h1>
      <nav className="space-x-6 text-lg">
        <Link href="/" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-400 transition">About</Link>
        <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>

        {userName ? (
          <span className="text-blue-400 font-semibold">Welcome {userName}</span>
        ) : (
          <Link href="/login" className="hover:text-blue-400 transition">Login / Signup</Link>
        )}
      </nav>
    </header>
  );
}

