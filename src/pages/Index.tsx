import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const tournaments = [
  {
    id: 1,
    name: "Кубок Легенд 2024",
    status: "live",
    prize: "₽500,000",
    teams: 16,
    viewers: "12.5K",
    date: "15 Августа",
    stream: "https://twitch.tv/mobilelegends",
    progress: 75
  },
  {
    id: 2,
    name: "Осенний Чемпионат",
    status: "upcoming",
    prize: "₽250,000",
    teams: 32,
    viewers: "—",
    date: "25 Августа",
    stream: null,
    progress: 0
  },
  {
    id: 3,
    name: "Зимний Турнир Pro",
    status: "registration",
    prize: "₽1,000,000",
    teams: 64,
    viewers: "—",
    date: "1 Декабря",
    stream: null,
    progress: 15
  }
];

const matches = [
  { id: 1, team1: "Phoenix", team2: "Dragons", time: "14:00", status: "live" },
  { id: 2, team1: "Wolves", team2: "Tigers", time: "16:00", status: "upcoming" },
  { id: 3, team1: "Eagles", team2: "Lions", time: "18:00", status: "upcoming" }
];

const rules = [
  "Все участники должны быть зарегистрированы в системе",
  "Команды состоят из 5 основных игроков + 2 запасных",
  "Турнир проводится в формате Single Elimination",
  "Использование читов строго запрещено"
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mlDark via-slate-900 to-mlDark">
      {/* Header */}
      <header className="border-b border-mlOrange/20 bg-mlDark/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Trophy" className="h-8 w-8 text-mlOrange" />
              <h1 className="text-2xl font-heading font-bold text-white">
                ML <span className="text-mlOrange">Турниры</span>
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#tournaments" className="text-white hover:text-mlOrange transition-colors">
                Турниры
              </a>
              <a href="#matches" className="text-white hover:text-mlOrange transition-colors">
                Матчи
              </a>
              <a href="#rules" className="text-white hover:text-mlOrange transition-colors">
                Правила
              </a>
              <Button className="bg-mlOrange hover:bg-mlOrange/90 text-white font-medium">
                Регистрация
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mlOrange/20 to-mlTurquoise/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/img/57d8e553-404f-4e91-86ef-a1ced6d90e4f.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              Турниры
              <span className="block text-mlOrange">Mobile Legends</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Самые захватывающие киберспортивные турниры для истинных поклонников игры.
              Участвуй, побеждай, получай призы!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-mlOrange hover:bg-mlOrange/90 text-white px-8 py-3 text-lg animate-pulse-glow">
                <Icon name="Users" className="mr-2" />
                Присоединиться к турниру
              </Button>
              <Button variant="outline" className="border-mlTurquoise text-mlTurquoise hover:bg-mlTurquoise hover:text-white px-8 py-3 text-lg">
                <Icon name="Play" className="mr-2" />
                Смотреть стримы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="tournaments" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-mlDark/50 backdrop-blur">
            <TabsTrigger value="tournaments" className="data-[state=active]:bg-mlOrange data-[state=active]:text-white">
              <Icon name="Trophy" className="mr-2 h-4 w-4" />
              Турниры
            </TabsTrigger>
            <TabsTrigger value="matches" className="data-[state=active]:bg-mlOrange data-[state=active]:text-white">
              <Icon name="Zap" className="mr-2 h-4 w-4" />
              Матчи
            </TabsTrigger>
            <TabsTrigger value="rules" className="data-[state=active]:bg-mlOrange data-[state=active]:text-white">
              <Icon name="Book" className="mr-2 h-4 w-4" />
              Правила
            </TabsTrigger>
            <TabsTrigger value="streams" className="data-[state=active]:bg-mlOrange data-[state=active]:text-white">
              <Icon name="Video" className="mr-2 h-4 w-4" />
              Стримы
            </TabsTrigger>
          </TabsList>

          {/* Tournaments Tab */}
          <TabsContent value="tournaments" className="space-y-6 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tournaments.map((tournament) => (
                <Card key={tournament.id} className="bg-gradient-to-br from-mlDark/80 to-slate-800/80 border-mlOrange/30 hover:border-mlOrange/60 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white font-heading">{tournament.name}</CardTitle>
                      <Badge 
                        className={`${
                          tournament.status === 'live' 
                            ? 'bg-red-500 animate-pulse' 
                            : tournament.status === 'upcoming'
                            ? 'bg-mlTurquoise'
                            : 'bg-mlOrange'
                        } text-white`}
                      >
                        {tournament.status === 'live' ? 'В эфире' : 
                         tournament.status === 'upcoming' ? 'Скоро' : 'Регистрация'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-gray-300">
                        <Icon name="DollarSign" className="inline mr-1 h-4 w-4 text-mlOrange" />
                        Призовой фонд: <span className="text-mlOrange font-semibold">{tournament.prize}</span>
                      </div>
                      <div className="text-gray-300">
                        <Icon name="Users" className="inline mr-1 h-4 w-4 text-mlTurquoise" />
                        Команд: <span className="text-mlTurquoise font-semibold">{tournament.teams}</span>
                      </div>
                      <div className="text-gray-300">
                        <Icon name="Calendar" className="inline mr-1 h-4 w-4 text-white" />
                        Дата: <span className="text-white font-semibold">{tournament.date}</span>
                      </div>
                      <div className="text-gray-300">
                        <Icon name="Eye" className="inline mr-1 h-4 w-4 text-green-400" />
                        Зрители: <span className="text-green-400 font-semibold">{tournament.viewers}</span>
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
                      <Button variant="outline" className="flex-1 border-mlOrange text-mlOrange hover:bg-mlOrange hover:text-white">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Расписание матчей</h3>
            <div className="space-y-4">
              {matches.map((match) => (
                <Card key={match.id} className="bg-gradient-to-r from-mlDark/80 to-slate-800/80 border-mlTurquoise/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-white">{match.team1}</div>
                          <div className="text-sm text-gray-400">Команда</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-mlOrange">VS</div>
                          <div className="text-sm text-gray-400">{match.time}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-white">{match.team2}</div>
                          <div className="text-sm text-gray-400">Команда</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={match.status === 'live' ? 'bg-red-500 animate-pulse' : 'bg-mlTurquoise'}>
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
              ))}
            </div>
          </TabsContent>

          {/* Rules Tab */}
          <TabsContent value="rules" className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Правила турниров</h3>
            <Card className="bg-gradient-to-br from-mlDark/80 to-slate-800/80 border-mlOrange/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {rules.map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-mlOrange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
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
                      <Badge className="bg-red-500 animate-pulse">LIVE</Badge>
                    </div>
                    <div className="text-sm text-gray-400">12,543 зрителя</div>
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
                      <span className="text-gray-300">Турнир Новичков</span>
                      <Badge variant="secondary">Скоро</Badge>
                    </div>
                    <div className="text-sm text-gray-400">Начало в 16:00</div>
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
      <footer className="bg-mlDark border-t border-mlOrange/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4">Связаться с нами</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Icon name="Mail" className="mr-2 h-4 w-4 text-mlOrange" />
                  support@mltournaments.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MessageCircle" className="mr-2 h-4 w-4 text-mlTurquoise" />
                  Telegram: @ml_tournaments
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-mlOrange text-mlOrange hover:bg-mlOrange hover:text-white">
                  <Icon name="MessageCircle" className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-mlTurquoise text-mlTurquoise hover:bg-mlTurquoise hover:text-white">
                  <Icon name="Video" className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4">О платформе</h4>
              <p className="text-gray-300 text-sm">
                Организуем и проводим турниры Mobile Legends: Bang Bang для истинных поклонников игры.
              </p>
            </div>
          </div>
          <div className="border-t border-mlOrange/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ML Турниры. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}