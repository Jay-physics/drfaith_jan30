import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const books = [
    {
        month: "APRIL 2026",
        title: "How to ADHD",
        author: "Jessica McCabe",
        image: "/images/april.png",
        alt: "How to ADHD by Jessica McCabe",
        url: "https://www.goodreads.com/book/show/125227576-how-to-adhd",
        quote: "This book offers practical strategies for managing ADHD, and provides a helpful guide for understanding and validating its symptoms.",
    },
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

const BookClub = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/10"></div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="mb-4 space-y-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight tracking-tight">
                            BOOK CLUB
                        </h1>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-3">
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            Monthly readings for growth
                        </p>

                        <div className="flex items-center justify-center py-3">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40"></div>
                            <div className="w-1 h-1 bg-primary rounded-full mx-3"></div>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
            </div>
        </div>
    );
};

export default BookClub;
