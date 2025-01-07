import React, { useState } from 'react';
import { Shield, AlertTriangle, PhoneOff, Info, Bell, ThumbsUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const ScamPreventionApp = () => {
  const [activePage, setActivePage] = useState('home');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reportDetails, setReportDetails] = useState('');
  
  const commonScamTactics = [
    {
      title: "Tech Support Scam",
      description: "Caller claims to be from Microsoft/Windows support and says your computer has a virus",
      warning: "Microsoft will never proactively contact you about computer issues"
    },
    {
      title: "Government Impersonation",
      description: "Caller claims to be from IRS, Social Security, or other agencies demanding immediate payment",
      warning: "Government agencies will never call demanding immediate payment via gift cards or wire transfer"
    },
    {
      title: "Bank Security Alert",
      description: "Caller claims to be from your bank reporting suspicious activity",
      warning: "Banks will never ask for your full PIN or password over the phone"
    },
    {
      title: "Refund Scam",
      description: "Caller offers refund from tech service but needs remote access to your computer",
      warning: "Never give remote access to unsolicited callers"
    }
  ];

  const preventionTips = [
    "Never share passwords, PINs or verification codes",
    "Don't trust caller ID - it can be spoofed",
    "Never give remote access to your computer",
    "Government agencies won't demand gift cards as payment",
    "Take time to verify - legitimate companies won't rush you",
    "If unsure, hang up and call the company directly using their official number"
  ];

  const handleReport = (e) => {
    e.preventDefault();
    alert('Thank you for your report. This information will help protect others.');
    setPhoneNumber('');
    setReportDetails('');
  };

  const renderHome = () => (
    <div className="space-y-6">
      <Alert className="bg-yellow-50">
        <AlertTriangle className="h-5 w-5 text-yellow-600"/>
        <AlertTitle className="text-yellow-800">Active Scam Alert</AlertTitle>
        <AlertDescription className="text-yellow-700">
          Currently seeing increased activity from scammers claiming to be IRS agents. Stay vigilant!
        </AlertDescription>
      </Alert>
      
      <div className="grid md:grid-cols-2 gap-6">
        <button
          onClick={() => setActivePage('report')}
          className="p-6 border rounded-lg hover:bg-gray-50 text-left space-y-3"
        >
          <PhoneOff className="h-6 w-6 text-red-500"/>
          <h3 className="font-semibold">Report a Scam Call</h3>
          <p className="text-sm text-gray-600">Help protect others by reporting suspicious calls</p>
        </button>
        
        <button
          onClick={() => setActivePage('learn')}
          className="p-6 border rounded-lg hover:bg-gray-50 text-left space-y-3"
        >
          <Info className="h-6 w-6 text-blue-500"/>
          <h3 className="font-semibold">Learn About Scams</h3>
          <p className="text-sm text-gray-600">Know common tactics and how to stay safe</p>
        </button>
      </div>
    </div>
  );

  const renderReport = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Report a Suspicious Call</h2>
      
      <form onSubmit={handleReport} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter caller's phone number"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Details</label>
          <textarea
            value={reportDetails}
            onChange={(e) => setReportDetails(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows={4}
            placeholder="Describe the call (claimed company, what they wanted, etc.)"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );

  const renderLearn = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Common Scam Tactics</h2>
      
      <div className="grid gap-4">
        {commonScamTactics.map((tactic, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="font-semibold text-red-600">{tactic.title}</h3>
            <p className="mt-1 text-gray-600">{tactic.description}</p>
            <div className="mt-2 flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5"/>
              <p className="text-sm text-yellow-800">{tactic.warning}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Prevention Tips</h2>
        <ul className="space-y-3">
          {preventionTips.map((tip, index) => (
            <li key={index} className="flex items-start space-x-2">
              <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"/>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center space-x-2 mb-8">
        <Shield className="h-8 w-8 text-blue-600"/>
        <h1 className="text-2xl font-bold">Scam Call Prevention</h1>
      </div>
      
      <nav className="flex space-x-4 mb-6">
        <button
          onClick={() => setActivePage('home')}
          className={`px-4 py-2 rounded-md ${
            activePage === 'home' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActivePage('report')}
          className={`px-4 py-2 rounded-md ${
            activePage === 'report' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Report
        </button>
        <button
          onClick={() => setActivePage('learn')}
          className={`px-4 py-2 rounded-md ${
            activePage === 'learn' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Learn
        </button>
      </nav>
      
      {activePage === 'home' && renderHome()}
      {activePage === 'report' && renderReport()}
      {activePage === 'learn' && renderLearn()}
    </div>
  );
};

export default ScamPreventionApp;
