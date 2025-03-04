import React, { useState } from 'react';
import { BrainCog } from 'lucide-react';
import LandingPage from './components/LandingPage';
import InterviewerDashboard from './components/InterviewerDashboard';
import CandidateDashboard from './components/CandidateDashboard';

function App() {
  const [userType, setUserType] = useState<string | null>(null);

  const handleUserTypeSelect = (type: string) => {
    setUserType(type);
  };

  const handleBackToLanding = () => {
    setUserType(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <header className="py-4 px-6 flex items-center border-b border-slate-700">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackToLanding}>
          <BrainCog size={32} className="text-blue-400" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            IntelliHire
          </h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {!userType && <LandingPage onSelectUserType={handleUserTypeSelect} />}
        {userType === 'interviewer' && <InterviewerDashboard />}
        {userType === 'candidate' && <CandidateDashboard />}
      </main>
    </div>
  );
}

export default App;