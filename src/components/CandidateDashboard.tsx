import React, { useState } from 'react';
import { 
  User, 
  HelpCircle, 
  Upload, 
  Briefcase,
  Menu,
  X,
  FileText,
  ArrowLeft
} from 'lucide-react';

const CandidateDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [jobRole, setJobRole] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(`Application submitted for: ${jobRole}`);
  };

  return (
    <div className="flex h-[calc(100vh-80px)]">
      {/* Mobile sidebar toggle */}
      <button 
        className="fixed bottom-4 right-4 z-50 md:hidden bg-purple-600 p-3 rounded-full shadow-lg"
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
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-2xl font-bold">
              JS
            </div>
            <div>
              <h2 className="text-xl font-semibold">Vishnu Prasad</h2>
              <p className="text-slate-400">Software Developer</p>
            </div>
          </div>

          <nav className="mb-8">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-purple-600/20 text-purple-400 border-l-4 border-purple-500' 
                      : 'hover:bg-slate-700/50'
                  }`}
                >
                  <User size={20} />
                  <span>Profile</span>
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
                  <span>vishnu.prasad@example.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phone:</span>
                  <span>(+91) 9999999999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span>Nitte, Karkala</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Experience:</span>
                  <span>5 years</span>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-6">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">GraphQL</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Docker</span>
              </div>

              <h3 className="text-lg font-medium mt-6">Education</h3>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Master of Computer Science</div>
                  <div className="text-sm text-slate-300">NITTE</div>
                  <div className="text-sm text-slate-400">2022 - 2026</div>
                </div>
                <div>
                  <div className="font-medium">Bachelor of Engineering</div>
                  <div className="text-sm text-slate-300">NITTE University</div>
                  <div className="text-sm text-slate-400">2014 - 2018</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">Job Application</h2>
              <p className="text-slate-300">
                Apply for open positions that match your skills and experience
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors">
                <HelpCircle size={24} className="text-purple-400" />
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Submit Application</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="jobRole" className="block text-sm font-medium text-slate-300 mb-2">
                  Job Role
                </label>
                <select
                  id="jobRole"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select a position</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="fullstack">Full Stack Developer</option>
                  <option value="mobile">Mobile Developer</option>
                  <option value="devops">DevOps Engineer</option>
                  <option value="data">Data Scientist</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Upload Resume
                </label>
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center">
                    {resumeFile ? (
                      <>
                        <FileText size={48} className="text-purple-400 mb-3" />
                        <p className="text-slate-300 mb-1">{resumeFile.name}</p>
                        <p className="text-slate-400 text-sm mb-4">
                          {(resumeFile.size / 1024).toFixed(2)} KB
                        </p>
                        <button
                          type="button"
                          onClick={() => setResumeFile(null)}
                          className="text-red-400 text-sm hover:text-red-300"
                        >
                          Remove
                        </button>
                      </>
                    ) : (
                      <>
                        <Upload size={48} className="text-slate-400 mb-3" />
                        <p className="text-slate-300 mb-1">Drag and drop your resume here</p>
                        <p className="text-slate-400 text-sm mb-4">
                          or click to browse (PDF, DOCX, max 5MB)
                        </p>
                        <label className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">
                          Browse Files
                          <input
                            type="file"
                            accept=".pdf,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-300 mb-2">
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  rows={5}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us why you're a good fit for this position..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg transition-colors font-medium flex items-center gap-2"
                >
                  <Briefcase size={20} />
                  Submit Application
                </button>
              </div>
            </form>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Recommended Jobs</h3>
            
            <div className="space-y-4">
              <div className="bg-slate-700/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Senior Frontend Developer</h4>
                  <span className="text-purple-400 text-sm">New</span>
                </div>
                <p className="text-slate-300 text-sm mb-2">TechCorp Inc. • Remote</p>
                <p className="text-slate-400 text-sm mb-3">
                  Looking for an experienced developer with React, TypeScript, and state management expertise.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">Redux</span>
                </div>
              </div>

              <div className="bg-slate-700/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Full Stack Engineer</h4>
                  <span className="text-slate-400 text-sm">3d ago</span>
                </div>
                <p className="text-slate-300 text-sm mb-2">InnovateSoft • Bengaluru, Karnataka</p>
                <p className="text-slate-400 text-sm mb-3">
                  Join our team to build scalable web applications using modern technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">Node.js</span>
                  <span className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">MongoDB</span>
                </div>
              </div>

              <div className="bg-slate-700/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">DevOps Specialist</h4>
                  <span className="text-slate-400 text-sm">1w ago</span>
                </div>
                <p className="text-slate-300 text-sm mb-2">CloudSystems • Hybrid</p>
                <p className="text-slate-400 text-sm mb-3">
                  Help us build and maintain our cloud infrastructure and CI/CD pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">AWS</span>
                  <span className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">Docker</span>
                  <span className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;