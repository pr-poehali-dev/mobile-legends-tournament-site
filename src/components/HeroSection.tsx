import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleStreams = () => {
  window.open('https://www.twitch.tv/mobilelegendsarena', '_blank');
};

const heroImages = [
  {
    url: "https://cdn.poehali.dev/files/db04d740-43fc-4165-9402-93faf0a92812.jpg",
    alt: "Welcome to Mobile Legends Community"
  },
  {
    url: "https://cdn.poehali.dev/files/af6d3255-cd08-44eb-ae0d-dcf44ac89566.jpg",
    alt: "Mobile Legends Heroes Collection"
  },
  {
    url: "https://cdn.poehali.dev/files/3208c3e0-83e3-4368-9a64-5c244d7c1911.jpg", 
    alt: "Mobile Legends Bang Bang Characters"
  },
  {
    url: "https://cdn.poehali.dev/files/9241a263-d972-4a24-9165-719fa1744d2d.jpeg",
    alt: "Professional Mobile Legends Player"
  }
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Смена каждые 5 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-mlPurple/40 to-mlGold/30 z-20"></div>
      
      {/* Image Carousel Background */}
      <div className="absolute inset-0 z-10">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-40' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image.url}')` }}
          />
        ))}
      </div>

      {/* Additional Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/30 z-20"></div>
      
      <div className="container mx-auto px-4 relative z-30">
        <div className="text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-2xl">
            <span className="block bg-gradient-to-r from-mlPurple to-mlGold bg-clip-text text-transparent">
              Любительская арена
            </span>
            <span className="block text-white text-4xl md:text-5xl mt-2">
              Mobile Legends
            </span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Соревнуйтесь в своей лиге! От новичков до профессионалов - каждый найдет подходящий турнир.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('leagues')}
              className="bg-gradient-to-r from-mlPurple to-purple-700 hover:from-purple-700 hover:to-mlPurple text-white px-8 py-3 text-lg animate-pulse-glow shadow-2xl"
            >
              <Icon name="Users" className="mr-2" />
              Выбрать лигу
            </Button>
            <Button 
              onClick={handleStreams}
              className="bg-gradient-to-r from-mlGold to-orange-600 hover:from-orange-600 hover:to-mlGold text-white px-8 py-3 text-lg shadow-2xl"
            >
              <Icon name="Play" className="mr-2" />
              Смотреть стримы
            </Button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-mlGold shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}