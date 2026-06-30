import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";

const SUB_SERVICES: Record<string, string[]> = {
  "Data-Driven Strategy": ["Market Analysis", "Consumer Profiling", "Trend Forecasting", "Performance Tracking"],
  "Consumer Psychology": ["Behavioral Research", "Neuromarketing", "Brand Positioning", "User Testing"],
  "Creative Innovation": ["Visual Identity", "UI/UX Design", "Content Creation", "Immersive Experiences"],
  "Digital Ecosystems": ["Omnichannel Campaigns", "SEO & Content", "Social Media", "Paid Advertising"]
};

export default function StartProject() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [selectedSubService, setSelectedSubService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-primary pt-32 pb-24 px-6 md:px-12 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-accent1 rounded-sm" />
            <span className="uppercase tracking-widest text-[11px] font-semibold text-secondary/50">
              Start A Project
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.05] mb-8 text-secondary">
            Let's build <br/>something <br/>extraordinary<span className="text-accent1">.</span>
          </h1>
          
          <p className="text-lg text-secondary/70 max-w-md mb-12">
            Tell us about your goals, timeline, and budget. Our strategy team will review your requirements and get back to you within 24 hours.
          </p>

          <div className="mt-auto pt-12 border-t border-secondary/10">
            <p className="text-sm font-semibold mb-6 text-secondary/50 uppercase tracking-widest">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold tracking-tighter">spotify</span>
              <span className="text-xl font-bold tracking-tighter">NETFLIX</span>
              <span className="text-xl font-bold tracking-tighter">airbnb</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-8 md:p-12 text-primary shadow-2xl relative overflow-hidden">
          {isSubmitted ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-secondary">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-medium mb-4">Request Received</h3>
              <p className="text-primary/70">
                Thank you for reaching out. A strategy consultant will contact you shortly to schedule your initial discovery call.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 px-6 py-3 bg-primary text-secondary rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary/70">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-primary/5 border border-primary/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent1 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary/70">Work Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-primary/5 border border-primary/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent1 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-medium text-primary/70">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  required
                  className="w-full bg-primary/5 border border-primary/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent1 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <span className="text-sm font-medium text-primary/70">Primary Service Needed</span>
                <input type="hidden" name="service" value={selectedService} required />
                <div 
                  className="w-full bg-primary/5 border border-primary/10 rounded-lg px-4 py-3 text-primary flex items-center justify-between cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className={selectedService ? "text-primary" : "text-primary/50"}>
                    {selectedService || "Select a service"}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {isDropdownOpen && (
                  <div className="absolute top-[100%] left-0 w-full mt-2 bg-secondary border border-primary/10 rounded-lg shadow-2xl overflow-hidden z-10">
                    {["Data-Driven Strategy", "Consumer Psychology", "Creative Innovation", "Digital Ecosystems"].map((service) => (
                      <div 
                        key={service} 
                        onClick={() => {
                          setSelectedService(service);
                          setSelectedSubService("");
                          setIsDropdownOpen(false);
                        }}
                        className="px-4 py-3 hover:bg-primary/5 cursor-pointer text-sm transition-colors text-primary"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {selectedService && (
                <div className="flex flex-col gap-2 relative mt-1">
                  <span className="text-sm font-medium text-primary/70">Specific Focus</span>
                  <input type="hidden" name="subService" value={selectedSubService} required />
                  <div 
                    className="w-full bg-primary/5 border border-primary/10 rounded-lg px-4 py-3 text-primary flex items-center justify-between cursor-pointer hover:bg-primary/10 transition-colors"
                    onClick={() => setIsSubDropdownOpen(!isSubDropdownOpen)}
                  >
                    <span className={selectedSubService ? "text-primary" : "text-primary/50"}>
                      {selectedSubService || "Select specific focus"}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isSubDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isSubDropdownOpen && (
                    <div className="absolute top-[100%] left-0 w-full mt-2 bg-secondary border border-primary/10 rounded-lg shadow-2xl overflow-hidden z-20">
                      {SUB_SERVICES[selectedService]?.map((sub) => (
                        <div 
                          key={sub} 
                          onClick={() => {
                            setSelectedSubService(sub);
                            setIsSubDropdownOpen(false);
                          }}
                          className="px-4 py-3 hover:bg-primary/5 cursor-pointer text-sm transition-colors text-primary"
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium text-primary/70">Estimated Budget (USD)</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {["$10k - $50k", "$50k - $100k", "$100k+"].map((budget) => (
                    <label key={budget} className="relative cursor-pointer">
                      <input type="radio" name="budget" value={budget} className="peer sr-only" required />
                      <div className="w-full bg-primary/5 border border-primary/10 rounded-lg px-4 py-3 text-primary text-center text-sm transition-colors peer-checked:bg-accent1/10 peer-checked:border-accent1 peer-checked:text-accent1 hover:bg-primary/10">
                        {budget}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="details" className="text-sm font-medium text-primary/70">Project Details</label>
                <textarea 
                  id="details"
                  required
                  rows={4}
                  className="w-full bg-primary/5 border border-primary/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent1 transition-colors resize-none"
                  placeholder="Briefly describe your goals and timeline..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-accent1 text-primary rounded-lg py-4 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-accent1/90 transition-colors group"
              >
                Submit Request
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </form>
          )}
        </div>
        
      </div>
    </div>
  );
}
