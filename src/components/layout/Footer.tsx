export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-24 pb-8 px-8 md:px-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-sm rotate-45 flex items-center justify-center text-white font-bold text-xs">
                <div className="-rotate-45">K</div>
              </div>
              <span className="text-white text-xl font-medium tracking-tight">
                Kogniti
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-sm mb-8 text-balance">
              The next-generation marketing agency at the intersection of data, psychology, and innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white hover:text-secondary transition-colors">
                <span className="text-xs">In</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white hover:text-secondary transition-colors">
                <span className="text-xs">Tw</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white hover:text-secondary transition-colors">
                <span className="text-xs">Ig</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campaigns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Kogniti Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
