import { useState } from "react";
import { cn } from "@/lib/utils";

interface ObfuscatedEmailProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    email: string;
}

export const ObfuscatedEmail = ({ email, className, ...props }: ObfuscatedEmailProps) => {
    const [interacted, setInteracted] = useState(false);

    const parts = email.split("@");
    if (parts.length !== 2) return <span>{email}</span>;

    const [user, domain] = parts;

    const handleInteraction = () => {
        if (!interacted) setInteracted(true);
    };

    return (
        <a
            href={interacted ? `mailto:${email}` : undefined}
            onFocus={handleInteraction}
            onMouseEnter={handleInteraction}
            onClick={handleInteraction}
            className={cn("cursor-pointer hover:underline transition-colors", className)}
            {...props}
        >
            <span>{user}</span>
            {/* Zero-width space and hidden text to confuse scrapers */}
            <span className="hidden">nospam</span>
            <span>&#64;</span>
            <span>{domain}</span>
        </a>
    );
};
