import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-mlPurple/30 to-mlGold/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/img/57d8e553-404f-4e91-86ef-a1ced6d90e4f.jpg')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            Лиги
            <span className="block bg-gradient-to-r from-mlPurple to-mlGold bg-clip-text text-transparent">
              Mobile Legends
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Соревнуйтесь в своей лиге! От новичков до профессионалов - каждый найдет подходящий турнир.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-mlPurple to-purple-700 hover:from-purple-700 hover:to-mlPurple text-white px-8 py-3 text-lg animate-pulse-glow">
              <Icon name="Users" className="mr-2" />
              Выбрать лигу
            </Button>
            <Button variant="outline" className="border-mlGold text-mlGold hover:bg-mlGold hover:text-black px-8 py-3 text-lg">
              <Icon name="Play" className="mr-2" />
              Смотреть стримы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}