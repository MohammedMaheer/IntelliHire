import React from 'react';
import { UserRound, Users } from 'lucide-react';

interface LandingPageProps {
  onSelectUserType: (type: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSelectUserType }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Welcome to IntelliHire
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          The next-generation AI-powered recruitment platform that connects the right talent with the right opportunities.
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-6">I am a...</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div 
            onClick={() => onSelectUserType('interviewer')}
            className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-8 rounded-xl border border-blue-500/30 w-72 h-72 flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
          >
            <Users size={64} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interviewer</h3>
            <p className="text-slate-300 text-sm">
              Conduct interviews, evaluate candidates, and manage your recruitment pipeline
            </p>
          </div>

          <div 
            onClick={() => onSelectUserType('candidate')}
            className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-8 rounded-xl border border-purple-500/30 w-72 h-72 flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
          >
            <UserRound size={64} className="text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Candidate</h3>
            <p className="text-slate-300 text-sm">
              Apply for positions, showcase your skills, and find your dream job
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;