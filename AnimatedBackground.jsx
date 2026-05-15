export default function AnimatedBackground() {
return (


  <div className="absolute inset-0 opacity-20">
    <div className="absolute w-[700px] h-[700px] bg-orange-500 blur-[180px] rounded-full top-[-200px] left-[-200px] animate-pulse" />

    <div className="absolute w-[600px] h-[600px] bg-cyan-500 blur-[180px] rounded-full bottom-[-200px] right-[-200px] animate-pulse" />
  </div>

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
</div>
);
}
