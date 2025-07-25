import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
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
      </div>
    </footer>
  );
};

export default Footer;
