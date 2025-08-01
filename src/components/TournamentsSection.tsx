import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const leagues = [
  {
    id: 'legendary',
    name: 'Легендарная Лига',
    color: 'legendary',
    bgGradient: 'from-red-600 via-red-500 to-yellow-500',
    description: 'Стартовая лига для всех команд',
    minRank: 'Grandmaster V',
    maxPrize: '₽250,000'
  },
  {
    id: 'mythic',
    name: 'Мифическая Лига',
    color: 'mythic',
    bgGradient: 'from-cyan-400 via-cyan-500 to-yellow-400',
    description: 'Элитная лига для лучших команд',
    minRank: 'Mythic V',
    maxPrize: '₽500,000'
  },
  {
    id: 'immortal',
    name: 'Бессмертная Лига',
    color: 'immortal',
    bgGradient: 'from-purple-600 via-purple-500 to-yellow-500',
    description: 'Высшая лига для чемпионов',
    minRank: 'Mythic Glory',
    maxPrize: '₽1,000,000'
  },
  {
    id: 'solo',
    name: 'Solo Leveling',
    color: 'soloLeveling',
    bgGradient: 'from-black via-purple-900 to-purple-600',
    description: 'Для одиночных игроков',
    minRank: 'Epic I',
    maxPrize: '₽100,000'
  }
];

const tournaments = {
  legendary: [
    {
      id: 1,
      name: "Восхождение Легенд",
      status: "live",
      prize: "₽200,000",
      teams: 32,
      viewers: "15.2K",
      date: "15 Августа",
      stream: "https://twitch.tv/mobilelegends",
      progress: 45,
      league: 'legendary'
    },
    {
      id: 2,
      name: "Битва Чемпионов",
      status: "registration",
      prize: "₽250,000",
      teams: 24,
      viewers: "—",
      date: "25 Августа",
      stream: null,
      progress: 15,
      league: 'legendary'
    }
  ],
  mythic: [
    {
      id: 3,
      name: "Мифическое Господство",
      status: "live",
      prize: "₽500,000",
      teams: 16,
      viewers: "32.8K",
      date: "15 Августа",
      stream: "https://twitch.tv/mobilelegends",
      progress: 75,
      league: 'mythic'
    },
    {
      id: 4,
      name: "Турнир Избранных",
      status: "upcoming",
      prize: "₽400,000",
      teams: 12,
      viewers: "—",
      date: "30 Августа",
      stream: null,
      progress: 0,
      league: 'mythic'
    }
  ],
  immortal: [
    {
      id: 5,
      name: "Бессмертные Войны",
      status: "live",
      prize: "₽1,000,000",
      teams: 8,
      viewers: "75.5K",
      date: "15 Августа",
      stream: "https://twitch.tv/mobilelegends",
      progress: 85,
      league: 'immortal'
    },
    {
      id: 6,
      name: "Трон Чемпионов",
      status: "registration",
      prize: "₽800,000",
      teams: 6,
      viewers: "—",
      date: "1 Сентября",
      stream: null,
      progress: 5,
      league: 'immortal'
    }
  ],
  solo: [
    {
      id: 7,
      name: "Solo Masters Cup",
      status: "live",
      prize: "₽75,000",
      teams: 64,
      viewers: "8.3K",
      date: "15 Августа",
      stream: "https://twitch.tv/mobilelegends",
      progress: 30,
      league: 'solo'
    },
    {
      id: 8,
      name: "Рандом Турнир",
      status: "upcoming",
      prize: "₽100,000",
      teams: 80,
      viewers: "—",
      date: "22 Августа",
      stream: null,
      progress: 0,
      league: 'solo'
    }
  ]
};

const matches = [
  { id: 1, team1: "Immortal Phoenix", team2: "Divine Dragons", time: "14:00", status: "live", league: "immortal" },
  { id: 2, team1: "Mythic Wolves", team2: "Celestial Tigers", time: "16:00", status: "upcoming", league: "mythic" },
  { id: 3, team1: "Legend Eagles", team2: "Golden Lions", time: "18:00", status: "upcoming", league: "legendary" },
  { id: 4, team1: "Random Team Alpha", team2: "Auto Squad Beta", time: "20:00", status: "upcoming", league: "solo" }
];

const rules = [
  "Участники должны соответствовать минимальному рангу лиги",
  "Команды состоят из 5 основных игроков + 2 запасных",
  "Турниры проводятся в формате Double Elimination",
  "Переход между лигами возможен по результатам сезона"
];

export default function TournamentsSection() {
  return (
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
                  name={
                    league.id === 'legendary' ? 'Sword' : 
                    league.id === 'mythic' ? 'Zap' : 
                    league.id === 'immortal' ? 'Crown' : 
                    'Users'
                  } 
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
  );
}