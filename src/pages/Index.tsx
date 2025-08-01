import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
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

const tournaments = {
  bronze: [
    {
      id: 1,
      name: "Кубок Новичков",
      status: "registration",
      prize: "₽25,000",
      teams: 32,
      viewers: "—",
      date: "20 Августа",
      stream: null,
      progress: 20,
      league: 'bronze'
    },
    {
      id: 2,
      name: "Турнир Воинов",
      status: "upcoming",
      prize: "₽50,000",
      teams: 16,
      viewers: "2.1K",
      date: "25 Августа",
      stream: null,
      progress: 0,
      league: 'bronze'
    }
  ],
  silver: [
    {
      id: 3,
      name: "Серебряный Штурм",
      status: "live",
      prize: "₽100,000",
      teams: 24,
      viewers: "8.5K",
      date: "15 Августа",
      stream: "https://twitch.tv/mobilelegends",
      progress: 65,
      league: 'silver'
    },
    {
      id: 4,
      name: "Элитный Чемпионат",
      status: "upcoming",
      prize: "₽150,000",
      teams: 16,
      viewers: "—",
      date: "30 Августа",
      stream: null,
      progress: 0,
      league: 'silver'
    }
  ],
  gold: [
    {
      id: 5,
      name: "Кубок Легенд 2024",
      status: "live",
      prize: "₽500,000",
      teams: 16,
      viewers: "25.3K",
      date: "15 Августа",
      stream: "https://twitch.tv/mobilelegends",
      progress: 75,
      league: 'gold'
    },
    {
      id: 6,
      name: "Мифический Турнир",
      status: "registration",
      prize: "₽300,000",
      teams: 12,
      viewers: "—",
      date: "1 Сентября",
      stream: null,
      progress: 10,
      league: 'gold'
    }
  ]
};

const matches = [
  { id: 1, team1: "Phoenix Elite", team2: "Dragons Pro", time: "14:00", status: "live", league: "gold" },
  { id: 2, team1: "Silver Wolves", team2: "Steel Tigers", time: "16:00", status: "upcoming", league: "silver" },
  { id: 3, team1: "Bronze Eagles", team2: "Copper Lions", time: "18:00", status: "upcoming", league: "bronze" }
];

const rules = [
  "Участники должны соответствовать минимальному рангу лиги",
  "Команды состоят из 5 основных игроков + 2 запасных",
  "Турниры проводятся в формате Double Elimination",
  "Переход между лигами возможен по результатам сезона"
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mlDark via-black to-mlBlack">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Leagues Section */}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="tournaments" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-mlDark/50 backdrop-blur border border-mlPurple/30">
            <TabsTrigger value="tournaments" className="data-[state=active]:bg-mlPurple data-[state=active]:text-white">
              <Icon name="Trophy" className="mr-2 h-4 w-4" />
              Турниры
            </TabsTrigger>
            <TabsTrigger value="matches" className="data-[state=active]:bg-mlPurple data-[state=active]:text-white">
              <Icon name="Zap" className="mr-2 h-4 w-4" />
              Матчи
            </TabsTrigger>
            <TabsTrigger value="rules" className="data-[state=active]:bg-mlPurple data-[state=active]:text-white">
              <Icon name="Book" className="mr-2 h-4 w-4" />
              Правила
            </TabsTrigger>
            <TabsTrigger value="streams" className="data-[state=active]:bg-mlPurple data-[state=active]:text-white">
              <Icon name="Video" className="mr-2 h-4 w-4" />
              Стримы
            </TabsTrigger>
          </TabsList>

          {/* Tournaments Tab */}
          <TabsContent value="tournaments" className="space-y-8 animate-fade-in">
            {leagues.map((league) => (
              <div key={league.id} className="space-y-4">
                <h4 className="text-2xl font-heading font-bold text-white flex items-center">
                  <Icon 
                    name={league.id === 'bronze' ? 'Award' : league.id === 'silver' ? 'Medal' : 'Crown'} 
                    className={`mr-3 h-6 w-6 text-${league.color}`} 
                  />
                  {league.name}
                </h4>
                <div className="grid gap-6 md:grid-cols-2">
                  {tournaments[league.id as keyof typeof tournaments].map((tournament) => (
                    <Card key={tournament.id} className={`bg-gradient-to-br from-mlDark/80 to-black/80 border-${league.color}/50 hover:border-${league.color} transition-all duration-300 hover:scale-105`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white font-heading">{tournament.name}</CardTitle>
                          <Badge 
                            className={`${
                              tournament.status === 'live' 
                                ? 'bg-red-500 animate-pulse' 
                                : tournament.status === 'upcoming'
                                ? 'bg-mlPurple'
                                : 'bg-mlGold text-black'
                            } text-white`}
                          >
                            {tournament.status === 'live' ? 'В эфире' : 
                             tournament.status === 'upcoming' ? 'Скоро' : 'Регистрация'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 flex items-center">
                              <Icon name="DollarSign" className="mr-1 h-4 w-4 text-mlGold" />
                              Призовой фонд:
                            </span>
                            <span className="text-mlGold font-bold text-lg">{tournament.prize}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 flex items-center">
                              <Icon name="Users" className="mr-1 h-4 w-4 text-mlPurple" />
                              Команд:
                            </span>
                            <span className="text-mlPurple font-semibold">{tournament.teams}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 flex items-center">
                              <Icon name="Calendar" className="mr-1 h-4 w-4 text-white" />
                              Дата:
                            </span>
                            <span className="text-white font-semibold">{tournament.date}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 flex items-center">
                              <Icon name="Eye" className="mr-1 h-4 w-4 text-green-400" />
                              Зрители:
                            </span>
                            <span className="text-green-400 font-semibold">{tournament.viewers}</span>
                          </div>
                        </div>
                        
                        {tournament.progress > 0 && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm text-gray-300">
                              <span>Прогресс турнира</span>
                              <span>{tournament.progress}%</span>
                            </div>
                            <Progress value={tournament.progress} className="h-2" />
                          </div>
                        )}

                        <div className="flex gap-2">
                          {tournament.stream && (
                            <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                              <Icon name="Video" className="mr-2 h-4 w-4" />
                              Twitch
                            </Button>
                          )}
                          <Button variant="outline" className={`flex-1 border-${league.color} text-${league.color} hover:bg-${league.color} hover:text-${league.id === 'gold' ? 'black' : 'white'}`}>
                            Подробнее
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Расписание матчей по лигам</h3>
            <div className="space-y-4">
              {matches.map((match) => {
                const matchLeague = leagues.find(l => l.id === match.league);
                return (
                  <Card key={match.id} className={`bg-gradient-to-r from-mlDark/80 to-black/80 border-${matchLeague?.color}/50`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                          <div className="text-center">
                            <div className="text-lg font-semibold text-white">{match.team1}</div>
                            <div className="text-sm text-gray-400">Команда</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-mlGold">VS</div>
                            <div className="text-sm text-gray-400">{match.time}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-white">{match.team2}</div>
                            <div className="text-sm text-gray-400">Команда</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={`bg-${matchLeague?.color} text-${matchLeague?.id === 'gold' ? 'black' : 'white'}`}>
                            {matchLeague?.name}
                          </Badge>
                          <Badge className={match.status === 'live' ? 'bg-red-500 animate-pulse' : 'bg-mlPurple'}>
                            {match.status === 'live' ? 'LIVE' : 'Скоро'}
                          </Badge>
                          {match.status === 'live' && (
                            <Button className="bg-purple-600 hover:bg-purple-700">
                              <Icon name="Video" className="mr-2 h-4 w-4" />
                              Смотреть
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Rules Tab */}
          <TabsContent value="rules" className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Правила лиг и турниров</h3>
            <Card className="bg-gradient-to-br from-mlDark/80 to-black/80 border-mlPurple/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {rules.map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-mlPurple to-mlGold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-gray-300">{rule}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Streams Tab */}
          <TabsContent value="streams" className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Прямые трансляции</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-gradient-to-br from-purple-900/80 to-purple-800/80 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Video" className="mr-2 text-purple-400" />
                    Twitch трансляции
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Кубок Легенд - Финал</span>
                      <Badge className="bg-gold text-black font-semibold">Золотая Лига</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-red-500 animate-pulse">LIVE</Badge>
                      <div className="text-sm text-gray-400">25,341 зрителя</div>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Смотреть на Twitch
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/80 to-red-800/80 border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Play" className="mr-2 text-red-400" />
                    YouTube трансляции
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Серебряный Штурм</span>
                      <Badge className="bg-silver text-black font-semibold">Серебряная Лига</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Скоро</Badge>
                      <div className="text-sm text-gray-400">Начало в 16:00</div>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Смотреть на YouTube
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
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
                  Telegram: @ml_leagues
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-mlGold text-mlGold hover:bg-mlGold hover:text-black">
                  <Icon name="MessageCircle" className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-mlPurple text-mlPurple hover:bg-mlPurple hover:text-white">
                  <Icon name="Video" className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4">О платформе</h4>
              <p className="text-gray-300 text-sm">
                Организуем турниры Mobile Legends по лигам - от новичков до профессионалов. 
                Каждый найдет свой уровень!
              </p>
            </div>
          </div>
          <div className="border-t border-mlPurple/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ML Лиги. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}