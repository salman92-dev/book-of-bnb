import { motion } from "framer-motion";

export default function BookCurlLoader() {
  return (
   <div className="relative w-[220px] h-[160px]">
  {/* stack */}
  {Array.from({ length: 4 }).map((_, i) => (
    <div
      key={i}
      className="absolute inset-0 rounded-md bg-white/[0.06]"
      style={{ transform: `translateY(${i * 4}px)` }}
    />
  ))}
  {/* flipping page */}
  <motion.div
    className="absolute inset-0 rounded-md bg-white/[0.14] origin-left"
    animate={{ rotateY: [0, 170, 0] }}
    transition={{ duration: 1.3, repeat: Infinity, ease: [0.22,1,0.36,1] }}
    style={{ transformStyle: "preserve-3d", perspective: 800 }}
  />
</div>
  );
}


import { motion } from "framer-motion";


