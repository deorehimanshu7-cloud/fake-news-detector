import { useState } from 'react';

export default function AnalysisForm({ onAnalyze }) {
  const [headline, setHeadline] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    onAnalyze({ headline, url });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div>
        <h2 className="text-4xl font-black mb-8">
          Analyze Article
        </h2>

        <textarea
          rows={8}
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="Paste article headline or content"
          className="w-full rounded-3xl bg-black/30 border border-white/10 p-6 outline-none"
        />

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Source URL"
          className="w-full mt-6 rounded-2xl bg-black/30 border border-white/10 p-5 outline-none"
        />

        <button
          onClick={handleSubmit}
          className="mt-8 w-full py-5 rounded-2xl bg-orange-500 hover:scale-[1.02] transition-all text-black font-bold"
        >
          RUN FULL ANALYSIS
        </button>
      </div>
    </section>
  );
}
