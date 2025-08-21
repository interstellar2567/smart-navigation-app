"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Mic,
  MicOff,
  ArrowLeft,
  Volume2,
  VolumeX,
  Settings,
  Zap,
  MessageSquare,
  Navigation,
  AlertTriangle,
} from "lucide-react"

export default function VoicePage() {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState([
    {
      command: "Navigate to Central Park",
      response: "Route calculated. 15 minutes via Main Street.",
      time: "2 min ago",
    },
    {
      command: "Report pothole on Oak Street",
      response: "Report submitted successfully. +50 points earned.",
      time: "5 min ago",
    },
    {
      command: "What's the traffic like?",
      response: "Light traffic on your usual routes. Good time to travel.",
      time: "8 min ago",
    },
  ])

  const voiceCommands = [
    {
      category: "Navigation",
      commands: [
        "Navigate to [destination]",
        "Find fastest route to [place]",
        "What's the traffic like?",
        "Avoid highways",
        "Find parking near [location]",
      ],
    },
    {
      category: "Reporting",
      commands: [
        "Report pothole",
        "Report accident",
        "Report traffic light issue",
        "Submit safety concern",
        "Quick report [issue type]",
      ],
    },
    {
      category: "Emergency",
      commands: ["Emergency SOS", "Call 911", "Share my location", "Contact emergency contact", "I need help"],
    },
    { category: "General", commands: ["Check my points", "What's my rank?", "Read notifications", "Settings", "Help"] },
  ]

  const toggleListening = () => {
    setIsListening(!isListening)
    if (!isListening) {
      setCurrentCommand("Listening...")
      // Simulate voice recognition
      setTimeout(() => {
        setCurrentCommand("Navigate to downtown")
        setTimeout(() => {
          setCurrentCommand("")
          setIsListening(false)
        }, 2000)
      }, 3000)
    } else {
      setCurrentCommand("")
    }
  }

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
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Mic className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Voice Control</h1>
              <p className="text-sm text-muted-foreground">Hands-Free Navigation & Reporting</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Voice Control Interface */}
        <Card className="border-accent/20 bg-accent/5">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="relative">
                <Button
                  size="lg"
                  variant={isListening ? "destructive" : "default"}
                  className={`w-24 h-24 rounded-full text-lg ${isListening ? "animate-pulse" : ""}`}
                  onClick={toggleListening}
                >
                  {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                </Button>
                {isListening && (
                  <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-accent animate-ping"></div>
                )}
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  {isListening ? "Listening..." : "Tap to Speak"}
                </h2>
                <p className="text-muted-foreground">
                  {isListening
                    ? "Say a command like 'Navigate to downtown' or 'Report pothole'"
                    : "Press and hold the microphone to give voice commands"}
                </p>
              </div>

              {currentCommand && (
                <div className="p-4 bg-background rounded-lg border border-accent/20">
                  <p className="text-sm text-muted-foreground mb-1">You said:</p>
                  <p className="font-medium text-foreground">{currentCommand}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Voice Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-secondary" />
              Voice Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="text-sm font-medium text-foreground">Voice Responses</p>
                <p className="text-xs text-muted-foreground">Hear audio feedback for commands</p>
              </div>
              <Button
                variant={voiceEnabled ? "default" : "outline"}
                size="sm"
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className="gap-2"
              >
                {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                {voiceEnabled ? "On" : "Off"}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 bg-muted rounded-lg text-center">
                <p className="text-sm font-medium text-foreground">Language</p>
                <p className="text-xs text-muted-foreground mt-1">English (US)</p>
              </div>
              <div className="p-3 bg-muted rounded-lg text-center">
                <p className="text-sm font-medium text-foreground">Wake Word</p>
                <p className="text-xs text-muted-foreground mt-1">"Hey SafeNav"</p>
              </div>
              <div className="p-3 bg-muted rounded-lg text-center">
                <p className="text-sm font-medium text-foreground">Sensitivity</p>
                <p className="text-xs text-muted-foreground mt-1">Medium</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Command History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Recent Commands
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {commandHistory.map((item, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-accent" />
                      <p className="text-sm font-medium text-foreground">{item.command}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  <div className="flex items-start gap-2 ml-6">
                    <Volume2 className="w-4 h-4 text-secondary mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Voice Commands Reference */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              Voice Commands
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {voiceCommands.map((category) => (
                <div key={category.category}>
                  <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    {category.category === "Navigation" && <Navigation className="w-4 h-4" />}
                    {category.category === "Reporting" && <AlertTriangle className="w-4 h-4" />}
                    {category.category === "Emergency" && <AlertTriangle className="w-4 h-4 text-destructive" />}
                    {category.category === "General" && <Settings className="w-4 h-4" />}
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.commands.map((command, index) => (
                      <div key={index} className="p-2 bg-muted/50 rounded text-sm text-muted-foreground font-mono">
                        "{command}"
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Voice Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="h-16 gap-2 bg-transparent flex-col">
                <Navigation className="w-5 h-5" />
                <span className="text-xs">Navigation</span>
              </Button>
              <Button variant="outline" className="h-16 gap-2 bg-transparent flex-col">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-xs">Report Issue</span>
              </Button>
              <Button variant="outline" className="h-16 gap-2 bg-transparent flex-col">
                <Volume2 className="w-5 h-5" />
                <span className="text-xs">Read Alerts</span>
              </Button>
              <Button variant="outline" className="h-16 gap-2 bg-transparent flex-col">
                <Settings className="w-5 h-5" />
                <span className="text-xs">Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
