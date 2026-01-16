import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PotentillaIcon } from "@/components/Header";

const AppointmentRequest = () => {
    useEffect(() => {
        // Only append script if it doesn't already exist to prevent duplicates on re-renders
        if (!document.querySelector('script[src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"]')) {
            const script = document.createElement("script");
            script.src = "https://widget-cdn.simplepractice.com/assets/integration-1.0.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center p-4 overflow-hidden bg-stone-50/50">
            {/* Therapeutic Background Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-100/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-100/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-100/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

            {/* Decorative Warm Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            <Card className="relative z-10 max-w-lg w-full border-white/20 shadow-xl bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-2xl">
                <CardHeader className="text-center pb-2 pt-8">
                    <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/5">
                        <PotentillaIcon />
                    </div>
                    <CardTitle className="text-3xl font-light tracking-tight text-slate-800">
                        Request an Appointment
                    </CardTitle>
                    <p className="text-slate-500 mt-3 max-w-sm mx-auto leading-relaxed">
                        Begin your journey to wellness. Click below to schedule a time that works for you.
                    </p>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-8 pb-10 space-y-6">
                    {/* SimplePractice Widget */}
                    <style>{`
            .spwidget-button-wrapper { text-align: center; }
            .spwidget-button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 16px 32px;
              color: white !important;
              background: #0ea5e9; /* Sky 500 equivalent */
              background: linear-gradient(135deg, hsl(215 88% 52%), hsl(215 80% 45%));
              border-radius: 9999px; /* Pill shape */
              font-size: 16px;
              font-weight: 500;
              letter-spacing: 0.025em;
              text-decoration: none;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .spwidget-button:hover {
              transform: translateY(-2px);
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
              filter: brightness(1.05);
            }
            .spwidget-button:active {
              transform: translateY(0);
              filter: brightness(0.95);
            }
          `}</style>
                    <div className="spwidget-button-wrapper w-full">
                        <a
                            href="https://drfaithconsiglio.clientsecure.me"
                            className="spwidget-button w-full sm:w-auto min-w-[200px]"
                            data-spwidget-scope-id="b666064b-8636-49d4-ba79-31559cbe60d4"
                            data-spwidget-scope-uri="drfaithconsiglio"
                            data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                            data-spwidget-type="OAR"
                            data-spwidget-scope-global
                            data-spwidget-autobind
                        >
                            Request Appointment
                        </a>
                    </div>

                    <p className="text-xs text-muted-foreground/80 text-center max-w-xs">
                        Powered by SimplePractice. Secure & HIPAA Compliant.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default AppointmentRequest;
