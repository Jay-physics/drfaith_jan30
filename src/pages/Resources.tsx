import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Phone, HeartPulse, BookOpen } from "lucide-react";

const books = [
    {
        month: "MARCH 2026",
        title: "Attached",
        author: "Amir Levine & Rachel Heller",
        image: "/images/march.png",
        alt: "Attached by Amir Levine and Rachel Heller",
        url: "https://www.goodreads.com/book/show/9547888-attached",
        quote: "This book offers a helpful guide to understanding attachment styles in adult romantic relationships, including how they are formed in childhood, and how addressing these patterns can help build healthier, more fulfilling connections.",
    },
    {
        month: "FEBRUARY 2026",
        title: "The Confident Mind",
        author: "Dr. Nate Zinsser",
        image: "/images/confident-mind.jpg",
        alt: "The Confident Mind by Dr. Nate Zinsser",
        url: "https://www.goodreads.com/book/show/57863475-the-confident-mind",
        quote: "A great read for anyone looking to build the skill of confident thinking. Written by a leading sports psychologist, this book offers techniques broadly applicable for improving performance and fostering positive self-belief.",
    },
];

const Resources = () => {
    return (
        <div className="min-h-screen">
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
                <Tabs defaultValue="resources" className="w-full">
                    <TabsList className="mb-8">
                        <TabsTrigger value="resources">Resources</TabsTrigger>
                        <TabsTrigger value="bookclub">Book Club</TabsTrigger>
                    </TabsList>

                    <TabsContent value="resources">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Crisis Support */}
                            <Card className="border-destructive/20 shadow-md bg-destructive/5">
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

                            {/* Mental Health Info */}
                            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
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
                                    {[
                                        { href: "https://www.nami.org", name: "NAMI", desc: "National Alliance on Mental Illness" },
                                        { href: "https://www.nimh.nih.gov", name: "NIMH", desc: "National Institute of Mental Health" },
                                        { href: "https://sportspsychiatry.org/", name: "ISSP", desc: "The International Society for Sports Psychiatry" },
                                        { href: "https://howtoadhd.com/", name: "Neurodiversity University", desc: "How to ADHD" },
                                        { href: "https://www.natezinsser.com/", name: "Dr. Nathaniel Zinsser", desc: "Certified Mental Performance Coach" },
                                    ].map((link) => (
                                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-foreground">{link.name}</span>
                                                <span className="text-xs text-muted-foreground">{link.desc}</span>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </a>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="bookclub">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {books.map((book) => (
                                <Card key={book.month} className="border-border shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="pt-6">
                                        <a href={book.url} target="_blank" rel="noopener noreferrer" className="block group">
                                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                                                {book.month}
                                            </div>

                                            <div className="flex gap-4 mb-4">
                                                <div className="relative aspect-[2/3] w-24 flex-shrink-0 overflow-hidden rounded-lg shadow-lg border border-border/50 bg-secondary/20">
                                                    <img
                                                        src={book.image}
                                                        alt={book.alt}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>

                                                <div className="flex-1 space-y-2">
                                                    <div className="flex items-start justify-between gap-2">
                                                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                                            {book.title}
                                                        </h4>
                                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                                                    </div>
                                                    <p className="text-sm text-muted-foreground italic">
                                                        by {book.author}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="border-l-4 border-primary/30 pl-4 py-2 bg-primary/5 rounded-r">
                                                <p className="text-sm text-muted-foreground leading-relaxed italic">
                                                    "{book.quote}"
                                                </p>
                                                <p className="text-xs text-primary font-medium mt-2">
                                                    — Dr. Faith Consiglio
                                                </p>
                                            </div>
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Resources;
