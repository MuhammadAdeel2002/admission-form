"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MarqueeItemProps {
  text: string;
  icon?: string;
  highlight?: boolean;
}

interface MarqueeSectionProps {
  items: MarqueeItemProps[];
  speed?: number;
  reverse?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export default function MarqueeSection({
  items,
  speed = 50,
  reverse = false,
  backgroundColor = "bg-primary",
  textColor = "text-white"
}: MarqueeSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect based on scroll
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [reverse ? -25 : 25, reverse ? 25 : -25]
  );
  
  // Duplicate items for continuous scroll effect
  const duplicatedItems = [...items, ...items];
  
  // Calculate animation duration based on speed and number of items
  const animationDuration = items.length * (100 / speed);
  
  return (
    <div 
      ref={containerRef}
      className={`${backgroundColor} py-8 overflow-hidden`}
    >
      <motion.div
        style={{ y }}
        className="relative flex"
      >
        <motion.div
          animate={{ x: reverse ? ["0%", "100%"] : ["0%", "-100%"] }}
          transition={{
            x: {
              duration: animationDuration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.text}-${index}`}
              className={`inline-flex items-center mx-6 ${textColor} ${
                item.highlight ? 'text-secondary font-bold' : ''
              }`}
            >
              {item.icon && (
                <span className="mr-2 text-2xl">{item.icon}</span>
              )}
              <span className="text-xl md:text-2xl font-medium">{item.text}</span>
              <span className="mx-4 text-xl opacity-30">•</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Predefined marquee configurations for easy reuse
export const achievementsMarquee = {
  items: [
    { text: "15+ Years of Excellence", icon: "🏆", highlight: true },
    { text: "9 Successful Businesses", icon: "🏢" },
    { text: "500+ Completed Projects", icon: "✅" },
    { text: "1000+ Employees Worldwide", icon: "👥" },
    { text: "20+ Industry Awards", icon: "🎖️", highlight: true },
    { text: "4 Educational Institutions", icon: "🎓" },
    { text: "Serving 3 Countries", icon: "🌏" },
    { text: "98% Customer Satisfaction", icon: "❤️", highlight: true },
  ],
  speed: 35,
  backgroundColor: "bg-primary",
  textColor: "text-white",
};

export const partnersMarquee = {
  items: [
    { text: "Government of Pakistan", icon: "🇵🇰" },
    { text: "International Finance Corporation", icon: "🏦" },
    { text: "Asian Development Bank", icon: "🏦", highlight: true },
    { text: "World Bank Group", icon: "🌐" },
    { text: "USAID", icon: "🇺🇸" },
    { text: "Siemens", icon: "⚡", highlight: true },
    { text: "Microsoft", icon: "💻" },
    { text: "Uber Technologies", icon: "🚗" },
  ],
  speed: 40,
  reverse: true,
  backgroundColor: "bg-gray-100 dark:bg-gray-800",
  textColor: "text-primary dark:text-white",
}; 