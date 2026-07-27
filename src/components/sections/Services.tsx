import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Wand2, Wind } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES, BUSINESS } from '@/lib/content';

const ICONS = [Sparkles, ShieldCheck, Wand2, Wind];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Services built for perfection.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-card to-secondary/40 hover:border-foreground/30 transition-colors">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/10 mb-4">
                      <Icon className="text-foreground" size={22} />
                    </div>
                    <CardTitle className="text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
            onClick={() =>
              window.open(BUSINESS.bookingUrl, '_blank', 'noopener,noreferrer')
            }
          >
            Book a Service
          </Button>
        </div>
      </div>
    </section>
  );
}
