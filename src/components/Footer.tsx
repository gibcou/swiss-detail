import { Link } from 'react-router-dom';
import { BUSINESS, NAV_LINKS } from '@/lib/content';

const SOCIAL_LINKS = [
  { label: 'Facebook', short: 'FB', href: BUSINESS.social.facebook },
  { label: 'Instagram', short: 'IG', href: BUSINESS.social.instagram },
  { label: 'YouTube', short: 'YT', href: BUSINESS.social.youtube },
];

const PERSONAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/gibcou/GIBSON-COUTLEY-EPORT' },
  { label: 'Resume', href: '/gibson-coutley-resume.pdf' },
  {
    label: 'Fractional Engineer',
    href: 'https://sell-me-site.vercel.app/?ref=gibsoncoutley.com',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="text-2xl font-semibold text-foreground">
            {BUSINESS.name}
          </span>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {BUSINESS.legalName} — highest-quality auto detailing in Bozeman,
            Montana since 2013.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
            Visit Us
          </h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {BUSINESS.address}
          </p>
          <a
            href={BUSINESS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-foreground hover:underline"
          >
            Book an appointment &rarr;
          </a>
        </div>
      </div>

      <div className="border-t border-border py-6 space-y-3">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All rights
          reserved.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          {PERSONAL_LINKS.map((link, index) => (
            <span key={link.label} className="flex items-center gap-4">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground hover:underline transition-colors"
              >
                {link.label}
              </a>
              {index < PERSONAL_LINKS.length - 1 && (
                <span aria-hidden="true">&middot;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
