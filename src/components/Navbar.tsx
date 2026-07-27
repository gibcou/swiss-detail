import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS, NAV_LINKS } from '@/lib/content';

interface NavbarProps {
  variant?: 'overlay' | 'solid';
}

export default function Navbar({ variant = 'solid' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isOverlay = variant === 'overlay';

  return (
    <nav
      className={
        isOverlay
          ? 'absolute top-0 left-0 right-0 z-20 w-full px-6 lg:px-8 py-6'
          : 'sticky top-0 z-20 w-full px-6 lg:px-8 py-4 bg-background/90 backdrop-blur border-b border-border'
      }
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-foreground">
          {BUSINESS.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90"
            onClick={() => window.open(BUSINESS.bookingUrl, '_blank', 'noopener,noreferrer')}
          >
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-card/95 backdrop-blur border border-border rounded-2xl shadow-2xl p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className="text-foreground/90 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            className="bg-foreground text-background hover:bg-foreground/90 w-full"
            onClick={() => {
              setMobileMenuOpen(false);
              window.open(BUSINESS.bookingUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
}
