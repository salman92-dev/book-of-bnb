"use client";
import { motion } from "framer-motion";

export default function LiteHover3D() {
  return (
    <section className="bg-[#F1B70C] h-full px-16 py-[10%] flex flex-col justify-center">
      <motion.h1
        className="text-black mama-bear text-3xl mb-2"
        animate={{ y: [0, -12, 0], rotateX: [0, 1, 0], rotateY: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        WHAT IS BOOK OF BNB?
      </motion.h1>

      <motion.p
        className="single-day text-black text-xl !leading-[100%]"
        animate={{ y: [0, -6, 0], rotateX: [0, 0.5, 0], rotateY: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        Book of BNB ($ABC) is a meme token inspired by Binance’s legendary “book”
        moment. It celebrates the culture, humor, and community of crypto while
        carrying forward the spirit of that iconic tweet. Simple, fun, and
        community-driven it’s more than just a token, it’s a story.
      </motion.p>
    </section>
  );
}
