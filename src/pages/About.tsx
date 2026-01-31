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
          <div className="sticky top-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-1 bg-[#1b5c92] rounded-full"></div>
              <h3 className="text-xl font-medium text-foreground">Psychology Today</h3>
            </div>

            <a
              href="https://www.psychologytoday.com/us/psychiatrists/faith-consiglio-new-york-ny/998633"
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              {/* Header / Badge */}
              <div className="absolute top-4 right-4 z-20 flex flex-col items-end">
                <div className="bg-[#1b5c92] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 mb-2 group-hover:scale-105 transition-transform">
                  <span>Verified Psychiatrist</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white/90 backdrop-blur-sm text-xs text-foreground px-3 py-1.5 rounded-full shadow-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                  Click to view full profile <ExternalLink className="w-3 h-3 inline ml-1" />
                </div>
              </div>

              {/* Profile Preview Image Container */}
              <div className="relative w-full transition-all duration-700 ease-in-out h-64 group-hover:h-[600px] overflow-hidden bg-gray-50">
                <img
                  src="/images/pt-profile.png"
                  alt="Psychology Today Profile Preview"
                  className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Gradient Overlay (The "Halfway" effect) */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10"></div>

                {/* Hover Reveal Text (Optional) */}
                <div className="absolute bottom-4 left-0 right-0 text-center z-20 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-[#1b5c92] font-semibold text-sm bg-white/80 px-4 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    Hover to view profile
                  </span>
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