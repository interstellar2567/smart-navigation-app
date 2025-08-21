"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Trophy, Camera, Users, ArrowLeft, Zap, Star, MapPin, ThumbsUp, MessageCircle, TrendingUp } from "lucide-react"

export default function CommunityPage() {
  const [userPoints] = useState(1247)
  const [userRank] = useState(23)
  const [userLevel] = useState(7)
  const [showReportForm, setShowReportForm] = useState(false)
  const [reportType, setReportType] = useState("")

  const recentReports = [
    {
      id: 1,
      user: "SafeDriver23",
      type: "pothole",
      location: "Main St & 3rd Ave",
      time: "2 hours ago",
      points: 50,
      likes: 12,
      comments: 3,
      status: "verified",
    },
    {
      id: 2,
      user: "CityWatcher",
      type: "traffic_light",
      location: "Oak Street Bridge",
      time: "4 hours ago",
      points: 75,
      likes: 8,
      comments: 1,
      status: "pending",
    },
    {
      id: 3,
      user: "CommunityCare",
      type: "road_hazard",
      location: "Highway 101 North",
      time: "6 hours ago",
      points: 100,
      likes: 24,
      comments: 7,
      status: "resolved",
    },
  ]

  const leaderboard = [
    { rank: 1, user: "SafetyFirst", points: 3420, level: 12, badge: "🏆" },
    { rank: 2, user: "RoadGuardian", points: 2890, level: 11, badge: "🥈" },
    { rank: 3, user: "CityHelper", points: 2650, level: 10, badge: "🥉" },
    { rank: 23, user: "You", points: userPoints, level: userLevel, badge: "⭐" },
  ]

  const reportTypes = [
    { type: "pothole", label: "Pothole", points: 50, icon: "🕳️" },
    { type: "traffic_light", label: "Traffic Light Issue", points: 75, icon: "🚦" },
    { type: "road_hazard", label: "Road Hazard", points: 100, icon: "⚠️" },
    { type: "parking", label: "Parking Issue", points: 25, icon: "🚗" },
    { type: "construction", label: "Construction Alert", points: 40, icon: "🚧" },
    { type: "other", label: "Other Issue", points: 30, icon: "📝" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Community Hub</h1>
              <p className="text-sm text-muted-foreground">Gamified Safety Reporting</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* User Stats */}
        <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Your Impact</h2>
                <p className="text-muted-foreground">Making the community safer, one report at a time</p>
              </div>
              <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">Level {userLevel}</Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">{userPoints}</p>
                <p className="text-sm text-muted-foreground">Total Points</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">#{userRank}</p>
                <p className="text-sm text-muted-foreground">Community Rank</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">23</p>
                <p className="text-sm text-muted-foreground">Reports This Month</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">89%</p>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progress to Level {userLevel + 1}</span>
                <span className="font-medium text-foreground">320 pts needed</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-secondary h-3 rounded-full" style={{ width: "68%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Report Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-accent" />
              Report an Issue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!showReportForm ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {reportTypes.map((type) => (
                  <Button
                    key={type.type}
                    variant="outline"
                    className="h-20 gap-2 bg-transparent flex-col"
                    onClick={() => {
                      setReportType(type.type)
                      setShowReportForm(true)
                    }}
                  >
                    <span className="text-2xl">{type.icon}</span>
                    <div className="text-center">
                      <p className="text-xs font-medium">{type.label}</p>
                      <p className="text-xs text-muted-foreground">+{type.points} pts</p>
                    </div>
                  </Button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-foreground">
                    Report: {reportTypes.find((t) => t.type === reportType)?.label}
                  </h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowReportForm(false)}>
                    Cancel
                  </Button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-foreground">Location</label>
                    <Input placeholder="Enter location or use current location" className="bg-background" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Description</label>
                    <Textarea placeholder="Describe the issue in detail..." className="bg-background" rows={3} />
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 gap-2">
                      <Camera className="w-4 h-4" />
                      Add Photo
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2 bg-transparent">
                      <MapPin className="w-4 h-4" />
                      Use GPS
                    </Button>
                  </div>

                  <Button className="w-full gap-2">
                    <Zap className="w-4 h-4" />
                    Submit Report (+{reportTypes.find((t) => t.type === reportType)?.points} pts)
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Community Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Community Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{report.user}</p>
                        <p className="text-xs text-muted-foreground">{report.time}</p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        report.status === "verified"
                          ? "default"
                          : report.status === "resolved"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {report.status}
                    </Badge>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-foreground mb-1">
                      Reported: <span className="capitalize">{report.type.replace("_", " ")}</span>
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {report.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                        <ThumbsUp className="w-4 h-4" />
                        {report.likes}
                      </button>
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                        <MessageCircle className="w-4 h-4" />
                        {report.comments}
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-secondary">
                      <Star className="w-4 h-4" />+{report.points} pts
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Community Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    user.user === "You" ? "bg-primary/5 border border-primary/20" : "bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm">{user.badge}</span>
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${user.user === "You" ? "text-primary" : "text-foreground"}`}>
                        {user.user}
                      </p>
                      <p className="text-xs text-muted-foreground">Level {user.level}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">#{user.rank}</p>
                    <p className="text-xs text-muted-foreground">{user.points} pts</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
