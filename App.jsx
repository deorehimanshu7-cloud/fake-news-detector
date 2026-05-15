import { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import HeroSection from './components/HeroSection';
import AnimatedBackground from './components/AnimatedBackground';
import AnalysisForm from './components/AnalysisForm';
import RiskScoreCard from './components/RiskScoreCard';
import AIConsole from './components/AIConsole';
import Footer from './components/Footer';

export default function App() {

const [score, setScore] = useState(74);
const [verdict, setVerdict] = useState('LIKELY MISLEADING');

const logs = [
'Initializing scan...',
'Checking source reputation...',
'Analyzing clickbait probability...',
'Threat score generated successfully.'
];

const handleAnalyze = () => {
setScore(91);
setVerdict('VERY LIKELY FAKE');
};

return (
    <main>
      <AnimatedBackground />

      <HeroSection />

      <AnalysisForm onAnalyze={handleAnalyze} />

      <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 pb-20">

        <RiskScoreCard
          score={score}
          verdict={verdict}
        />

        <AIConsole logs={logs} />

      </section>

      <Footer />
      <SpeedInsights />
    </main>
  );
}

