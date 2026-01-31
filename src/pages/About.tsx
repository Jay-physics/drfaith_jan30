import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Award, Heart, Brain, ExternalLink, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/10"></div>

        {/* Subtle decorative elements */}
        <div className="absolute top-8 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-8 right-1/3 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Refined heading */}
          <div className="mb-4 space-y-1">
            <h1 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight tracking-tight">
              EMPOWER YOUR LIFE
            </h1>
          </div>

          {/* Clean subtitle */}
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive mental health care with
            </p>
            <p className="text-xl font-medium text-primary">
              Dr. Faith Consiglio
            </p>

            {/* Simple decorative accent */}
            <div className="flex items-center justify-center py-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40"></div>
              <div className="w-1 h-1 bg-primary rounded-full mx-3"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40"></div>
            </div>

            {/* Concise tagline */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic max-w-2xl mx-auto">
              Discover your path to wellness and optimal mental health
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">

          {/* Left Column: Education & Certifications */}
          <div className="space-y-6">
            {/* Education & Training */}
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-muted-foreground" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-medium text-foreground mb-6">Education & Training</h3>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-foreground">MD Degree</div>
                      <div className="text-sm text-muted-foreground">Renaissance School of Medicine, Stony Brook University</div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-foreground">Residency</div>
                      <div className="text-sm text-muted-foreground">Psychiatry at Westchester Medical Center, NY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Certifications */}
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-medium text-foreground mb-6">Specialized Certifications</h3>

                  <div className="flex flex-col gap-3">
                    <div className="px-4 py-2 border border-primary/30 rounded-full text-sm font-medium text-foreground w-max">
                      Mindfulness-Based Stress Reduction
                    </div>
                    <div className="px-4 py-2 border border-primary/30 rounded-full text-sm font-medium text-foreground w-max">
                      International Society for Sports Psychiatry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Psychology Today Feature */}
          <div className="h-full">
            <a
              href="https://www.psychologytoday.com/us/psychiatrists/faith-consiglio-new-york-ny/998633"
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative bg-card rounded-xl shadow-sm border border-border overflow-hidden h-full transition-all duration-300 hover:shadow-md"
            >
              {/* Header inside the container */}
              <div className="absolute top-0 left-0 right-0 p-6 z-20 bg-gradient-to-b from-white via-white/80 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-[#1b5c92]/10 text-[#1b5c92]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">Psychology Today</h3>
                </div>
              </div>

              {/* Profile Preview Image */}
              <div className="absolute inset-0 top-20 pt-4 px-4 overflow-hidden bg-gray-50/50">
                <img
                  src="/images/pt-profile.png"
                  alt="Psychology Today Profile Preview"
                  className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105 rounded-t-lg shadow-inner border border-border/50"
                  style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
                />
              </div>

              {/* Slide-in Overlay (Right Side) */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-[#1b5c92] rounded-full flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500 delay-100">
                  <span className="text-xl font-serif font-bold text-white">PT</span>
                </div>
                <h4 className="text-2xl font-light text-foreground mb-2">View Full Profile</h4>
                <p className="text-muted-foreground mb-8 max-w-xs">
                  Click to visit Dr. Faith Consiglio's verified profile on Psychology Today.
                </p>
                <div className="flex items-center text-[#1b5c92] font-medium group/btn">
                  <span>Open Profile</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <Separator className="my-12 bg-primary/20" />

        {/* My Approach */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">
            My Approach
          </h2>

          <Card className="border-primary/20 shadow-sm bg-gradient-to-br from-primary/5 to-secondary/10">
            <CardContent className="p-8">
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground italic">
                "I believe in treating the whole person, not just symptoms. My integrated approach
                combines medication management, psychotherapy, and mindfulness practices to support
                your journey toward optimal mental wellness."
              </blockquote>
              <div className="mt-6 text-base text-primary font-medium">
                — Dr. Faith Consiglio
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;