import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleRegistration = () => {
  alert('Регистрация откроется скоро! Следите за обновлениями в наших соцсетях.');
};

export default function Header() {
  return (
    <header className="border-b border-mlPurple/20 bg-mlDark/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Castle" className="h-8 w-8 text-mlGold" />
            <h1 className="text-2xl font-heading font-bold text-white">
              MLBB <span className="text-mlGold">Арена</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('leagues')} className="text-white hover:text-mlGold transition-colors">
              Лиги
            </button>
            <button onClick={() => scrollToSection('tournaments')} className="text-white hover:text-mlGold transition-colors">
              Турниры
            </button>
            <button onClick={() => scrollToSection('matches')} className="text-white hover:text-mlGold transition-colors">
              Матчи
            </button>
            <Button 
              onClick={handleRegistration}
              className="bg-gradient-to-r from-mlPurple to-mlGold text-white font-medium hover:from-mlGold hover:to-mlPurple transition-all duration-300"
            >
              Регистрация
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}