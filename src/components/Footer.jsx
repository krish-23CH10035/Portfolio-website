import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ isAdmin, adminInput, setAdminInput, adminError, handleAdminLogin, handleAdminLogout }) => {
  return (
    <footer className="py-8 border-t border-border" style={{ background: 'linear-gradient(90deg, #232526 0%, #1c1c1c 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2025 Krish Sahu. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/krish-23CH10035" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/krish-sahu-iitkgp" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:krish79093573@gmail.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        {/* Admin login/logout UI */}
        <div className="mt-6 flex justify-center">
          {!isAdmin && handleAdminLogin && (
            <form onSubmit={handleAdminLogin} className="bg-gradient-to-r from-black via-gray-900 to-black p-4 rounded-xl shadow-lg flex gap-2 items-center w-full max-w-md border border-green-400" style={{ boxShadow: '0 0 16px 2px #000, 0 0 32px 4px #000a' }}>
              <input
                type="password"
                value={adminInput}
                onChange={e => setAdminInput(e.target.value)}
                placeholder="Admin password"
                className="border border-green-400 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400 bg-black text-green-400 placeholder-green-600 shadow-[0_0_8px_#000]"
                style={{ boxShadow: '0 0 8px 1px #000' }}
              />
              <Button type="submit" className="bg-black text-green-400 font-bold px-4 py-2 rounded-lg shadow border border-green-400 hover:bg-green-400 hover:text-black transition-all" style={{ boxShadow: '0 0 8px 1px #000' }}>
                Admin Login
              </Button>
              {adminError && <span className="text-red-500 ml-2">{adminError}</span>}
            </form>
          )}
          {isAdmin && handleAdminLogout && (
            <Button onClick={handleAdminLogout} className="bg-gradient-to-r from-black via-gray-900 to-black text-green-400 font-bold px-6 py-2 rounded-lg shadow border border-green-400 hover:bg-green-400 hover:text-black transition-all ml-2" style={{ boxShadow: '0 0 8px 1px #000' }}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
