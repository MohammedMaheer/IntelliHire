import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  BarChart3, 
  HelpCircle, 
  Menu, 
  X,
  Mic,
  MicOff,
  ArrowLeft
} from 'lucide-react';

const InterviewerDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulating transcription being added
      const interval = setInterval(() => {
        setTranscription(prev => 
          prev + "I have experience working with React and TypeScript for about 3 years now. In my previous role, I developed several enterprise applications using modern frontend technologies. "
        );
      }, 5000);
      
      // Clear after some time for demo purposes
      setTimeout(() => clearInterval(interval), 15000);
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)]">
      {/* Mobile sidebar toggle */}
      <button 
        className="fixed bottom-4 right-4 z-50 md:hidden bg-blue-600 p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`bg-slate-800/80 backdrop-blur-sm border-r border-slate-700 w-80 transition-all duration-300 overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static h-[calc(100vh-80px)] z-40`}
      >
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl font-bold">
              JD
            </div>
            <div>
              <h2 className="text-xl font-semibold">Soham Misra</h2>
              <p className="text-slate-400">Senior Technical Recruiter</p>
            </div>
          </div>

          <nav className="mb-8">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500' 
                      : 'hover:bg-slate-700/50'
                  }`}
                >
                  <User size={20} />
                  <span>Profile</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('meetings')}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'meetings' 
                      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500' 
                      : 'hover:bg-slate-700/50'
                  }`}
                >
                  <Calendar size={20} />
                  <span>Scheduled Meetings</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('scoring')}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'scoring' 
                      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500' 
                      : 'hover:bg-slate-700/50'
                  }`}
                >
                  <BarChart3 size={20} />
                  <span>Scoring Process</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('help')}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'help' 
                      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500' 
                      : 'hover:bg-slate-700/50'
                  }`}
                >
                  <HelpCircle size={20} />
                  <span>Help</span>
                </button>
              </li>
            </ul>
          </nav>

          {activeTab === 'profile' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Email:</span>
                  <span>soham.misra@intellihire.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Department:</span>
                  <span>Engineering</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span>Kolkatta, West Bengal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Joined:</span>
                  <span>Jan 15, 2023</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'meetings' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Upcoming Interviews</h3>
              <div className="space-y-3">
                <div className="bg-slate-700/30 p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Mohammed Maheer</span>
                    <span className="text-sm text-blue-400">Today</span>
                  </div>
                  <div className="text-sm text-slate-300">Frontend Developer</div>
                  <div className="text-sm text-slate-400">2:00 PM - 3:00 PM</div>
                </div>
                <div className="bg-slate-700/30 p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Shreyas KL</span>
                    <span className="text-sm text-blue-400">Tomorrow</span>
                  </div>
                  <div className="text-sm text-slate-300">Backend Engineer</div>
                  <div className="text-sm text-slate-400">10:30 AM - 11:30 AM</div>
                </div>
                <div className="bg-slate-700/30 p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Ameez</span>
                    <span className="text-sm text-blue-400">May 25</span>
                  </div>
                  <div className="text-sm text-slate-300">UX Designer</div>
                  <div className="text-sm text-slate-400">1:00 PM - 2:00 PM</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scoring' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Candidate Evaluation</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-slate-300 block mb-1">Technical Skills</label>
                  <div className="w-full bg-slate-700/30 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-slate-300 block mb-1">Communication</label>
                  <div className="w-full bg-slate-700/30 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-slate-300 block mb-1">Problem Solving</label>
                  <div className="w-full bg-slate-700/30 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-slate-300 block mb-1">Cultural Fit</label>
                  <div className="w-full bg-slate-700/30 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'help' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Help Center</h3>
              <div className="space-y-3">
                <div className="bg-slate-700/30 p-3 rounded-lg">
                  <h4 className="font-medium mb-1">How to conduct an interview</h4>
                  <p className="text-sm text-slate-300">Learn best practices for effective interviewing</p>
                </div>
                <div className="bg-slate-700/30 p-3 rounded-lg">
                  <h4 className="font-medium mb-1">Using the transcription tool</h4>
                  <p className="text-sm text-slate-300">Get the most out of our AI-powered transcription</p>
                </div>
                <div className="bg-slate-700/30 p-3 rounded-lg">
                  <h4 className="font-medium mb-1">Scoring candidates</h4>
                  <p className="text-sm text-slate-300">Guidelines for fair and effective evaluation</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Interview Session</h2>
              <p className="text-slate-300">
                Record and transcribe candidate responses in real-time
              </p>
            </div>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Live Transcription</h3>
              <button 
                onClick={toggleRecording}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isRecording 
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                    : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                }`}
              >
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
                <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
              </button>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 h-80 overflow-y-auto">
              {transcription ? (
                <p className="text-slate-300 whitespace-pre-line">{transcription}</p>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-400">
                  {isRecording 
                    ? "Listening... Speak to see the transcription appear here." 
                    : "Click 'Start Recording' to begin transcribing the interview"}
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Interview Notes</h3>
            <textarea 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 h-40 text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add your notes about the candidate here..."
            ></textarea>
            <div className="flex justify-end mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                Save Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewerDashboard;