import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The speed of responses blew us away. We went from brief to live content faster than we ever thought possible.",
    name: "Eoin",
    role: "CEO",
    company: "Sourcetable",
    image: "/projects/cakewalk/testimonials/eoin.jpeg",
  },
  {
    quote:
      "Cakewalk completely changed how we approach content. It just works—no hand-holding required.",
    name: "Reece",
    role: "CEO",
    company: "Inhale",
    image: "/projects/cakewalk/testimonials/reece.jpeg",
  },
  {
    quote:
      "We plugged Cakewalk in and watched organic traffic climb week after week. The ROI speaks for itself.",
    name: "Peter",
    role: "Head of Marketing",
    company: "Base 44 Agency",
    image: "/projects/cakewalk/testimonials/base44.jpg",
  },
];

export const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(195 100% 50% / 0.03), transparent)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">growing teams</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what leaders are saying about Cakewalk AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 h-full border border-border/50 hover:border-primary/40 transition-all duration-300 hover:glow-box flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/20" />
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed flex-1 text-[0.95rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
