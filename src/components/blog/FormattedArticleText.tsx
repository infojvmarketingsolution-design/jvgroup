import React from "react";
import Link from "next/link";
import { Phone, ExternalLink } from "lucide-react";

interface Props {
  text: string;
  className?: string;
}

// Known entity mappings for automatic high-value internal hypertext links
const KNOWN_ENTITIES: { name: string; url: string }[] = [
  { name: "Ahmedabad Marketing Solution", url: "/companies/ahmedabad-marketing-solution" },
  { name: "Ekato Tech", url: "/companies/ekato-tech" },
  { name: "Wapipulse", url: "/companies/wapipulse" },
  { name: "J.V Real Estate", url: "/companies/jv-real-estate" },
  { name: "J.V Overseas", url: "/companies/jv-overseas" },
  { name: "J.V Digital Marketing Solution", url: "/companies/jv-digital-marketing" },
  { name: "J.V Infinity", url: "/companies/jv-infinity" },
  { name: "Ticket 4 Service", url: "/companies/ticket4service" },
  { name: "Dev Art", url: "/companies/dev-art" },
  { name: "JV Engineering", url: "/companies/jv-engineering" }
];

export default function FormattedArticleText({ text, className = "" }: Props) {
  // 1. First, check if text has markdown links [text](url)
  // 2. Also check for **bold** text
  // 3. Highlight phone numbers
  // 4. Highlight known entities if not already in a link

  const parseFormattedSegments = (rawText: string): React.ReactNode[] => {
    // Regex for markdown links: [label](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(rawText)) !== null) {
      const matchIndex = match.index;
      // Push text before link
      if (matchIndex > lastIndex) {
        const textBefore = rawText.slice(lastIndex, matchIndex);
        parts.push(...parseBoldAndEntities(textBefore));
      }

      const label = match[1];
      const url = match[2];
      const isExternal = url.startsWith("http://") || url.startsWith("https://");

      if (isExternal) {
        parts.push(
          <a
            key={`link-${matchIndex}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-jv-orange)] font-bold underline underline-offset-4 decoration-orange-300 hover:decoration-[var(--color-jv-orange)] hover:text-orange-700 transition-colors inline-flex items-center gap-0.5"
          >
            <span>{label}</span>
            <ExternalLink size={12} className="inline opacity-70 ml-0.5 shrink-0" />
          </a>
        );
      } else {
        parts.push(
          <Link
            key={`link-${matchIndex}`}
            href={url}
            className="text-[var(--color-jv-orange)] font-bold underline underline-offset-4 decoration-orange-300 hover:decoration-[var(--color-jv-orange)] hover:text-orange-700 transition-colors"
          >
            {label}
          </Link>
        );
      }

      lastIndex = matchIndex + match[0].length;
    }

    if (lastIndex < rawText.length) {
      const remainingText = rawText.slice(lastIndex);
      parts.push(...parseBoldAndEntities(remainingText));
    }

    return parts;
  };

  const parseBoldAndEntities = (rawText: string): React.ReactNode[] => {
    // Regex for bold text: **text**
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = boldRegex.exec(rawText)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        const textBefore = rawText.slice(lastIndex, matchIndex);
        parts.push(...parsePhonesAndEntities(textBefore));
      }

      const boldContent = match[1];
      parts.push(
        <strong key={`bold-${matchIndex}`} className="font-extrabold text-slate-950">
          {boldContent}
        </strong>
      );

      lastIndex = matchIndex + match[0].length;
    }

    if (lastIndex < rawText.length) {
      parts.push(...parsePhonesAndEntities(rawText.slice(lastIndex)));
    }

    return parts;
  };

  const parsePhonesAndEntities = (rawText: string): React.ReactNode[] => {
    // Match phone numbers like +91 99097 00606, +91 63540 70709, +44 7344556070
    const phoneRegex = /(\+91[\s\d]{10,12}|\+44[\s\d]{10,12})/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = phoneRegex.exec(rawText)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        const textBefore = rawText.slice(lastIndex, matchIndex);
        parts.push(...parseEntitiesOnly(textBefore));
      }

      const phoneStr = match[1].trim();
      const sanitizedPhone = phoneStr.replace(/\s+/g, "");

      parts.push(
        <a
          key={`phone-${matchIndex}`}
          href={`tel:${sanitizedPhone}`}
          className="inline-flex items-center gap-1 font-bold text-slate-900 bg-orange-50 hover:bg-orange-100 text-slate-900 border border-orange-200/80 px-2 py-0.5 rounded-md text-xs sm:text-sm transition-colors no-underline"
          title={`Call Official Desk: ${phoneStr}`}
        >
          <Phone size={12} className="text-[var(--color-jv-orange)] shrink-0" />
          <span>{phoneStr}</span>
        </a>
      );

      lastIndex = matchIndex + match[0].length;
    }

    if (lastIndex < rawText.length) {
      parts.push(...parseEntitiesOnly(rawText.slice(lastIndex)));
    }

    return parts;
  };

  const parseEntitiesOnly = (rawText: string): React.ReactNode[] => {
    // Check for known entities and auto-link them for SEO equity
    let currentParts: (string | React.ReactNode)[] = [rawText];

    for (const entity of KNOWN_ENTITIES) {
      const newParts: (string | React.ReactNode)[] = [];

      for (const part of currentParts) {
        if (typeof part !== "string") {
          newParts.push(part);
          continue;
        }

        const entityIdx = part.indexOf(entity.name);
        if (entityIdx === -1) {
          newParts.push(part);
          continue;
        }

        // Split around entity
        const before = part.slice(0, entityIdx);
        const after = part.slice(entityIdx + entity.name.length);

        if (before) newParts.push(before);
        newParts.push(
          <Link
            key={`entity-${entity.url}-${entityIdx}`}
            href={entity.url}
            className="text-slate-950 font-bold hover:text-[var(--color-jv-orange)] underline decoration-slate-300 hover:decoration-[var(--color-jv-orange)] underline-offset-2 transition-colors"
          >
            {entity.name}
          </Link>
        );
        if (after) newParts.push(after);
      }

      currentParts = newParts;
    }

    return currentParts.map((item, idx) => (
      <React.Fragment key={idx}>{item}</React.Fragment>
    ));
  };

  return (
    <p
      className={`text-base sm:text-[18px] text-slate-800 leading-[1.8] font-normal tracking-normal mb-5 ${className}`}
    >
      {parseFormattedSegments(text)}
    </p>
  );
}
