import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { IconTrendingUp, IconTrophy, IconMedal, IconStar } from "@tabler/icons-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"

export default function LeaderboardPage() {
  return (
    <div id="leaderboard" className="leaderboard container mx-auto px-4 py-8 justify-center items-center">
        <div className="text-center mb-8 max-h-60 flex justify-between items-center p-4 border-b pb-9">
            <div className="flex justify-center space-x-4 flex-col text-left max-w-3xl">
                <h3 className="text-2xl font-bold">Jemson</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="justify-end">
                <Button className="mr-2">
                    Edit Profile
                </Button>
                <Button className="mr-2">
                    View Profile
                </Button>
                <Button>
                    View Team
                </Button>
            </div>
        </div>
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Acude Leaderboard</h1>
            <p className="text-lg text-muted-foreground">
            Compete, Learn, and Rise to the Top!
            </p>
        </div>
        <Tabs defaultValue="user">
        <TabsList className="flex justify-center">
            <TabsTrigger value="user">Single</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Total Players</CardTitle>
                <CardDescription>Active participants</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">2,345</div>
                <div className="flex items-center mt-2 text-green-600">
                <IconTrendingUp className="w-4 h-4 mr-1" />
                <span className="text-sm">+12% this month</span>
                </div>
            </CardContent>
            </Card>

            <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Points Earned</CardTitle>
                <CardDescription>Total community points</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">1.2M</div>
                <div className="text-sm text-muted-foreground mt-2">
                This week: 45,678
                </div>
            </CardContent>
            </Card>

            <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Challenges</CardTitle>
                <CardDescription>Active challenges</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">156</div>
                <div className="text-sm text-muted-foreground mt-2">
                Completed: 1,234
                </div>
            </CardContent>
            </Card>

            <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Top Prize</CardTitle>
                <CardDescription>Current reward pool</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">$5,000</div>
                <div className="text-sm text-muted-foreground mt-2">
                Next draw: 5 days
                </div>
            </CardContent>
            </Card>
        </div>

        <Card className="w-full">
            <CardHeader>
            <CardTitle className="text-2xl">Top Performers</CardTitle>
            <CardDescription>This Month's Leaders</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
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
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
            </CardContent>
        </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    )
}

const topPlayers = [
  { name: "Jemson", points: 99999, level: 75, achievements: 5 },
  
]