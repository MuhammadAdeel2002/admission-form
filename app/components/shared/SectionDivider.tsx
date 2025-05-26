import { motion } from "framer-motion";

interface SectionDividerProps {
  backgroundColor?: string;
  withDots?: boolean;
  reversed?: boolean;
}

export default function SectionDivider({ 
  backgroundColor = "bg-white", 
  withDots = false,
  reversed = false
}: SectionDividerProps) {
  return (
    <div className={`relative h-32 overflow-hidden ${backgroundColor}`}>
      {/* Wave shape */}
      <div className="absolute inset-0">
        <svg 
          viewBox="0 0 1440 120" 
          className={`w-full h-full ${reversed ? 'rotate-180' : ''}`}
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="currentColor"
            className="text-secondary/10"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,16C840,11,960,21,1080,32C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="currentColor"
            className="text-secondary/5"
          />
        </svg>
      </div>

      {/* Decorative dots */}
      {withDots && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="w-2 h-2 bg-secondary rounded-full"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 