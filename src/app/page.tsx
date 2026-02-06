import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen bg-[#f8f5f2] flex flex-col items-center justify-center p-10 hover:bg-white transition-colors duration-500 group border-b md:border-b-0 md:border-r border-gray-200">
        <h2 className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 font-sans">
          Option 1
        </h2>
        <h1 className={`${playfair.className} text-4xl md:text-6xl text-zinc-800 mb-4 text-center group-hover:scale-105 transition-transform duration-500`}>
          Healing Era
        </h1>
        <p className="text-gray-500 italic mb-8 font-light text-center max-w-md">
          "I don't need a date, I need hydration and peace."
        </p>
        <Link 
          href="/sober" 
          className="px-8 py-3 border border-zinc-800 text-zinc-800 uppercase tracking-widest text-xs hover:bg-zinc-800 hover:text-white transition-all duration-300"
        >
          Enter Zen Mode
        </Link>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-screen bg-[#1c1917] flex flex-col items-center justify-center p-10 hover:bg-black transition-colors duration-500 group">
        <h2 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 font-sans">
          Option 2
        </h2>
        <h1 className={`${playfair.className} text-4xl md:text-6xl text-white mb-4 text-center group-hover:scale-105 transition-transform duration-500`}>
          Villain Era
        </h1>
        <p className="text-gray-400 italic mb-8 font-light text-center max-w-md">
          "Valentine's is just a Tuesday if you don't remember it."
        </p>
        <Link 
          href="/alcohol" 
          className="px-8 py-3 border border-white text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
        >
          Enter Chaos Mode
        </Link>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full h-24 w-24 flex items-center justify-center text-center p-2 shadow-2xl z-20 border-4 border-white">
        <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">
          Single<br/>Player<br/>Mode
        </span>
      </div>

    </div>
  );
}