import { motion } from 'framer-motion';
import { Flame, Shield, Droplets, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS } from '@/lib/content';

const BENEFITS = [
  {
    icon: Shield,
    title: 'Extreme Hardness',
    description:
      'SiO2 polymer bonds to your paint, forming a hard protective layer that resists scratches and swirl marks.',
  },
  {
    icon: Flame,
    title: 'Heat Resistance',
    description:
      "Withstands high engine-bay and ambient temperatures without breaking down or discoloring.",
  },
  {
    icon: Droplets,
    title: 'Hydrophobic Finish',
    description:
      'Water beads and rolls off instantly, taking dirt and grime with it — washes become faster and easier.',
  },
  {
    icon: Sun,
    title: 'Corrosion & UV Protection',
    description:
      'Guards your paint against oxidation, road salt, and sun damage for long-lasting, deep gloss.',
  },
];

export default function CeramicCoatings() {
  return (
    <section
      id="ceramic-coatings"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(228,228,231,0.08), transparent 45%), radial-gradient(circle at 80% 70%, rgba(228,228,231,0.06), transparent 45%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            Ceramic Coatings
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Protection that lasts, shine that lingers.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our professional-grade SiO2 ceramic coating is applied by hand
            for a finish that's harder, glossier, and longer-lasting than
            traditional wax.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/10 mb-5">
                <Icon className="text-foreground" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10"
            onClick={() =>
              window.open(BUSINESS.bookingUrl, '_blank', 'noopener,noreferrer')
            }
          >
            Get a Ceramic Coating Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
