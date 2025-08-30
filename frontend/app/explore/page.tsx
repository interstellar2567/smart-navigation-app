"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  Camera,
  MapPin,
  ArrowLeft,
  Star,
  Clock,
  Users,
  Search,
  Filter,
  Play,
  Eye,
  Navigation,
  Heart,
} from "lucide-react"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  const categories = [
    { id: "all", label: "All Places", count: 24 },
    { id: "restaurants", label: "Restaurants", count: 8 },
    { id: "parks", label: "Parks", count: 5 },
    { id: "museums", label: "Museums", count: 3 },
    { id: "shopping", label: "Shopping", count: 6 },
    { id: "entertainment", label: "Entertainment", count: 2 },
  ]

  const nearbyPlaces = [
    {
      id: 1,
      name: "Konark Sun Temple",
      distance: "45 km",
      rating: 4.8,
      type: "Temple",
      description: "UNESCO World Heritage Site known for its architectural grandeur and chariot design",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Konark_Sun_Temple_2016-03-06_001.jpg",
      virtualTour: true,
      reviews: 2156,
      openHours: "6:00 AM - 8:00 PM",
      features: ["UNESCO Site", "Ancient Architecture", "Chariot Design", "Sculptures"],
    },
    {
      id: 2,
      name: "Puri Beach",
      distance: "60 km",
      rating: 4.6,
      type: "Beach",
      description: "Famous golden beach with Jagannath Temple nearby and vibrant local culture",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Puri_Beach_2016-03-06_001.jpg",
      virtualTour: true,
      reviews: 3421,
      openHours: "24 Hours",
      features: ["Golden Sands", "Seafood", "Temple Views", "Sunset Points"],
    },
    {
      id: 3,
      name: "Chilika Lake",
      distance: "120 km",
      rating: 4.9,
      type: "Lake",
      description: "Asia's largest brackish water lagoon, home to migratory birds and Irrawaddy dolphins",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Chilika_Lake_2016-03-06_001.jpg",
      virtualTour: true,
      reviews: 1876,
      openHours: "6:00 AM - 6:00 PM",
      features: ["Bird Watching", "Boat Tours", "Dolphins", "Mangrove Forests"],
    },
    {
      id: 4,
      name: "Udayagiri and Khandagiri Caves",
      distance: "8 km",
      rating: 4.4,
      type: "Historical",
      description: "Ancient Jain rock-cut caves dating back to 2nd century BCE with intricate carvings",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Udayagiri_and_Khandagiri_Caves_2016-03-06_001.jpg",
      virtualTour: true,
      reviews: 987,
      openHours: "8:00 AM - 5:00 PM",
      features: ["Rock-cut Caves", "Jain Heritage", "Ancient Carvings", "Hiking Trails"],
    },
    {
      id: 5,
      name: "Lingaraj Temple",
      distance: "2 km",
      rating: 4.7,
      type: "Temple",
      description: "One of the oldest and largest temples in Bhubaneswar, dedicated to Lord Shiva",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lingaraj_Temple_Bhubaneswar_01-2016_img3.jpg",
      virtualTour: true,
      reviews: 1654,
      openHours: "6:00 AM - 9:00 PM",
      features: ["Ancient Temple", "Shiv Lingam", "Architecture", "Festivals"],
    },
    {
      id: 6,
      name: "Dhauli Giri Peace Pagoda",
      distance: "12 km",
      rating: 4.5,
      type: "Monument",
      description: "White Peace Pagoda built by Japanese monks, symbolizing peace and non-violence",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Dhauli_Giri_Peace_Pagoda_2016-03-06_001.jpg",
      virtualTour: true,
      reviews: 743,
      openHours: "6:00 AM - 6:00 PM",
      features: ["Peace Pagoda", "Buddhist Architecture", "Meditation", "River Views"],
    },
  ]

  const filteredPlaces = nearbyPlaces.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || place.type.toLowerCase() === selectedCategory.slice(0, -1).toLowerCase()
    return matchesSearch && matchesCategory
  })

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
              <Camera className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Virtual Exploration</h1>
              <p className="text-sm text-muted-foreground">Discover Places Before You Visit</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search places..."
                  className="pl-10 bg-background"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <MapPin className="w-4 h-4" />
                  Near Me
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="gap-2"
                >
                  {category.label}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={place.image || "/placeholder.svg"} alt={place.name} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 flex gap-1">
                  {place.virtualTour && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Camera className="w-3 h-3 mr-1" />
                      Virtual Tour
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge variant="secondary">{place.type}</Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{place.name}</h3>
                  <Button variant="ghost" size="sm" className="p-1">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{place.description}</p>

                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {place.distance}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    {place.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {place.reviews}
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {place.openHours}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {place.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {place.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{place.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  {place.virtualTour ? (
                    <Button className="flex-1 gap-2" size="sm">
                      <Play className="w-3 h-3" />
                      Play Audio
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex-1 gap-2 bg-transparent" size="sm">
                      <Eye className="w-3 h-3" />
                      View Details
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Navigation className="w-3 h-3" />
                    Navigate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Virtual Tour Features */}
        <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Virtual Tour Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Camera className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-1">360° Views</h3>
                <p className="text-sm text-muted-foreground">Immersive panoramic views of locations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-1">Interactive Maps</h3>
                <p className="text-sm text-muted-foreground">Navigate through spaces virtually</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-medium text-foreground mb-1">Real-time Info</h3>
                <p className="text-sm text-muted-foreground">Live updates on hours, crowds, and more</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
