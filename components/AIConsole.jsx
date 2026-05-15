export default function AIConsole({ logs }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="uppercase tracking-[0.3em]">
          AI Terminal
        </h3>

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
      </div>

      <div className="space-y-3 max-h-[250px] overflow-auto">
        {logs.map((log, index) => (
          <div key={index}>
            &gt; {log}
          </div>
        ))}
      </div>
    </div>
  );
}
