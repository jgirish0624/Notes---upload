import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const isOwner = process.env.NEXT_PUBLIC_OWNER === "true";

export default function Home() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [filesList, setFilesList] = useState([]);
  const [search, setSearch] = useState("");

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage
      .from("pdf-uploads")
      .list("", { limit: 100, offset: 0 });

    if (!error) {
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
      setFilesList(sortedData);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const uploadFile = async () => {
    if (!file) return setMessage("Select a file first");
    if (file.type !== "application/pdf") return setMessage("Only PDF files allowed!");
    if (file.size > 10 * 1024 * 1024) return setMessage("Max file size 10MB");

    const { data, error } = await supabase.storage
      .from("pdf-uploads")
      .upload(file.name, file, { upsert: true });

    if (error) setMessage("Upload failed: " + error.message);
    else {
      setMessage("Upload successful: " + data.path);
      fetchFiles();
    }
  };

  const filteredFiles = filesList.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-center gap-8 font-semibold">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>

      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Mission 10th SHPS
        </h1>
        <h2 className="text-2xl text-gray-700 mb-8 animate-slide-up">
          Uploaded PDFs
        </h2>
      </section>

      {/* Upload Section */}
      {isOwner && (
        <section className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-semibold mb-4">Upload PDF</h3>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-4"
          />
          <button
            onClick={uploadFile}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
          <p className="mt-2 text-green-600">{message}</p>
        </section>
      )}

      {/* Files List */}
      <section className="max-w-3xl mx-auto mb-12">
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Search PDFs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-2/3 sm:w-1/2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredFiles.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">No files found.</p>
          ) : (
            filteredFiles.map((file) => (
              <a
                key={file.name}
                href={`https://<your-project-ref>.supabase.co/storage/v1/object/public/pdf-uploads/${file.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded shadow hover:bg-blue-50 transition"
              >
                <h4 className="font-semibold text-lg">{file.name}</h4>
                <p className="text-gray-500 text-sm">Click to download</p>
              </a>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        &copy; 2025 Mission 10th SHPS | All Rights Reserved
      </footer>
    </div>
  );
}
