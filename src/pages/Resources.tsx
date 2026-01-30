import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, FileText, Phone, HeartPulse, BookOpen } from "lucide-react";

const Resources = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/10"></div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="mb-4 space-y-1">
                        <h1 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight tracking-tight">
                            PATIENT RESOURCES
                        </h1>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-3">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Helpful tools and information for your mental health journey
                        </p>

                        <div className="flex items-center justify-center py-3">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40"></div>
                            <div className="w-1 h-1 bg-primary rounded-full mx-3"></div>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Crisis Support - Priority Display */}
                    <Card className="border-destructive/20 shadow-md bg-destructive/5 col-span-full lg:col-span-1">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-full bg-destructive/10 text-destructive">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <CardTitle className="text-xl text-destructive">Crisis Support</CardTitle>
                            </div>
                            <CardDescription className="text-destructive/80">
                                Immediate help available 24/7
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-background/50 p-3 rounded-lg border border-destructive/10">
                                <div className="font-semibold text-foreground">988 Suicide & Crisis Lifeline</div>
                                <div className="text-sm text-muted-foreground">Call or text <span className="font-bold text-destructive">988</span></div>
                            </div>
                            <div className="bg-background/50 p-3 rounded-lg border border-destructive/10">
                                <div className="font-semibold text-foreground">Crisis Text Line</div>
                                <div className="text-sm text-muted-foreground">Text <span className="font-bold text-destructive">HOME</span> to 741741</div>
                            </div>
                            <div className="bg-background/50 p-3 rounded-lg border border-destructive/10">
                                <div className="font-semibold text-foreground">NYC Well</div>
                                <div className="text-sm text-muted-foreground">1-888-NYC-WELL (1-888-692-9355)</div>
                            </div>
                        </CardContent>
                    </Card>



                    {/* Useful Links */}
                    <Card className="border-border shadow-sm hover:shadow-md transition-shadow lg:col-span-1">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <HeartPulse className="w-5 h-5" />
                                </div>
                                <CardTitle className="text-xl">Mental Health Info</CardTitle>
                            </div>
                            <CardDescription>
                                Trusted organizations & education
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground">NAMI</span>
                                    <span className="text-xs text-muted-foreground">National Alliance on Mental Illness</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a href="https://www.nimh.nih.gov" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground">NIMH</span>
                                    <span className="text-xs text-muted-foreground">National Institute of Mental Health</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a href="https://sportspsychiatry.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground">ISSP</span>
                                    <span className="text-xs text-muted-foreground">The International Society for Sports Psychiatry</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a href="https://howtoadhd.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground">Neurodiversity University</span>
                                    <span className="text-xs text-muted-foreground">How to ADHD</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a href="https://www.natezinsser.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground">Dr. Nathaniel Zinsser</span>
                                    <span className="text-xs text-muted-foreground">Certified Mental Performance Coach</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>

                        </CardContent>
                    </Card>

                    {/* Book Club */}
                    <Card className="border-border shadow-sm hover:shadow-md transition-shadow lg:col-span-1">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <CardTitle className="text-xl">Book Club</CardTitle>
                            </div>
                            <CardDescription>
                                Monthly readings for growth
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">January 2026</span>
                                <a href="https://www.goodreads.com/book/show/57863475-the-confident-mind" target="_blank" rel="noopener noreferrer" className="block group">
                                    <div className="aspect-[2/3] w-full overflow-hidden rounded-md mb-2 bg-secondary/20 h-64">
                                        <img
                                            src="/images/confident-mind.jpg"
                                            alt="The Confident Mind"
                                            className="w-full h-full object-contain transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">The Confident Mind</h4>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Resources;
