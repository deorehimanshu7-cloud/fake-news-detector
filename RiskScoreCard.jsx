export default function RiskScoreCard({ score, verdict }) {
return (

  <p className="uppercase tracking-[0.4em] text-white/40 text-sm">
    Threat Score
  </p>

  <h2 className="text-8xl font-black text-orange-400 mt-4">
    {score}%
  </h2>

  <div className="mt-6 h-3 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-orange-500 to-red-500"
      style={{ width: `${score}%` }}
    />
  </div>

  <h3 className="mt-6 text-2xl font-bold text-red-200">
    {verdict}
  </h3>
</div>
);
}

