import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IconEdit, IconUsersGroup } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconTrendingUp, IconTrophy, IconMedal, IconStar, IconShield, IconSword, IconTarget, IconFlame, IconCrown, IconBolt, IconDiamond } from "@tabler/icons-react"

const topPlayers = [
  { name: "Jemson", points: 99999, level: 75, achievements: 5 },
  { name: "Ryann Kim Sesgundo", points: 95400, level: 72, achievements: 4 },
  { name: "Khian", points: 92300, level: 70, achievements: 4 },
 
]

const topTeams = [
  { name: "Code Warriors", members: 12, points: 458900, level: 89, achievements: 15 },
  { name: "Digital Nomads", members: 8, points: 423100, level: 85, achievements: 12 },
  { name: "Tech Titans", members: 15, points: 398750, level: 82, achievements: 11 },
  { name: "Cyber Phoenixes", members: 10, points: 367200, level: 78, achievements: 10 },
  { name: "Binary Beasts", members: 7, points: 341800, level: 75, achievements: 9 },
]

const badges = [
  { name: "First Achievement", icon: IconSword, description: "Complete first challenge", earned: true, rarity: "Bronze" },
  { name: "Expert Level", icon: IconCrown, description: "Reach level 50", earned: true, rarity: "Gold" },
  { name: "Precision Master", icon: IconTarget, description: "Achieve 95% accuracy", earned: true, rarity: "Silver" },
  { name: "Team Leader", icon: IconUsersGroup, description: "Lead 25 team projects", earned: true, rarity: "Bronze" },
  { name: "Performance Elite", icon: IconFlame, description: "Top 10 streak", earned: true, rarity: "Platinum" },
  { name: "Speed Expert", icon: IconBolt, description: "Complete under time limit", earned: false, rarity: "Silver" },
  { name: "Mentor", icon: IconShield, description: "Guide 50 team members", earned: false, rarity: "Bronze" },
  { name: "Perfectionist", icon: IconDiamond, description: "Perfect score achieved", earned: false, rarity: "Gold" },
]

const getRarityColor = (rarity) => {
  switch (rarity) {
    case "Bronze": return "bg-amber-600"
    case "Silver": return "bg-slate-400"
    case "Gold": return "bg-yellow-500"
    case "Platinum": return "bg-purple-600"
    default: return "bg-slate-400"
  }
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-1 flex-col gap-6">
          <div className="relative">
            <div className="h-48 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white text-sm font-medium">Active</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end absolute bottom-0 left-0 right-0 p-6 transform translate-y-1/2 bg-gradient-to-t from-slate-50 to-transparent">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-white shadow-xl">
                  <AvatarImage src="/avatars/jemson.png" alt="Jemson" />
                  <AvatarFallback className="bg-slate-700 text-white text-xl font-semibold">JM</AvatarFallback>
                </Avatar>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <IconCrown className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white">Jemson</h2>
                  <p className="text-slate-600 font-medium">Senior Developer</p>
                </div>
                <div className="mt-2">
                  <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
                    <IconUsersGroup className="w-4 h-4 mr-2" />
                    Code Warriors
                  </Badge>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                  <IconEdit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-100">
                  <IconUsersGroup className="w-4 h-4 mr-2" />
                  Join Team
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <Card className="shadow-md border-slate-200">
              <CardHeader className="space-y-1 pb-3">
                <CardTitle className="text-2xl text-slate-900">Your Rank</CardTitle>
                <CardDescription className="text-slate-600">Global Position</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900 mb-2">#1</div>
                <div className="flex items-center text-green-600">
                  <IconTrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Top 1%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-slate-200">
              <CardHeader className="space-y-1 pb-3">
                <CardTitle className="text-2xl text-slate-900">Points</CardTitle>
                <CardDescription className="text-slate-600">Total Earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900 mb-2">99,999</div>
                <div className="text-sm text-slate-600">
                  This week: <span className="text-green-600 font-medium">+1,234</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-slate-200">
              <CardHeader className="space-y-1 pb-3">
                <CardTitle className="text-2xl text-slate-900">Level</CardTitle>
                <CardDescription className="text-slate-600">Current Progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900 mb-2">75</div>
                <div className="text-sm text-slate-600">
                  Next level: <span className="text-slate-900 font-medium">2,000 points</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-slate-200">
              <CardHeader className="space-y-1 pb-3">
                <CardTitle className="text-2xl text-slate-900">Achievements</CardTitle>
                <CardDescription className="text-slate-600">Unlocked</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900 mb-2">5</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
                <IconShield className="w-6 h-6 text-slate-700" />
                Achievement Badges
              </CardTitle>
              <CardDescription className="text-slate-600">
                Professional milestones and accomplishments • {badges.filter(b => b.earned).length}/{badges.length} earned
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {badges.map((badge, index) => {
                  const Icon = badge.icon
                  return (
                    <div
                      key={index}
                      className={`relative p-4 rounded-lg border transition-all duration-200 ${
                        badge.earned 
                          ? 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md' 
                          : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className={`relative p-3 rounded-full ${badge.earned ? 'bg-slate-100' : 'bg-slate-200'}`}>
                          <Icon className={`w-5 h-5 ${badge.earned ? 'text-slate-700' : 'text-slate-400'}`} />
                          {badge.earned && (
                            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getRarityColor(badge.rarity)}`}></div>
                          )}
                        </div>
                        <div>
                          <h4 className={`font-semibold text-sm ${badge.earned ? 'text-slate-900' : 'text-slate-500'}`}>
                            {badge.name}
                          </h4>
                          <p className={`text-xs mt-1 ${badge.earned ? 'text-slate-600' : 'text-slate-400'}`}>
                            {badge.description}
                          </p>
                          <Badge 
                            variant="outline" 
                            className={`mt-2 text-xs ${
                              badge.earned 
                                ? 'border-slate-300 text-slate-700 bg-white' 
                                : 'border-slate-200 text-slate-400 bg-slate-50'
                            }`}
                          >
                            {badge.rarity}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
                <IconTrophy className="w-6 h-6 text-slate-700" />
                Leaderboard
              </CardTitle>
              <CardDescription className="text-slate-600">Top performers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="players" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-100">
                  <TabsTrigger value="players" className="text-slate-700 data-[state=active]:bg-white data-[state=active]:text-slate-900">
                    Individual Players
                  </TabsTrigger>
                  <TabsTrigger value="teams" className="text-slate-700 data-[state=active]:bg-white data-[state=active]:text-slate-900">
                    Teams
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="players" className="mt-6">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-slate-700">Rank</th>
                          <th scope="col" className="px-6 py-3 text-slate-700">Player</th>
                          <th scope="col" className="px-6 py-3 text-slate-700">Points</th>
                          <th scope="col" className="px-6 py-3 text-slate-700">Level</th>
                          <th scope="col" className="px-6 py-3 text-slate-700">Achievements</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topPlayers.map((player, index) => (
                          <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              {index === 0 ? <IconTrophy className="w-5 h-5 text-yellow-500" /> :
                               index === 1 ? <IconMedal className="w-5 h-5 text-slate-400" /> :
                               index === 2 ? <IconMedal className="w-5 h-5 text-amber-600" /> :
                               <span className="text-slate-600 font-medium">#{index + 1}</span>}
                            </td>
                            <td className="px-6 py-4 font-medium text-slate-900">{player.name}</td>
                            <td className="px-6 py-4 text-slate-700 font-medium">{player.points.toLocaleString()}</td>
                            <td className="px-6 py-4">
                              <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
                                Level {player.level}
                              </Badge>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex gap-1">
                                {[...Array(player.achievements)].map((_, i) => (
                                  <IconStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="teams" className="mt-6">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-slate-700">Rank</th>
                          <th scope="col" className="px-6 py-3 text-slate-700">Team</th>
                          <th scope="col" className="px-6 py-3 text-slate-700">Members</th>
                          <th scope="col" className="px-6 py-3 text-slate-700">Points</th>
                          <th scope="col" className="px-6 py-3 text-slate-700">Level</th>
                          <th scope="col" className="px-6 py-3 text-slate-700">Achievements</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topTeams.map((team, index) => (
                          <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              {index === 0 ? <IconTrophy className="w-5 h-5 text-yellow-500" /> :
                               index === 1 ? <IconMedal className="w-5 h-5 text-slate-400" /> :
                               index === 2 ? <IconMedal className="w-5 h-5 text-amber-600" /> :
                               <span className="text-slate-600 font-medium">#{index + 1}</span>}
                            </td>
                            <td className="px-6 py-4 font-medium text-slate-900">{team.name}</td>
                            <td className="px-6 py-4">
                              <Badge variant="outline" className="border-slate-300 text-slate-700">
                                {team.members} members
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-slate-700 font-medium">{team.points.toLocaleString()}</td>
                            <td className="px-6 py-4">
                              <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
                                Level {team.level}
                              </Badge>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex gap-1 items-center">
                                {[...Array(Math.min(team.achievements, 5))].map((_, i) => (
                                  <IconStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                                {team.achievements > 5 && (
                                  <span className="text-xs text-slate-500 ml-1 font-medium">
                                    +{team.achievements - 5}
                                  </span>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}