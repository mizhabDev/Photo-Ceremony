import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

export default function Studio() {
  const [api, setApi] = useState(null);

  const images = [
    { src: "/images/9.jpeg", title: "The Alphas", subtitle: "Signature Collection, 2020" },
    { src: "/images/8.jpg", title: "Celestial Frame", subtitle: "Aurora Series" },
    { src: "/images/7.jpg", title: "Midnight Glow", subtitle: "Darkroom Edition" },
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen relative text-white overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[#020617]" />

        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] 
        bg-purple-600/40 blur-[160px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] 
        bg-blue-500/40 blur-[160px] rounded-full" />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl" />
      </div>

      <Navbar />

      
      <div className="pt-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        
        <div>

          <Badge variant="outline" className="text-cyan-400 border-cyan-400/20 bg-cyan-400/10 tracking-widest uppercase text-[10px] py-0 px-2 h-5">
            PREMIUM STUDIO
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Midnight
            <br />
            Aurora
          </h1>

          <p className="text-white/60 text-sm mt-4 max-w-md leading-relaxed">
            Pioneering the “Celestial Darkroom” aesthetic. We don’t just capture
            photos; we architect light and atmosphere to immortalize the soul of
            every ceremony.
          </p>

          {/* cards */}
          <div className="flex gap-4 mt-6">

            <Card className="bg-white/5 border-white/10 w-40 h-28">
              <CardHeader className="p-4 gap-1">
                <CardTitle className="text-sm font-semibold text-white">
                  Celestial Lighting
                </CardTitle>
                <CardDescription className="text-xs text-white/60">
                  Atmospheric light sculpting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 w-40 h-28">
              <CardHeader className="p-4 gap-1">
                <CardTitle className="text-sm font-semibold text-white">
                  Biometric Curation
                </CardTitle>
                <CardDescription className="text-xs text-white/60">
                  AI-driven emotional focus.
                </CardDescription>
              </CardHeader>
            </Card>

          </div>

          
          <div className="flex gap-8 mt-8">

            <div>
              <h3 className="text-lg font-semibold">500+</h3>
              <p className="text-xs text-white/60">Ceremonies</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-400">1M+</h3>
              <p className="text-xs text-white/60">Memories Captured</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">100%</h3>
              <p className="text-xs text-white/60">Elite Rating</p>
            </div>

          </div>

          
          <div className="flex gap-4 mt-8">

             <Button className="px-4 py-5 rounded-full bg-white text-black font-medium 
                transition-all duration-300 
                hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] 
                hover:bg-gray-200">
                    Book Consultation
            </Button>


            <Button className="px-6 py-5 rounded-full 
            bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium 
            transition-all duration-300 
            hover:scale-105 
            hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] 
            hover:brightness-110">
             Visit our shop
            </Button>

          </div>

        </div>

        {/* carousel */}
        <div className="relative">

          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-1">

                    <img
                      src={img.src}
                      className="w-full h-[500px] object-cover"
                      alt={img.title}
                    />

                    {/* labels */}
                    <div className="absolute bottom-6 left-6 
                    bg-black/50 backdrop-blur-xl border border-white/20 
                    px-4 py-2 rounded-full text-sm">

                      <p className="text-white font-medium">
                        {img.title}
                      </p>
                      <span className="text-xs text-cyan-400">
                        {img.subtitle}
                      </span>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

        </div>

      </div>
    </div>
  );
}