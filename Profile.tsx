import React, { useState, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { User, Settings, FileText, Bell, LogOut, Mail, Phone, Lock, Edit, Clock, CheckCircle, Download, AlertTriangle, ArrowRight, Upload, Plus } from 'lucide-react';
import { toast } from 'sonner';

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'applications' | 'documents' | 'settings'>('profile');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Mock user data
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    country: 'United States',
    phone: '+1 555-123-4567',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  };
  
  // Mock applications data
  const applications = [
    {
      id: 'APP-2023-001',
      type: 'Student Visa (Tier 4)',
      status: 'In Progress',
      lastUpdated: '2023-10-15',
      progress: 60,
    },
    {
      id: 'APP-2023-002',
      type: 'Visitor Visa',
      status: 'Approved',
      lastUpdated: '2023-09-05',
      progress: 100,
    },
  ];
  
  // Mock documents data
  const [documents, setDocuments] = useState([
    {
      id: 'DOC-2023-001',
      name: 'Student Visa Checklist.pdf',
      type: 'PDF',
      size: '2.4 MB',
      date: '2023-10-10',
    },
    {
      id: 'DOC-2023-002',
      name: 'Passport Scan.jpg',
      type: 'Image',
      size: '1.8 MB',
      date: '2023-10-09',
    },
    {
      id: 'DOC-2023-003',
      name: 'Accommodation Proof.pdf',
      type: 'PDF',
      size: '3.2 MB',
      date: '2023-10-08',
    },
  ]);

  const handleUploadDocument = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a mock document entry
      const newDocument = {
        id: `DOC-${Math.random().toString(36).substring(2, 9)}`,
        name: file.name,
        type: file.type.split('/')[1].toUpperCase(),
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        date: new Date().toISOString().split('T')[0],
      };
      
      setDocuments(prev => [newDocument, ...prev]);
      
      toast.success(`Successfully uploaded ${file.name}`, {
        duration: 3000,
      });
      
      // Clear input value to allow re-uploading the same file
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDownloadDocument = (docName: string) => {
    toast.success(`Downloading ${docName}...`, {
      duration: 3000,
    });
    
    // Simulate download with timeout
    setTimeout(() => {
      // Create a dummy blob to simulate a file download
      const blob = new Blob(['Document content would go here in a real application'], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = docName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success(`${docName} downloaded successfully!`, {
        duration: 3000,
      });
    }, 1000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <div className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
              <div className="relative mb-6 sm:mb-0 sm:mr-8">
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <button
                  className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-100 transition-colors"
                >
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-1">{userData.name}</h3>
                <p className="text-gray-600 mb-4">{userData.country}</p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                    {userData.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    {userData.phone}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="font-medium mb-4">Personal Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Full Name</label>
                    <input
                      type="text"
                      defaultValue={userData.name}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Email Address</label>
                    <input
                      type="email"
                      defaultValue={userData.email}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue={userData.phone}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Country of Residence</label>
                    <input
                      type="text"
                      defaultValue={userData.country}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="font-medium mb-4">Passport Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Passport Number</label>
                    <input
                      type="text"
                      placeholder="Enter passport number"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Issue Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Expiry Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Issuing Country</label>
                    <input
                      type="text"
                      placeholder="Enter issuing country"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="button-primary">Save Changes</button>
            </div>
          </div>
        );
        
      case 'applications':
        return (
          <div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-medium">Your Visa Applications</h3>
              </div>
              
              <div className="divide-y divide-gray-100">
                {applications.map((app) => (
                  <div key={app.id} className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="block text-sm text-gray-500">Application ID</span>
                        <span className="font-medium">{app.id}</span>
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">Visa Type</span>
                        <span className="font-medium">{app.type}</span>
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">Last Updated</span>
                        <span className="font-medium">{app.lastUpdated}</span>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            app.status === 'Approved'
                              ? 'bg-green-100 text-green-800'
                              : app.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {app.status === 'Approved' && <CheckCircle className="w-3.5 h-3.5 mr-1" />}
                          {app.status === 'In Progress' && <Clock className="w-3.5 h-3.5 mr-1" />}
                          {app.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-gray-500">{app.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            app.status === 'Approved'
                              ? 'bg-green-500'
                              : 'bg-teal-500'
                          }`}
                          style={{ width: `${app.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="text-sm flex items-center text-teal-600 hover:text-teal-700">
                        <FileText className="w-4 h-4 mr-1" />
                        View Details
                      </button>
                      
                      {app.status === 'In Progress' && (
                        <button className="text-sm flex items-center text-teal-600 hover:text-teal-700">
                          <Edit className="w-4 h-4 mr-1" />
                          Continue Application
                        </button>
                      )}
                      
                      {app.status === 'Approved' && (
                        <button className="text-sm flex items-center text-teal-600 hover:text-teal-700">
                          <Download className="w-4 h-4 mr-1" />
                          Download Approval
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 mb-4">
                <FileText className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-medium mb-2">Start a New Application</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ready to apply for a new UK visa? Start your application process here.
              </p>
              <Link to="/eligibility" className="button-primary inline-flex">
                Begin New Application
              </Link>
            </div>
          </div>
        );
        
      case 'documents':
        return (
          <div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-medium">Your Uploaded Documents</h3>
                <button 
                  className="text-sm flex items-center space-x-2 px-4 py-2 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition-colors"
                  onClick={handleUploadDocument}
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload New</span>
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                />
              </div>
              
              <ul className="divide-y divide-gray-100">
                {documents.map((doc) => (
                  <li key={doc.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-teal-50 rounded p-2 mr-4">
                          <FileText className="w-6 h-6 text-teal-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{doc.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500">{doc.type}</span>
                            <span className="text-xs text-gray-500">{doc.size}</span>
                            <span className="text-xs text-gray-500">Uploaded: {doc.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button 
                          className="p-1.5 text-gray-500 hover:text-teal-600 rounded-full hover:bg-gray-100"
                          onClick={() => handleDownloadDocument(doc.name)}
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-500 hover:text-teal-600 rounded-full hover:bg-gray-100">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-medium">Document Checklists</h3>
              </div>
              
              <div className="p-6">
                <Link
                  to="/documents"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors mb-4"
                >
                  <div className="mr-4">
                    <FileText className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Student Visa Checklist</h4>
                    <p className="text-sm text-gray-600">Complete list of documents required for Student Visa applications.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-teal-500 ml-auto" />
                </Link>
                
                <Link
                  to="/documents"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="mr-4">
                    <FileText className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Visitor Visa Checklist</h4>
                    <p className="text-sm text-gray-600">Complete list of documents required for Visitor Visa applications.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-teal-500 ml-auto" />
                </Link>
              </div>
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-medium mb-4">Account Security</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Current Password</label>
                    <input
                      type="password"
                      placeholder="Enter current password"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    />
                  </div>
                  
                  <button className="button-primary w-full">Update Password</button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-medium mb-3">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition-colors text-sm font-medium">
                    <Lock className="w-4 h-4" />
                    <span>Enable 2FA</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-medium mb-4">Notification Settings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-sm">Email Notifications</h4>
                      <p className="text-xs text-gray-500 mt-1">Receive updates about your applications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-sm">Application Updates</h4>
                      <p className="text-xs text-gray-500 mt-1">Receive status updates about your visa application</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-sm">Marketing Communications</h4>
                      <p className="text-xs text-gray-500 mt-1">Receive updates about new features and offers</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                    </label>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-medium mb-3">Data Privacy</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Manage how your data is stored and used on our platform.
                  </p>
                  
                  <div className="space-y-3">
                    <button className="text-sm flex items-center text-teal-600 hover:text-teal-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download My Data
                    </button>
                    
                    <button className="text-sm flex items-center text-red-600 hover:text-red-700">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-4">Your Profile</h1>
            <p className="text-gray-600">
              Manage your personal information, applications, and documents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <nav className="flex flex-col">
                  <button
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium ${
                      activeTab === 'profile'
                        ? 'bg-teal-50 text-teal-600 border-l-2 border-teal-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <User className="w-5 h-5" />
                    <span>Personal Info</span>
                  </button>
                  
                  <button
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium ${
                      activeTab === 'applications'
                        ? 'bg-teal-50 text-teal-600 border-l-2 border-teal-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab('applications')}
                  >
                    <FileText className="w-5 h-5" />
                    <span>Applications</span>
                  </button>
                  
                  <button
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium ${
                      activeTab === 'documents'
                        ? 'bg-teal-50 text-teal-600 border-l-2 border-teal-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab('documents')}
                  >
                    <FileText className="w-5 h-5" />
                    <span>Documents</span>
                  </button>
                  
                  <button
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium ${
                      activeTab === 'settings'
                        ? 'bg-teal-50 text-teal-600 border-l-2 border-teal-500'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </button>
                  
                  <div className="border-t border-gray-100 mt-auto">
                    <button
                      className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 w-full text-left"
                      onClick={() => alert('Logging out...')}
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
