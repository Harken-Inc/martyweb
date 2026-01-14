import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is AEO and how is it different from SEO?",
    answer: "AEO (Answer Engine Optimization) focuses on getting your content cited by AI platforms like ChatGPT, Perplexity, and Google's AI Mode. While SEO optimizes for traditional search rankings, AEO ensures AI assistants reference your content when answering user questions. The competition is much lower, and a single AI citation can drive more qualified traffic than a page-one Google ranking."
  },
  {
    question: "Why does Cakewalk do both SEO and AEO?",
    answer: "SEO is a required foundation for AEO, but the goals and methods differ. Traditional SEO focuses on ranking signals, keywords, and backlinks to climb search results. AEO optimizes for how AI models understand, trust, and cite your content—emphasizing clear answers, authoritative structure, and citation-friendly formatting. We do both because strong SEO builds the domain authority that AI platforms rely on, while AEO-specific techniques ensure you actually get cited. Together, they capture traffic from both traditional search and the rapidly growing AI search channel."
  },
  {
    question: "Is AEO the same as GEO or AI search optimization?",
    answer: "Yes, they're all the same thing. AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), and AI search optimization are different names for the same practice: optimizing your content to be discovered and cited by AI-powered search tools. The industry is new, so different terms emerged in parallel. We use AEO because it emphasizes the goal—getting your content featured as the answer."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most customers see their first AI citations within 2-4 weeks. Unlike traditional SEO which can take 6-12 months, the AEO landscape is new and less competitive. Our agent identifies quick-win opportunities in your niche and creates optimized content immediately. You'll have full visibility into citations and traffic growth through your dashboard."
  },
  {
    question: "What AI platforms does Cakewalk optimize for?",
    answer: "Cakewalk optimizes your content for all major AI platforms including ChatGPT, Perplexity, Google AI Mode, Gemini, Claude, and Microsoft Copilot. We continuously monitor which platforms are citing your content and adjust our strategy to maximize visibility across the AI ecosystem."
  },
  {
    question: "Do I need any technical knowledge to use Cakewalk?",
    answer: "Not at all. Setup takes about 2 minutes—just connect your website and analytics. The agent handles everything automatically: research, content creation, publishing, and optimization. You can be as hands-on or hands-off as you like, with full control over approval workflows if you want to review content before it goes live."
  },
  {
    question: "What kind of content does the agent create?",
    answer: "The agent creates a variety of content types matched to search intent: in-depth articles, how-to guides, FAQ pages, product comparisons, listicles, and expert roundups. It analyzes what formats get cited most in your industry and automatically produces content in those styles, optimized for both AI citation and traditional search rankings."
  },
  {
    question: "How does Cakewalk's self-learning system work?",
    answer: "Cakewalk tracks every piece of content across AI platforms and Google. It identifies what's working—which topics, formats, and styles get cited most—and automatically applies those learnings to future content. Underperforming content gets refreshed and re-optimized. The system also learns patterns across all users, so you benefit from collective intelligence."
  },
  {
    question: "Will Cakewalk work for my industry or niche?",
    answer: "Cakewalk works for any industry where people search for information online. Whether you're in B2B software, e-commerce, professional services, health and wellness, finance, or any other sector, the agent adapts to your specific market. It researches your competitors, identifies gaps, and creates content tailored to your audience's questions."
  },
  {
    question: "Does Cakewalk replace my existing SEO efforts?",
    answer: "Cakewalk handles both AEO and traditional SEO, so it can replace or complement your existing efforts. The content we create is optimized for Google rankings as well as AI citations. Many customers use Cakewalk as their primary content engine, while others run it alongside existing SEO programs to capture the new AI search opportunity."
  },
  {
    question: "Can I review content before it's published?",
    answer: "Absolutely. You have full control over your approval workflow. You can set Cakewalk to auto-publish (fully automated), require approval for all content, or only flag certain types for review. Most customers start with approvals enabled and switch to auto-publish once they're confident in the quality and brand alignment."
  },
  {
    question: "Are there things Cakewalk can't do automatically?",
    answer: "Yes—some high-impact actions require a human touch. For example, Cakewalk can't post comments on Reddit threads, respond to Quora questions, or engage directly on social platforms on your behalf. However, we're building a recommendations engine that will surface these opportunities for you, showing exactly where and how to engage for maximum impact. You'll get actionable suggestions you can optionally pursue to boost your results even further."
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
  isInView
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{ borderBottom: '1px solid hsl(195 100% 50% / 0.2)' }}
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about Cakewalk and AI-powered traffic growth
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
