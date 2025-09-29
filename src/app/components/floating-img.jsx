// app/components/FloatingImage.jsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function FloatingImage({
  src = "/abc.png",
  width = 500,
  height = 500,
  alt = "img",
  amplitude = 12,     // px up/down
  tilt = 2,           // deg rotateX/rotateY
  duration = 6,       // seconds per cycle
  className = "",
}) {
  const reduce = useReducedMotion();

  const animate = reduce
    ? { y: 0, rotateX: 0, rotateY: 0, scale: 1 }
    : {
        y: [0, -amplitude, 0, -(amplitude * 0.65), 0],
        rotateX: [0, tilt, 0, tilt * 0.5, 0],
        rotateY: [0, -tilt, 0, -(tilt * 0.5), 0],
        scale: [1, 1.015, 1, 1.01, 1],
      };

  return (
    <motion.div
      className={className + " transform-gpu will-change-transform overflow-hidden"}
      style={{ perspective: 900 }}
      animate={animate}
      transition={{
        duration,
        times: [0, 0.35, 0.6, 0.85, 1],
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}
