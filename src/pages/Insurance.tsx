const Insurance = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4 tracking-tight">Insurance & Fees</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transparent pricing and payment information for your mental health care
            </p>
          </div>

          <div className="grid gap-8">
            {/* Insurance Information */}
            <div className="relative overflow-hidden bg-gradient-to-br from-card via-card to-accent/5 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-accent/3"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-6 bg-gradient-to-r from-primary to-pink-400 rounded-full"></div>
                  <h2 className="text-xl font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Insurance Coverage
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Consiglio does not currently accept insurance, and understands this is a practical consideration.
                    You may check if your insurance carrier offers out-of-network benefits, as they may reimburse for visits.
                  </p>
                  <div className="relative bg-gradient-to-r from-pink-50/50 via-primary/5 to-accent/10 dark:from-pink-900/20 dark:via-primary/10 dark:to-accent/20 border border-pink-200/30 dark:border-pink-800/30 rounded-xl p-4 backdrop-blur-sm">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-pink-400 to-primary rounded-full"></div>
                    <div className="ml-4">
                      <p className="text-foreground font-medium mb-2">
                        Previous Practice Patients
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        If you are from a previous practice of Dr. Consiglio's, please feel free to reach out to discuss options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Structure */}
            <div className="relative overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/2 via-transparent to-primary/3"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-6 bg-gradient-to-r from-primary to-pink-400 rounded-full"></div>
                  <h2 className="text-xl font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Fee Structure
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-3">
                    <div className="group relative bg-gradient-to-r from-card via-card/95 to-primary/5 border border-border/40 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/2 to-pink-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex justify-between items-center">
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium text-foreground">Initial Evaluation</h3>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                            <p className="text-muted-foreground text-sm font-medium">60 minutes</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-semibold text-black">$500</div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative bg-gradient-to-r from-card via-card/95 to-primary/5 border border-border/40 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/2 to-pink-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex justify-between items-center">
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium text-foreground">Psychotherapy Session</h3>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                            <p className="text-muted-foreground text-sm font-medium">45 minutes</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-semibold text-black">$400</div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative bg-gradient-to-r from-card via-card/95 to-primary/5 border border-border/40 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/2 to-pink-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex justify-between items-center">
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium text-foreground">Follow-up Visit</h3>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                            <p className="text-muted-foreground text-sm font-medium">30 minutes</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-semibold text-black">$300</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-gradient-to-r from-muted/30 via-muted/20 to-accent/10 border border-muted/30 rounded-xl p-4 backdrop-blur-sm">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary/50 to-pink-400/50 rounded-full"></div>
                    <div className="ml-4">
                      <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                        Payment is due at the time of service. We accept cash, check, and major credit cards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="relative bg-gradient-to-r from-primary/5 via-primary/8 to-pink-50/50 dark:to-pink-900/20 border border-primary/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-pink-100/30 dark:to-pink-800/10 rounded-lg"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-medium text-foreground mb-3">Questions About Fees or Insurance?</h2>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  We're here to help you understand your options and make mental health care accessible.
                  Please don't hesitate to reach out with any questions about fees, payment plans, or insurance reimbursement.
                </p>
                <button className="bg-gradient-to-r from-primary to-pink-500 text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:from-primary/90 hover:to-pink-500/90 transition-all text-sm shadow-md">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Insurance;