import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-mlDark border-t border-mlPurple/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">Связаться с нами</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Icon name="Mail" className="mr-2 h-4 w-4 text-mlGold" />
                support@mlleagues.ru
              </p>
              <p className="flex items-center">
                <Icon name="MessageCircle" className="mr-2 h-4 w-4 text-mlPurple" />
                Telegram: @MLBBArenaAmeteur
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <Button 
                onClick={() => window.open('https://t.me/MLBBArenaAmeteur', '_blank')}
                variant="outline" 
                size="sm" 
                className="border-mlGold text-mlGold hover:bg-mlGold hover:text-black"
              >
                <Icon name="MessageCircle" className="h-4 w-4" />
              </Button>
              <Button 
                onClick={() => window.open('https://www.twitch.tv/mobilelegendsarena', '_blank')}
                variant="outline" 
                size="sm" 
                className="border-mlPurple text-mlPurple hover:bg-mlPurple hover:text-white"
              >
                <Icon name="Video" className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">О платформе</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Мы — команда единомышленников, объединенных общей целью: организация захватывающих турниров по Mobile Legends: Bang Bang для всех любителей игры. Мы хотим предоставить возможность каждому игроку продемонстрировать свои навыки и стратегические таланты в дружеской и конкурентной атмосфере. У нас есть грандиозные идеи для проведения турниров, а также амбициозное стремление к развитию, но пока что мы держим все детали в секрете🤭. Обещаем, вы обязательно увидите, что мы приготовили! Надеемся, вы поддержите нашу инициативу и останетесь с нами❤️‍🔥🌟.
            </p>
          </div>
        </div>
        <div className="border-t border-mlPurple/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MLBB Арена. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}