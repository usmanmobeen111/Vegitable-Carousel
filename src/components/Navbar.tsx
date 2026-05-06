import { LuLeaf } from 'react-icons/lu';

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      style={{
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <LuLeaf className="text-white text-xl" />
        </div>
        <span
          className="text-white font-outfit font-semibold text-lg tracking-widest uppercase hidden sm:block"
          style={{ letterSpacing: '0.18em' }}
        >
          FreshSlice
        </span>
      </div>
    </nav>
  );
};

export default Navbar;