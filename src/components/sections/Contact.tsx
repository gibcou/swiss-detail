import { motion } from 'framer-motion';
import { MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS } from '@/lib/content';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/40 p-10 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Ready for a showroom finish?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Book online in minutes, or drop by the shop — we're happy to
            answer any questions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
              onClick={() =>
                window.open(BUSINESS.bookingUrl, '_blank', 'noopener,noreferrer')
              }
            >
              Book Now
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{BUSINESS.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={18} />
              <span>Text {BUSINESS.smsNumber}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
