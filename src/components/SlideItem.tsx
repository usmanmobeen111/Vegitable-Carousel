import { motion, AnimatePresence } from "framer-motion";
import type { Fruit } from "../data/fruits";

interface SlideItemProps {
  fruit: Fruit;
  isActive: boolean;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const SlideItem = ({ fruit, isActive }: SlideItemProps) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background image */}
      <img
        src={fruit.image}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={fruit.id}
            className="relative h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* 🔥 GIANT LETTER (BACKGROUND) */}
            <motion.h1
              className="absolute inset-0 flex items-center justify-center font-black select-none pointer-events-none z-0 -translate-y-10 md:-translate-y-14 lg:-translate-y-16"
              style={{
                fontSize: "clamp(30rem, 38vw, 65rem)",
                backgroundImage: `url(${fruit.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                opacity: 1,
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 1, ease }}
            >
              {fruit.name[0]}
            </motion.h1>

            {/* 🔥 CONTENT (ON TOP OF LETTER) */}
            <div className="relative z-10 flex h-full items-center justify-center px-4">
              
              <div className="flex flex-col items-center text-center gap-y-4 md:gap-y-5 lg:gap-y-6 mt-4 md:mt-6">

                {/* Title */}
                <motion.h2
                  className="text-white font-bold uppercase "
                  style={{ fontSize: "clamp(2.2rem, 6vw, 6rem)" }}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                >
                  {fruit.name}
                </motion.h2>

                {/* Divider */}
                <motion.div
                  className="h-px bg-white/50"
                  style={{ width: "100px" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease }}
                />

                {/* Description */}
                <motion.p
                 className="text-white/80 leading-relaxed max-w-[90%] sm:max-w-md md:max-w-lg"
style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.25, ease }}
                >
                  {fruit.description}
                </motion.p>

                {/* Button */}
                <motion.button
              className="mt-5 md:mt-6 font-medium uppercase tracking-widest cursor-pointer hover:bg-white hover:text-black hover:border-white"
                  style={{
                    fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)',
                padding: '0.8rem 2rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.4)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                  }}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.35, ease }}
                >
                  Overview
                </motion.button>

              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlideItem;