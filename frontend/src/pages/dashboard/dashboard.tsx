import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IconEdit, IconUsersGroup } from "@tabler/icons-react"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SiteHeader } from "@/components/dashboard/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconTrendingUp, IconTrophy, IconMedal, IconStar } from "@tabler/icons-react"

const topPlayers = [
  { name: "Jemson", points: 99999, level: 75, achievements: 5 },
  { name: "Alex Thompson", points: 95400, level: 72, achievements: 4 },
  { name: "Sarah Chen", points: 92300, level: 70, achievements: 4 },
  { name: "Mike Rodriguez", points: 88100, level: 68, achievements: 3 },
  { name: "Emma Davis", points: 85600, level: 65, achievements: 3 },
]

const topTeams = [
  { name: "Code Warriors", members: 12, points: 458900, level: 89, achievements: 15 },
  { name: "Digital Nomads", members: 8, points: 423100, level: 85, achievements: 12 },
  { name: "Tech Titans", members: 15, points: 398750, level: 82, achievements: 11 },
  { name: "Cyber Phoenixes", members: 10, points: 367200, level: 78, achievements: 10 },
  { name: "Binary Beasts", members: 7, points: 341800, level: 75, achievements: 9 },
]

export default function Dashboard() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-6 overflow-x-hidden">
          <div className="@container/main flex flex-1 flex-col gap-6">
            <div className="relative">
              <div className="h-48 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg" />
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-end absolute bottom-0 left-0 right-0 p-6 transform translate-y-1/2 bg-gradient-to-t from-background to-transparent">
                  <Avatar className="w-24 h-24 border-4 border-background">
                    <AvatarImage src="/avatars/jemson.png" alt="Jemson" />
                    <AvatarFallback>JM</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">Jemson</h3>
                    <p className="text-muted-foreground">Full Stack Developer | Gaming Enthusiast</p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="lg">
                      <IconEdit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    
                    <Button size="lg">
                      <IconUsersGroup className="w-4 h-4 mr-2" />
                      Join Team
                    </Button>
                  </div>
                </div>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Your Rank</CardTitle>
                  <CardDescription>Global Position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">#1</div>
                  <div className="flex items-center mt-2 text-green-600">
                    <IconTrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm">Top 1%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Points</CardTitle>
                  <CardDescription>Total Earned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">99,999</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    This week: +1,234
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Level</CardTitle>
                  <CardDescription>Current Progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">75</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Next level: 2,000 points
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Achievements</CardTitle>
                  <CardDescription>Unlocked</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5</div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} className="w-4 h-4 text-yellow-500" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Global Rankings</CardTitle>
                <CardDescription>Top performers this month</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="players" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="players">Individual Players</TabsTrigger>
                    <TabsTrigger value="teams">Teams</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="players" className="mt-6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs uppercase bg-muted/50">
                          <tr>
                            <th scope="col" className="px-6 py-3">Rank</th>
                            <th scope="col" className="px-6 py-3">Player</th>
                            <th scope="col" className="px-6 py-3">Points</th>
                            <th scope="col" className="px-6 py-3">Level</th>
                            <th scope="col" className="px-6 py-3">Achievements</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topPlayers.map((player, index) => (
                            <tr key={index} className="border-b">
                              <td className="px-6 py-4">
                                {index === 0 ? <IconTrophy className="w-6 h-6 text-yellow-500" /> :
                                 index === 1 ? <IconMedal className="w-6 h-6 text-gray-400" /> :
                                 index === 2 ? <IconMedal className="w-6 h-6 text-amber-600" /> :
                                 `#${index + 1}`}
                              </td>
                              <td className="px-6 py-4 font-medium">{player.name}</td>
                              <td className="px-6 py-4">{player.points.toLocaleString()}</td>
                              <td className="px-6 py-4">
                                <Badge variant="secondary">Level {player.level}</Badge>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex gap-1">
                                  {[...Array(player.achievements)].map((_, i) => (
                                    <IconStar key={i} className="w-4 h-4 text-yellow-500" />
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
                        <thead className="text-xs uppercase bg-muted/50">
                          <tr>
                            <th scope="col" className="px-6 py-3">Rank</th>
                            <th scope="col" className="px-6 py-3">Team</th>
                            <th scope="col" className="px-6 py-3">Members</th>
                            <th scope="col" className="px-6 py-3">Points</th>
                            <th scope="col" className="px-6 py-3">Level</th>
                            <th scope="col" className="px-6 py-3">Achievements</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topTeams.map((team, index) => (
                            <tr key={index} className="border-b">
                              <td className="px-6 py-4">
                                {index === 0 ? <IconTrophy className="w-6 h-6 text-yellow-500" /> :
                                 index === 1 ? <IconMedal className="w-6 h-6 text-gray-400" /> :
                                 index === 2 ? <IconMedal className="w-6 h-6 text-amber-600" /> :
                                 `#${index + 1}`}
                              </td>
                              <td className="px-6 py-4 font-medium">{team.name}</td>
                              <td className="px-6 py-4">
                                <Badge variant="outline">{team.members} members</Badge>
                              </td>
                              <td className="px-6 py-4">{team.points.toLocaleString()}</td>
                              <td className="px-6 py-4">
                                <Badge variant="secondary">Level {team.level}</Badge>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex gap-1">
                                  {[...Array(Math.min(team.achievements, 5))].map((_, i) => (
                                    <IconStar key={i} className="w-4 h-4 text-yellow-500" />
                                  ))}
                                  {team.achievements > 5 && (
                                    <span className="text-xs text-muted-foreground ml-1">
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
      </SidebarInset>
    </SidebarProvider>
  )
}