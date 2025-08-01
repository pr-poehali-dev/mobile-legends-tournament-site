import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const leagues = [
  {
    id: 'legendary',
    name: 'Легендарная Лига',
    color: 'legendary',
    bgGradient: 'from-red-600 via-red-500 to-yellow-500',
    glowEffect: '',
    description: 'Стартовая лига для всех команд',
    minRank: 'Grandmaster V',
    maxPrize: '₽250,000',
    promotion: '1-2 места → Мифическая лига'
  },
  {
    id: 'mythic',
    name: 'Мифическая Лига',
    color: 'mythic',
    bgGradient: 'from-cyan-400 via-cyan-500 to-yellow-400',
    glowEffect: '',
    description: 'Элитная лига для лучших команд',
    minRank: 'Mythic V',
    maxPrize: '₽500,000',
    promotion: '1-2 места → Бессмертная лига'
  },
  {
    id: 'immortal',
    name: 'Бессмертная Лига',
    color: 'immortal',
    bgGradient: 'from-purple-600 via-purple-500 to-yellow-500',
    glowEffect: '',
    description: 'Высшая лига для чемпионов',
    minRank: 'Mythic Glory',
    maxPrize: '₽1,000,000',
    promotion: 'Чемпионы остаются в лиге'
  },
  {
    id: 'solo',
    name: 'Solo Leveling',
    color: 'soloLeveling',
    bgGradient: 'from-black via-purple-900 to-purple-600',
    glowEffect: '',
    description: 'Для одиночных игроков',
    minRank: 'Epic I',
    maxPrize: '₽100,000',
    promotion: 'Автоматический подбор команд'
  }
];

export default function LeaguesSection() {
  return (
    <section id="leagues" className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-heading font-bold text-white text-center mb-4">
          Выберите свою <span className="text-mlGold">лигу</span>
        </h3>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Все команды начинают в Легендарной лиге. По итогам сезона 1-2 места поднимаются в следующую лигу.
          Solo Leveling — для игроков без команды с автоматическим подбором союзников.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {leagues.map((league) => (
            <Card 
              key={league.id} 
              className={`bg-gradient-to-br ${league.bgGradient} border-2 border-${league.color} hover:scale-105 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Aura Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                  {/* Soft static glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-60"></div>
                  <Icon 
                    name={
                      league.id === 'legendary' ? 'Sword' : 
                      league.id === 'mythic' ? 'Zap' : 
                      league.id === 'immortal' ? 'Crown' : 
                      'Users'
                    } 
                    className="h-8 w-8 text-white drop-shadow-lg relative z-10 transition-all duration-500" 
                  />
                </div>
                <CardTitle className="text-xl font-heading font-bold text-white drop-shadow-lg">
                  {league.name}
                </CardTitle>
                <p className="text-white/90 text-sm">{league.description}</p>
              </CardHeader>
              
              <CardContent className="text-center space-y-3 relative z-10">
                <div className="space-y-2 text-sm">
                  <div className="text-white/90">
                    <span className="font-semibold">Минимальный ранг:</span>
                    <div className="text-white font-bold">{league.minRank}</div>
                  </div>
                  <div className="text-white/90">
                    <span className="font-semibold">Максимальный приз:</span>
                    <div className="text-white font-bold text-lg">{league.maxPrize}</div>
                  </div>
                  <div className="text-white/80 text-xs">
                    <span className="font-medium">Продвижение:</span>
                    <div className="text-white/90">{league.promotion}</div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => alert(`Регистрация в лигу "${league.name}" откроется скоро! Следите за новостями в наших соцсетях.`)}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
                  variant="outline"
                >
                  {league.id === 'solo' ? 'Найти команду' : 'Присоединиться'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* League Progression Info */}
        <div className="mt-12 text-center">
          <div className="bg-mlDark/50 backdrop-blur-sm rounded-lg p-6 border border-mlPurple/30">
            <h4 className="text-xl font-heading font-bold text-white mb-4">
              <Icon name="TrendingUp" className="inline mr-2 h-5 w-5 text-mlGold" />
              Система продвижения по лигам
            </h4>
            <div className="grid gap-4 md:grid-cols-3 text-sm text-gray-300">
              <div className="space-y-2">
                <div className="font-semibold text-legendary">Легендарная → Мифическая</div>
                <div>Команды, занявшие 1-2 места в регулярном сезоне</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-mythic">Мифическая → Бессмертная</div>
                <div>Только лучшие из лучших попадают в высшую лигу</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-purple-300">Solo Leveling</div>
                <div>Система автоматически создает команды из 5 случайных игроков</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}