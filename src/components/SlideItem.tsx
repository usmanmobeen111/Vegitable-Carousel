import { motion, AnimatePresence } from 'framer-motion';
import type { Fruit } from '../data/fruits';

interface SlideItemProps {
  fruit: Fruit;
  isActive: boolean;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const SlideItem = ({ fruit, isActive }: SlideItemProps) => {
  return (
    <div className="relative overflow-hidden bg-black" style={{ height: '100vh', width: '100%' }}>

      {/* ── Darkened background image ── */}
      <img
        src={fruit.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.18 }}
      />

      {/* ── Extra dark vignette overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.52)' }}
      />

      {/* ── Animated content ── */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={fruit.id}
            className="relative z-10 flex flex-col items-center justify-center h-full"
            style={{ paddingTop: '5rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >

            {/* ── Giant letter — image shows at full brightness inside ── */}
            <motion.h1
              aria-hidden="true"
              className="select-none leading-none font-black"
              style={{
                fontSize: 'clamp(7rem, 26vw, 19rem)',
                backgroundImage: `url(${fruit.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.06))',
              }}
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.06, opacity: 0 }}
              transition={{ duration: 0.85, ease }}
            >
              {fruit.name[0]}
            </motion.h1>

            {/* ── Fruit name ── */}
            <motion.h2
              className="text-white font-outfit font-bold uppercase tracking-[0.22em] mt-5"
              style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)' }}
              initial={{ y: 55, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
            >
              {fruit.name}
            </motion.h2>

            {/* ── Thin divider ── */}
            <motion.div
              className="mt-4 h-px"
              style={{
                width: 'clamp(50px, 7vw, 90px)',
                background: 'rgba(255,255,255,0.3)',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease }}
            />

            {/* ── Description ── */}
            <motion.p
              className="font-poppins text-center leading-relaxed mt-5"
              style={{
                fontSize: 'clamp(0.78rem, 1.4vw, 0.97rem)',
                maxWidth: 'clamp(270px, 38vw, 500px)',
                color: 'rgba(255,255,255,0.58)',
              }}
              initial={{ y: 55, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
            >
              {fruit.description}
            </motion.p>

            {/* ── Overview button ── */}
            <motion.button
              id={`overview-btn-${fruit.id}`}
              className="mt-10 font-outfit font-medium uppercase tracking-widest cursor-pointer"
              style={{
                fontSize: 'clamp(0.65rem, 1vw, 0.8rem)',
                padding: '0.75rem 2.2rem',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.35)',
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.88)',
                backdropFilter: 'blur(8px)',
                transition: 'background 0.28s ease, color 0.28s ease, border-color 0.28s ease',
              }}
              initial={{ y: 55, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                btn.style.background = 'rgba(255,255,255,0.95)';
                btn.style.color = '#000';
                btn.style.borderColor = 'rgba(255,255,255,1)';
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.style.background = 'rgba(255,255,255,0.06)';
                btn.style.color = 'rgba(255,255,255,0.88)';
                btn.style.borderColor = 'rgba(255,255,255,0.35)';
              }}
            >
              Overview
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlideItem;