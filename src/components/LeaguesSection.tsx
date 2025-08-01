import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const leagues = [
  {
    id: 'bronze',
    name: 'Бронзовая Лига',
    color: 'bronze',
    bgGradient: 'from-amber-600 to-amber-800',
    description: 'Для начинающих игроков',
    minRank: 'Warrior III',
    maxPrize: '₽50,000'
  },
  {
    id: 'silver',
    name: 'Серебряная Лига',
    color: 'silver',
    bgGradient: 'from-gray-400 to-gray-600',
    description: 'Для опытных игроков',
    minRank: 'Elite III',
    maxPrize: '₽150,000'
  },
  {
    id: 'gold',
    name: 'Золотая Лига',
    color: 'gold',
    bgGradient: 'from-yellow-400 to-yellow-600',
    description: 'Для профессионалов',
    minRank: 'Legend III',
    maxPrize: '₽500,000'
  }
];

export default function LeaguesSection() {
  return (
    <section id="leagues" className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-heading font-bold text-white text-center mb-12">
          Выберите свою <span className="text-mlGold">лигу</span>
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {leagues.map((league) => (
            <Card key={league.id} className={`bg-gradient-to-br ${league.bgGradient} border-2 border-${league.color} hover:scale-105 transition-all duration-300 animate-fade-in`}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon 
                    name={league.id === 'bronze' ? 'Award' : league.id === 'silver' ? 'Medal' : 'Crown'} 
                    className={`h-8 w-8 text-white`} 
                  />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-white">
                  {league.name}
                </CardTitle>
                <p className="text-white/90">{league.description}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <div className="text-white/90">
                    <span className="font-semibold">Минимальный ранг:</span>
                    <div className="text-white font-bold">{league.minRank}</div>
                  </div>
                  <div className="text-white/90">
                    <span className="font-semibold">Максимальный приз:</span>
                    <div className="text-white font-bold text-xl">{league.maxPrize}</div>
                  </div>
                </div>
                <Button 
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
                  variant="outline"
                >
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}