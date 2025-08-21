"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { MapPin, Navigation, AlertTriangle, Clock, ArrowLeft, Route, Zap, TrendingUp } from "lucide-react"

export default function NavigationPage() {
  const [currentLocation] = useState("Downtown Plaza")
  const [destination, setDestination] = useState("")
  const [routeActive, setRouteActive] = useState(false)

  const trafficAlerts = [
    { id: 1, type: "heavy", location: "Main St & 5th Ave", delay: "15 min", severity: "high" },
    { id: 2, type: "accident", location: "Highway 101 North", delay: "8 min", severity: "medium" },
    { id: 3, type: "construction", location: "Oak Street Bridge", delay: "5 min", severity: "low" },
    { id: 4, type: "event", location: "Stadium District", delay: "12 min", severity: "high" },
  ]

  const routeOptions = [
    { name: "Fastest Route", time: "23 min", distance: "8.2 mi", traffic: "moderate", recommended: true },
    { name: "Scenic Route", time: "31 min", distance: "9.7 mi", traffic: "light", recommended: false },
    { name: "Highway Route", time: "28 min", distance: "7.8 mi", traffic: "heavy", recommended: false },
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
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Navigation className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Smart Navigation</h1>
              <p className="text-sm text-muted-foreground">AI-Powered Route Optimization</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Navigation Input */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Route Planning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">From</label>
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{currentLocation}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">To</label>
                <Input
                  placeholder="Enter destination..."
                  className="bg-background"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            <Button className="w-full gap-2" onClick={() => setRouteActive(true)} disabled={!destination}>
              <Navigation className="w-4 h-4" />
              Find Optimal Route
            </Button>

            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-primary" />
                <p className="text-sm text-primary font-medium">Custom Algorithm Active</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Using advanced route optimization beyond standard mapping services
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Route Options */}
        {routeActive && destination && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Route className="w-5 h-5 text-accent" />
                Route Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {routeOptions.map((route, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    route.recommended
                      ? "border-primary bg-primary/5 hover:bg-primary/10"
                      : "border-border bg-card hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-foreground">{route.name}</h3>
                      {route.recommended && <Badge className="bg-primary text-primary-foreground">Recommended</Badge>}
                    </div>
                    <Button size="sm" variant={route.recommended ? "default" : "outline"}>
                      Select Route
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{route.time}</span>
                    <span>•</span>
                    <span>{route.distance}</span>
                    <span>•</span>
                    <span
                      className={`capitalize ${
                        route.traffic === "light"
                          ? "text-green-600"
                          : route.traffic === "moderate"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {route.traffic} traffic
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Live Traffic Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Live Traffic Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {trafficAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle
                      className={`w-4 h-4 ${
                        alert.severity === "high"
                          ? "text-destructive"
                          : alert.severity === "medium"
                            ? "text-accent"
                            : "text-secondary"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">{alert.location}</p>
                      <p className="text-xs text-muted-foreground capitalize">{alert.type}</p>
                    </div>
                  </div>
                  <Badge variant={alert.severity === "high" ? "destructive" : "secondary"}>+{alert.delay}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Predictions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              Traffic Predictions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-medium text-green-800 dark:text-green-200 mb-1">Next Hour</h3>
                <p className="text-sm text-green-600 dark:text-green-300">Light traffic expected</p>
                <p className="text-xs text-green-500 dark:text-green-400 mt-1">Best time to travel</p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">2-4 PM</h3>
                <p className="text-sm text-yellow-600 dark:text-yellow-300">Moderate congestion</p>
                <p className="text-xs text-yellow-500 dark:text-yellow-400 mt-1">+10-15 min delays</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-medium text-red-800 dark:text-red-200 mb-1">5-7 PM</h3>
                <p className="text-sm text-red-600 dark:text-red-300">Heavy rush hour</p>
                <p className="text-xs text-red-500 dark:text-red-400 mt-1">Avoid if possible</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
