import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/content';

interface FAQProps {
  limit?: number;
}

export default function FAQ({ limit }: FAQProps) {
  const items = limit ? FAQS.slice(0, limit) : FAQS;

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Frequently asked questions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {limit && limit < FAQS.length && (
          <div className="mt-10 text-center">
            <Link
              to="/faq"
              className="text-sm font-medium text-foreground hover:underline"
            >
              View all FAQs &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
