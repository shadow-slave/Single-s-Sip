"use client";
import { useState,useEffect } from "react";
import { soberDrinks } from "@/data/drinks";
import Image from "next/image";
import { Playfair_Display,Lato } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const lato = Lato({
    subsets: ["latin"],
    weight: "100"
});

export default function SoberPage(){
    const todayIndex = new Date().getDay(); 
    const [currentIndex, setCurrentIndex] = useState(todayIndex);
    const currentDrink = soberDrinks[currentIndex];

    const isToday = currentIndex === todayIndex;

    useEffect(()=>{
        const i = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex === 6 ? 0 : prevIndex + 1))
        }, 3000)
        return () => clearInterval(i);
    }, [])

    return(
  <div className="main min-h-screen flex flex-col md:flex-row ">
             <button className="flex text-slate-400 absolute top-1/2 left-3 text-xs md:text-2xl md:hover:cursor-pointer " onClick={()=>setCurrentIndex((prev)=>prev<6?prev+1:6)}>
                  →
             </button>
             {/* <button className="flex text-sky-700 absolute top-1/2 right-3 text-xs md:text-2xl md:hover:cursor-pointer " onClick={()=>setCurrentIndex((prev)=>prev<6?prev+1:0)}>
                
             </button> */}
             <div className="left bg-[#f8f5f2] flex items-center justify-center w-full md:w-1/2  p-10 relative z-10">
                 <div key={currentDrink.name} className={`${lato.className} text-center flex flex-col items-center justify-center animate-fade-up`}>
                     {isToday && <h2 
                                     className="mt-8 px-4 py-1 mb-2 text-white uppercase tracking-widest text-xs"
                                     style={{backgroundColor:currentDrink.color}}
                                 >
                                     Today's Choice
                                 </h2>}
                     <h1 className={`${lato.className} text-sm md:text-base tracking-[0.2em] uppercase mb-2 text-zinc-800 `}>{currentDrink.day} | <span> {currentDate} </span></h1>
                     <h1 className={`${playfair.className} text-5xl md:text-7xl mb-4 text-zinc-800 `}>{currentDrink.name}</h1>
                     <div className="flex gap-2 mb-6">
                        {currentDrink.tags.map((t)=>(
                            <span key={t} className="text-[10px] text-gray-400 text-xs uppercase tracking-wider border border-gray-300 px-3 py-1  font-sans">
                                {t}
                            </span>
                        ))}
                     </div>
                     <p className={`${lato.className} text-gray-500 italic font-light text-lg`}>"{currentDrink.quote}"</p>
                 </div>
             </div>
 
             <div 
             className="w-full md:w-1/2 relative  flex-1 md:h-screen transition-colors duration-500 ease-in-out"
             style={{backgroundColor: currentDrink.color}}
             >
                 <Image  src={currentDrink.image || ""} alt={currentDrink.name} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain"/>
             </div>
         </div>    )
}