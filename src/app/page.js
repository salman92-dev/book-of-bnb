'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import { motion, AnimatePresence } from "framer-motion";
export default function Home() {
  const bookRef = useRef(null);
  const bookRef2 = useRef(null);
  const [isReady, setIsReady] = useState(false);
 const [opened, setOpened] = useState(false);
 const [opened1, setOpened1] = useState(false);

const handleOpenBook = () => {
  if (bookRef.current) {
    bookRef.current.pageFlip().flipNext();
  }
  setOpened(true);
};
const handleOpenBook2 = () => {
  if (bookRef2.current) {
    bookRef2.current.pageFlip().flipNext();
  }
  setOpened1(true);
};

  // Fallback: hide loader even if onInit never fires (network hiccups, etc.)
  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const handlePrev = () => {
    bookRef.current?.pageFlip().flipPrev();
  };

  const handleNext = () => {
    bookRef.current?.pageFlip().flipNext();
  };

  return (
    <div
      className="bg-[url('/page-bg.png')] h-[90vh] md:h-[100vh] w-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{ backgroundSize: 'cover', backgroundPosition: 'bottom center' }}
    >
      {/* Loader overlay */}
      <AnimatePresence>
        {!isReady && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center gap-4">
              {/* Spinner */}
              {/* <div className="relative w-14 h-14">
                <div className="absolute inset-0 rounded-full border-4 border-white/20" />
                <div className="absolute inset-0 rounded-full border-t-4 border-t-white animate-spin" />
              </div> */}
              <Image src="/tokenomics.gif" alt="logo" width={180} height={180} />

              {/* <p className="text-white/90 tracking-wide">Loading $BNB...</p> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2 absolute top-8 right-8 md:right-6">
  <a href="">
    <Image
      src="/x.svg"
      alt="logo"
      width={50}
      height={50}
      className="drop-shadow-[10px_10px_20px_0px_#00000040] 
                 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
    />
  </a>
  <a href="">
    <Image
      src="/tg.svg"
      alt="logo"
      width={50}
      height={50}
      className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
    />
  </a>
  <a href="">
    <Image
      src="/unknown.svg"
      alt="logo"
      width={50}
      height={50}
      className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
    />
  </a>
  <a href="" className="border-2 border-[#F0B912] rounded-full px-8 py-2 text-[#F0B912] transition-transform duration-300 hover:scale-105 hover:-translate-y-1 relative">
    <Image
      src="/neon.png"
      alt="logo"
      width={120}
      height={5}
      className="absolute left-2 top-[-140%]"
    />
    BUY $ABC
  </a>
</div>


      <h1 className="text-5xl text-white mama-bear mb-8">BOOK OF BNB</h1>

      {/* Navigation buttons */}
      <div className="flex gap-4 mb-4 absolute w-full justify-between px-[10%] top-1/2 -translate-y-1/2 z-10 hidden md:flex">
        <button
          onClick={handlePrev}
          className="px-4 py-2 cursor-pointer transition-transform duration-300 hover:-translate-x-2 hover:scale-110 hover:-translate-x-6 hover:-rotate-10"
          aria-label="Previous page"
        >
          <Image src="/left-arrow.png" alt="arrow" width={100} height={20} className="pointer-events-none" />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:scale-110 hover:translate-x-6 hover:rotate-10"
          aria-label="Next page"
        >
          <Image src="/left-arrow.png" alt="arrow" width={100} height={20} className="scale-x-[-1] pointer-events-none" />
        </button>
      </div>
 {/* Open Book Button */}
      {!opened && (
        <button
          onClick={handleOpenBook}
          className="absolute hidden  md:block bottom-16  z-20 px-6 py-3 bg-[#F1B70C] text-black mama-bear text-xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Open Book
        </button>
      )}
      {!opened1 && (
        <button
          onClick={handleOpenBook2}
          className="absolute block  md:hidden bottom-16  z-20 px-6 py-3 bg-[#F1B70C] text-black mama-bear text-xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Open Book
        </button>
      )}
      <HTMLFlipBook
        ref={bookRef}
        width={380}
        height={433}
        showCover={true}
        mobileScrollSupport={false}
        className="book-container !hidden md:!block"
        startPage={0}
        drawShadow={true}
        flippingTime={1500}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showPageCorners={true}
        disableFlipByClick={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        // When flipbook instance is ready, fade out the loader
        onInit={() => setIsReady(true)}
      >
        <div className="demoPage">
          <Image src="/cover-page.png" width={500} height={500} alt="img" />
        </div>

        <div className="bg-[#F1B70C] h-full px-16 py-[10%] flex flex-col justify-center">
          <h1 className="text-black mama-bear text-3xl mb-2">WHAT IS BOOK OF BNB?</h1>
          <p className="single-day text-black text-xl !leading-[100%]">
            Book of BNB ($ABC) is a meme token inspired by Binance’s 
            legendary “book” moment. It celebrates the culture, humor, 
            and community of crypto while carrying forward the spirit of 
            that iconic tweet. Simple, fun, and community-driven it’s more 
            than just a token, it’s a story.
          </p>
        </div>

        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)]">
          <Image src="/abc.png" width={500} height={500} alt="img" className="object-cover w-full h-full"/>
        </div>

        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] px-24 py-[12%]">
          <Image src="/bnb.png" width={500} height={500} alt="img" />
        </div>

        <div className="bg-[url(/about-bg.png)] bg-cover bg-center h-full px-16 py-[15%] flex flex-col justify-center">
          <h1 className="text-black mama-bear text-3xl mb-2">About bnb book</h1>
          <p className="single-day text-black text-xl !leading-[100%]">
            Book of BNB ($ABC) is a community-driven meme token on 
            BNB Chain, blending fun, memes, and crypto vibes. We’re 
            here to write a new chapter in meme coin history — with 
            laughs, unity, and moon missions.
          </p>
        </div>

        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] px-3 overflow-hidden">
          <h1 className="text-[#F1B80B] mama-bear text-3xl mb-6 text-center mt-4">THE VIRAL TWEET</h1>
          <Image src="/man.png" width={500} height={500} alt="img" />
        </div>

        <div className="bg-black px-4 py-[2%] flex flex-col justify-center relative w-full h-full">
          <Image
            src="/ss.png"
            alt="ss"
            width={700}
            height={300}
            className="absolute md:right-10 right-5 !max-w-[80%]"
          />
        </div>

        <div className="bg-[#F1B70C] h-full px-16 py-[2%] pl-36 flex flex-col justify-center relative">
          <Image src="/bnb-logo.png" alt="logo" width={200} height={200} className="absolute left-0 w-32 top-26" />
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-black mama-bear text-3xl mb-4">OUR STORY</h2>
            <p className="single-day text-black text-xl !leading-[100%]">
              It all started with a simple idea — what if memes and crypto could be combined 
              into one powerful book of fun? 
            </p>
          </div>
        </div>

        <div className="bg-[#F1B70C] h-full px-16 py-[10%] pr-36 flex flex-col justify-center relative shadow-xl">
          <Image
            src="/bnb-logo.png"
            alt="logo"
            width={200}
            height={200}
            className="absolute right-0 w-32 top-26 scale-x-[-1]"
          />
          <div className="flex flex-col justify-center h-full">
            <p className="single-day text-black text-xl !leading-[100%] mt-20">
            That’s how Book of BNB ($ABC) 
            was born. From community jokes to a real token, we’ve grown into 
            a project that unites people with laughter, creativity, and the dream 
            of going to the moon together.
          </p>
          </div>
        </div>

        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] h-full px-16 py-[10%] flex flex-col justify-center">
          <div className="flex items-center justify-center h-full">
            <Image src="/tokenomics.gif" alt="token" width={300} height={300} />
          </div>
        </div>

        <div className="bg-[#F1B70C] h-full px-16 flex flex-col justify-center relative shadow-xl">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-black mama-bear text-3xl mb-4">Tokenomics</h2>
            <p className="single-day text-black text-xl !leading-[100%]">
              Total Supply: 100 Million<br />
              Contract: Renounced<br />
              Buy/Sell Tax: 0/0%<br />
              LP Tokens: Burnt
            </p>
          </div>
        </div>

        <div className="bg-[#0A0A0A] h-full px-16 py-[10%] flex flex-col justify-center">
          <div className="flex items-center justify-center h-full">
            <Image src="/coins.png" alt="token" width={300} height={300} />
          </div>
        </div>

        <div className="bg-[#F1B70C] h-full px-16 flex flex-col justify-center relative shadow-xl">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-black mama-bear text-3xl mb-4">HOW TO BUY</h2>
            <p className="single-day text-black text-xl !leading-[100%]">Set up a wallet –</p>
            <p className="single-day text-[#4C4C4C] text-xl !leading-[100%] mb-4">
              Install a BNB Chain–compatible wallet like MetaMask or
              Trust Wallet, and fund it with BNB for gas + purchase.
            </p>

            <p className="single-day text-black text-xl !leading-[100%]">Connect to DEX –</p>
            <p className="single-day text-[#4C4C4C] text-xl !leading-[100%] mb-4">
              Go to a decentralized exchange (DEX) such as PancakeSwap,
              switch network to BNB Smart Chain, and connect your wallet.
            </p>

            <p className="single-day text-black text-xl !leading-[100%]">Swap for $BNBBOOK –</p>
            <p className="single-day text-[#4C4C4C] text-xl !leading-[100%]">
              Paste the official $BNBBOOK contract address, enter the amount
              of BNB you want to swap, confirm the trade, and approve in
              your wallet.
            </p>
          </div>
        </div>

        <div className="bg-[#0A0A0A] h-full flex flex-col justify-center">
          <div className="flex items-center justify-center h-full overflow-hidden">
            <Image src="/the-end.png" alt="token" width={400} height={300} className="w-full" />
          </div>
        </div>

        <div className="bg-[#F1B70C] h-full px-16 flex flex-col justify-center relative shadow-xl">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-black mama-bear text-3xl mb-4">Join Us</h2>
            <p className="mama-bear text-black text-lg !leading-[100%]">Buy Now:</p>
            <p className="single-day text-[#4C4C4C] text-xl !leading-[100%] mb-8">→ Uniswap</p>

            <p className="mama-bear text-black text-lg !leading-[100%]">telegram</p>
            <a
              href="https://t.me/@bookofbnb_erc"
              className="single-day text-[#4C4C4C] text-xl !leading-[100%] mb-8"
            >
              → @bookofbnb_erc
            </a>

            <p className="single-day text-black text-xl !leading-[100%]">twitter:</p>
            <a
              href="https://x.com/@bookofbnb_erc"
              className="single-day text-[#4C4C4C] text-xl !leading-[100%]"
            >
              → @bookofbnb_erc
            </a>
          </div>
        </div>
      </HTMLFlipBook>
      <div className="w-full px-2">
        <HTMLFlipBook
        ref={bookRef2}
        width={380}
        height={483}
        size="stretch"
        usePortrait={true}
        showCover={true}
        mobileScrollSupport={false}
        className="book-container md:!hidden !block"
        startPage={0}
        drawShadow={true}
        flippingTime={1500}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showPageCorners={true}
        disableFlipByClick={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        // When flipbook instance is ready, fade out the loader
        onInit={() => setIsReady(true)}
      >
        <div className="demoPage bg-black">
          <div className="flex items-center justify-center h-full">
          <Image src="/cover-page.png" width={500} height={500} alt="img" />
          </div>
        </div>

        <div className="bg-[#F1B70C] h-full px-4 py-[3%] flex flex-col justify-center">
          <h1 className="text-black mama-bear text-md mb-2">WHAT IS BOOK OF BNB?</h1>
          <p className="single-day text-black text-sm !leading-[100%]">
            Book of BNB ($ABC) is a meme token inspired by Binance’s legendary “book” moment. It celebrates the culture, humor, and community of crypto while carrying forward the spirit of that iconic tweet. Simple, fun, and community-driven it’s more than just a token, it’s a story.
          </p>
        </div>

        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)]">
          <div className="flex items-center justify-center h-full overflow-hidden">
          <Image src="/abc.png" width={500} height={500} alt="img" className="w-full" />
          </div>
        </div>

        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] px-6">
          <div className="flex items-center justify-center h-full">
          <Image src="/bnb.png" width={500} height={500} alt="img" />
          </div>
        </div>

        <div className="bg-[url(/about-bg.png)] bg-cover bg-center h-full px-6 py-[5%] flex flex-col justify-center">
          <h1 className="text-black mama-bear text-md mb-2">About bnb book</h1>
          <p className="single-day text-black text-sm !leading-[100%]">
           Book of BNB ($ABC) is a community-driven meme token on BNB 
           Chain, blending fun, memes, and crypto vibes. We’re here to write 
           a new chapter in meme coin history — with laughs, unity, and 
           moon missions.
          </p>
        </div>

        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] px-2 py-[2%] overflow-hidden">
          <h1 className="text-[#F1B80B] mama-bear text-md mb-6 text-center mt-4">THE VIRAL TWEET</h1>
          <Image src="/man.png" width={500} height={500} alt="img" />
        </div>

        <div className="bg-[#F1B80B] px-4 py-[5%] flex flex-col justify-center relative">
          <Image
            src="/ss.png"
            alt="ss"
            width={700}
            height={300}
            className="absolute md:right-10 right-5 w-[80%]"
          />
        </div>

        <div className="bg-[#F1B70C] h-full px-6 py-[3%] pl-10 flex flex-col justify-center relative">
          <Image src="/bnb-logo.png" alt="logo" width={200} height={200} className="absolute left-0 w-10 top-22" />
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-black mama-bear text-md mb-2">OUR STORY</h2>
            <p className="single-day text-black text-sm !leading-[100%]">
              It all started with a simple idea — what if memes and crypto could 
              be combined into one powerful book of fun?
            </p>
          </div>
        </div>

        <div className="bg-[#F1B70C] h-full px-6 py-[3%] pr-12 flex flex-col justify-center relative shadow-xl">
          <Image
            src="/bnb-logo.png"
            alt="logo"
            width={200}
            height={200}
            className="absolute right-0 w-10 top-22 scale-x-[-1]"
          />
          <div className="flex flex-col justify-center h-full">
            <p className="single-day text-black text-sm !leading-[100%] mt-8">
             That’s how Book of 
            BNB ($ABC) was born. From community jokes to a real token, 
            we’ve grown into a project that unites people with laughter, 
            creativity, and the dream of going to the moon together.
          </p>
          </div>
        </div>

        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#282827_0%,#2A2A29_100%)] h-full px-6 py-[2%] flex flex-col justify-center">
          <div className="flex items-center justify-center h-full">
            <Image src="/tokenomics.gif" alt="token" width={500} height={500} />
          </div>
        </div>

        <div className="bg-[#F1B70C] h-full px-6 flex flex-col justify-center relative shadow-xl">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-black mama-bear text-md mb-4">Tokenomics</h2>
            <p className="single-day text-black text-sm !leading-[100%]">
              Total Supply: 100 Million<br />
              Contract: Renounced<br />
              Buy/Sell Tax: 0/0%<br />
              LP Tokens: Burnt
            </p>
          </div>
        </div>

        <div className="bg-[#0A0A0A] h-full px-16 py-[10%] flex flex-col justify-center">
          <div className="flex items-center justify-center h-full">
            <Image src="/coins.png" alt="token" width={300} height={300} />
          </div>
        </div>

        <div className="bg-[#F1B70C] h-full px-6 flex flex-col justify-center relative shadow-xl">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-black mama-bear text-sm mb-0">HOW TO BUY</h2>
            <p className="single-day text-black text-xs !leading-[100%]">Set up a wallet –</p>
            <p className="single-day text-[#4C4C4C] text-xs !leading-[100%] mb-0">
              Install a BNB Chain–compatible wallet like MetaMask or
              Trust Wallet, and fund it with BNB for gas + purchase.
            </p>

            <p className="single-day text-black text-xs !leading-[100%]">Connect to DEX –</p>
            <p className="single-day text-[#4C4C4C] text-xs !leading-[100%] mb-0">
              Go to a decentralized exchange (DEX) such as PancakeSwap,
              switch network to BNB Smart Chain, and connect your wallet.
            </p>

            <p className="single-day text-black text-xs !leading-[100%]">Swap for $BNBBOOK –</p>
            <p className="single-day text-[#4C4C4C] text-xs !leading-[100%]">
              Paste the official $BNBBOOK contract address, enter the amount
              of BNB you want to swap, confirm the trade, and approve in
              your wallet.
            </p>
          </div>
        </div>

        <div className="bg-[#0A0A0A] h-full flex flex-col justify-center">
          <div className="flex items-center justify-center h-full overflow-hidden">
            <Image src="/the-end.png" alt="token" width={400} height={300} className="w-full" />
          </div>
        </div>

        <div className="bg-[#F1B70C] h-full px-6 flex flex-col justify-center relative shadow-xl">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-black mama-bear text-md mb-2">Join Us</h2>
            <p className="mama-bear text-black text-base !leading-[100%]">Buy Now:</p>
            <p className="single-day text-[#4C4C4C] text-sm !leading-[100%] mb-2">→ Uniswap</p>

            <p className="mama-bear text-black text-sm !leading-[100%]">telegram</p>
            <a
              href="https://t.me/@bookofbnb_erc"
              className="single-day text-[#4C4C4C] text-xl !leading-[100%] mb-2"
            >
              → @bookofbnb_erc
            </a>

            <p className="single-day text-black text-sm !leading-[100%]">twitter:</p>
            <a
              href="https://x.com/@bookofbnb_erc"
              className="single-day text-[#4C4C4C] text-xl !leading-[100%]"
            >
              → @bookofbnb_erc
            </a>
          </div>
        </div>
      </HTMLFlipBook>
      </div>
      <p className="single-day text-xl absolute bottom-3">
        © 2025 BOOK OF BNB . All rights reserved.
      </p>
    </div>
  );
}
