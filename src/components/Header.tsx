import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="border-b border-mlPurple/20 bg-mlDark/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Crown" className="h-8 w-8 text-mlGold" />
            <h1 className="text-2xl font-heading font-bold text-white">
              ML <span className="text-mlGold">Лиги</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#leagues" className="text-white hover:text-mlGold transition-colors">
              Лиги
            </a>
            <a href="#tournaments" className="text-white hover:text-mlGold transition-colors">
              Турниры
            </a>
            <a href="#matches" className="text-white hover:text-mlGold transition-colors">
              Матчи
            </a>
            <Button 
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