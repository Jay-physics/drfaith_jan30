// Using uploaded photo of Dr. Faith Consiglio

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 tracking-tight">
                <span className="text-foreground">Compassionate</span>
                <br />
                <span className="text-orange-600">Mental Health Care</span>
              </h1>
              <p className="text-lg text-slate-900 font-medium leading-relaxed max-w-lg">
                Integrating medication management and psychotherapy to support your physical, mental, and social well-being. General Adult Psychiatry, emphasis on depression, anxiety, ADHD, OCD, women's health, sports/performance psychiatry.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                📅 Schedule Consultation
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Learn More
              </button>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Board Certified Psychiatrist</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Mindfulness-Based Approaches</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Sports Psychiatry Focused</span>
              </div>
            </div>
          </div>

          {/* Right Content - Photo Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative">
                <img
                  src="/images/dr-faith-consiglio.png"
                  alt="Dr. Faith Consiglio - Board Certified Psychiatrist"
                  className="w-80 h-96 object-contain rounded-2xl shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    backdropFilter: 'blur(10px)'
                  }}
                />
              </div>

              {/* Doctor Info Card */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-bold">FC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Dr. Faith Consiglio</p>
                      <p className="text-xs text-muted-foreground">MD, Psychiatrist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
