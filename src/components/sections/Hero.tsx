import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import LiquidMetalHero from '@/components/ui/liquid-metal-hero';
import { BUSINESS, CREDENTIALS } from '@/lib/content';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <Navbar variant="overlay" />
      <LiquidMetalHero
        badge="12+ Years of Excellence"
        title={BUSINESS.tagline}
        subtitle="For over 12 years we've been committed to a stress-free experience for every customer — your car will look fresh off the lot when you pick it up."
        primaryCtaLabel="Book Appointment"
        secondaryCtaLabel="View Services"
        onPrimaryCtaClick={() =>
          window.open(BUSINESS.bookingUrl, '_blank', 'noopener,noreferrer')
        }
        onSecondaryCtaClick={() => navigate('/services')}
        features={CREDENTIALS}
      />
    </div>
  );
}
