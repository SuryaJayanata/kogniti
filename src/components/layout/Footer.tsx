export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] px-6 md:px-12 pb-6 md:pb-12 font-sans pt-12 md:pt-24">
      <div className="w-full bg-[#111111] rounded-lg pt-16 md:pt-24 px-8 md:px-16 pb-0 overflow-hidden flex flex-col relative text-white shadow-2xl">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 lg:mb-24">
          
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-10">
            <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed">
              We offer a wide range of data-driven marketing services to meet all your needs, from minor fixes to major brand overhauls.
            </p>
            
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                   <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                 </svg>
               </a>
               <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                 </svg>
               </a>
               <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                   <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                 </svg>
               </a>
               <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02V8.48l6.5 3.27-6.5 3.27z"/>
                 </svg>
               </a>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-3 lg:col-start-7 flex flex-col gap-5">
            <h4 className="text-white font-medium mb-3">Extra links</h4>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors w-fit">Home</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors w-fit">Services</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors w-fit">Case Studies</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors w-fit">Our team</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors w-fit">About Us</a>
          </div>
          
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-white font-medium mb-3">Contact</h4>
            <div className="text-gray-400 text-sm leading-relaxed">
              123 Marketing Road<br/>
              Jakarta, ID 12345
            </div>
            <a href="mailto:hello@kogniti.agency" className="text-gray-400 hover:text-white text-sm transition-colors w-fit mt-1">
              hello@kogniti.agency
            </a>
            <a href="tel:+628111234567" className="text-gray-400 hover:text-white text-sm transition-colors w-fit">
              (+62) 811-123-4567
            </a>
          </div>

        </div>

        <div className="w-full flex justify-center items-end mt-auto translate-y-[3%] md:translate-y-[5%] lg:translate-y-[8%]">
          <h1 className="text-[20vw] lg:text-[23vw] font-bold text-white leading-[0.85] tracking-tighter text-center whitespace-nowrap">
            Kogniti™
          </h1>
        </div>
      </div>
    </footer>
  );
}
