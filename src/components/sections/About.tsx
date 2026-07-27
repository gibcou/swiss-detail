import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '@/lib/content';

const SHOP_IMAGE_URL =
  'https://img1.wsimg.com/isteam/ip/0af61416-d9bc-4de5-817d-fc928c6e2a96/Shop%20close%20up.jpg';

const STATS = [
  { icon: Award, label: '12+ years in business' },
  { icon: ShieldCheck, label: 'IDA-certified detailers' },
  { icon: Users, label: '40+ years combined experience' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-border"
        >
          <img
            src={SHOP_IMAGE_URL}
            alt={`${BUSINESS.legalName} shop in Bozeman, Montana`}
            className="w-full h-[420px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Swiss precision, since 2013.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            For over 12 years we've been committed to providing a
            stress-free experience for new and returning customers alike.
            Our detailers guarantee your car will look fresh off the lot
            when you pick it up — using only the best products on the
            market, on nearly every vehicle type.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our team includes an International Detailing Association
            (IDA) certified detailer, backed by over 40 years of combined
            hands-on experience.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col gap-3">
                <Icon className="text-foreground" size={24} />
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
