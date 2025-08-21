"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Shield,
  Phone,
  AlertTriangle,
  Users,
  MapPin,
  ArrowLeft,
  Heart,
  Flame,
  Car,
  UserCheck,
  Clock,
} from "lucide-react"

export default function EmergencyPage() {
  const [emergencyActive, setEmergencyActive] = useState(false)
  const [selectedEmergency, setSelectedEmergency] = useState("")

  const emergencyTypes = [
    { type: "medical", icon: Heart, label: "Medical Emergency", color: "text-red-600", number: "911" },
    { type: "fire", icon: Flame, label: "Fire Emergency", color: "text-orange-600", number: "911" },
    { type: "police", icon: Shield, label: "Police Emergency", color: "text-blue-600", number: "911" },
    { type: "accident", icon: Car, label: "Traffic Accident", color: "text-yellow-600", number: "911" },
  ]

  const safetyContacts = [
    { name: "Emergency Services", number: "911", type: "emergency" },
    { name: "Poison Control", number: "1-800-222-1222", type: "medical" },
    { name: "Crisis Hotline", number: "988", type: "mental" },
    { name: "Roadside Assistance", number: "1-800-AAA-HELP", type: "roadside" },
  ]

  const nearbyHelp = [
    { name: "City Hospital", distance: "0.8 mi", type: "Hospital", status: "Open 24/7" },
    { name: "Police Station", distance: "1.2 mi", type: "Police", status: "Open" },
    { name: "Fire Department", distance: "0.5 mi", type: "Fire", status: "Active" },
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
            <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-destructive-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Emergency & Safety</h1>
              <p className="text-sm text-muted-foreground">Quick Access to Emergency Services</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Emergency Alert */}
        {emergencyActive && (
          <Card className="border-destructive bg-destructive/10 animate-pulse">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-destructive rounded-full animate-ping"></div>
                  <p className="text-destructive font-bold">EMERGENCY ACTIVE</p>
                </div>
                <Button variant="destructive" size="sm" onClick={() => setEmergencyActive(false)}>
                  Cancel
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Emergency services have been contacted. Help is on the way.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Quick Emergency Actions */}
        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <Phone className="w-5 h-5" />
              Emergency SOS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencyTypes.map((emergency) => {
                const IconComponent = emergency.icon
                return (
                  <Button
                    key={emergency.type}
                    variant="destructive"
                    size="lg"
                    className="h-16 gap-3"
                    onClick={() => {
                      setSelectedEmergency(emergency.type)
                      setEmergencyActive(true)
                    }}
                  >
                    <IconComponent className="w-6 h-6" />
                    <div className="text-left">
                      <p className="font-medium">{emergency.label}</p>
                      <p className="text-xs opacity-90">Call {emergency.number}</p>
                    </div>
                  </Button>
                )
              })}
            </div>

            <div className="p-4 bg-background rounded-lg border border-destructive/20">
              <h3 className="font-medium text-foreground mb-2">Emergency Information</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• Your location will be automatically shared</p>
                <p>• Emergency contacts will be notified</p>
                <p>• Medical information from your profile will be provided</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Network */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Safety Network
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-16 gap-3 bg-transparent">
                <UserCheck className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-medium">Check In</p>
                  <p className="text-xs text-muted-foreground">Let contacts know you're safe</p>
                </div>
              </Button>

              <Button variant="outline" className="h-16 gap-3 bg-transparent">
                <MapPin className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-medium">Share Location</p>
                  <p className="text-xs text-muted-foreground">Send live location to trusted contacts</p>
                </div>
              </Button>

              <Button variant="outline" className="h-16 gap-3 bg-transparent">
                <AlertTriangle className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-medium">Report Incident</p>
                  <p className="text-xs text-muted-foreground">Alert community about safety issues</p>
                </div>
              </Button>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Trusted Contacts</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">John Doe (Emergency Contact)</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Jane Smith (Family)</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-2">
                  Manage Contacts
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-secondary" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {safetyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-foreground">{contact.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{contact.type}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-foreground">{contact.number}</span>
                    <Button size="sm" variant="outline">
                      <Phone className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Nearby Emergency Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Nearby Emergency Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {nearbyHelp.map((place, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{place.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{place.distance}</span>
                        <span>•</span>
                        <span>{place.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{place.status}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      <Clock className="w-3 h-3 inline mr-1" />3 min drive
                    </p>
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
