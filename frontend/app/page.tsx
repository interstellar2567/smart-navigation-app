"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
	MapPin,
	Navigation,
	AlertTriangle,
	Mic,
	MicOff,
	Trophy,
	Camera,
	Shield,
	Clock,
	Users,
	Phone,
	ArrowRight,
} from "lucide-react";

export default function HomePage() {
	const [isListening, setIsListening] = useState(false);
	const [userPoints] = useState(1247);
	const [userRank] = useState(23);

	const toggleVoiceControl = () => {
		setIsListening(!isListening);
	};

	return (
		<div className="min-h-screen bg-background">
			<main className="max-w-6xl mx-auto p-4 space-y-6">
				{/* Voice Control Feedback */}
				{isListening && (
					<Card className="border-accent bg-accent/5">
						<CardContent className="p-4">
							<div className="flex items-center gap-3">
								<div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
								<p className="text-accent-foreground font-medium">
									Listening... Say "Navigate to" or "Report incident"
								</p>
							</div>
						</CardContent>
					</Card>
				)}

				{/* Welcome Section */}
				<Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
					<CardContent className="p-6">
						<h2 className="text-2xl font-bold text-foreground mb-2">
							Welcome to SafeNav
						</h2>
						<p className="text-muted-foreground mb-4">
							Your intelligent companion for safe navigation, community
							reporting, and emergency assistance.
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
							<div>
								<p className="text-2xl font-bold text-primary">{userPoints}</p>
								<p className="text-xs text-muted-foreground">Points Earned</p>
							</div>
							<div>
								<p className="text-2xl font-bold text-accent">#{userRank}</p>
								<p className="text-xs text-muted-foreground">Community Rank</p>
							</div>
							<div>
								<p className="text-2xl font-bold text-secondary">23</p>
								<p className="text-xs text-muted-foreground">
									Reports This Month
								</p>
							</div>
							<div>
								<p className="text-2xl font-bold text-foreground">7</p>
								<p className="text-xs text-muted-foreground">Current Level</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Quick Actions Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Emergency SOS */}
					<Link href="/emergency">
						<Card className="border-destructive/20 bg-destructive/5 hover:bg-destructive/10 transition-colors cursor-pointer">
							<CardHeader className="pb-3">
								<CardTitle className="flex items-center justify-between text-destructive">
									<div className="flex items-center gap-2">
										<Shield className="w-5 h-5" />
										Emergency SOS
									</div>
									<ArrowRight className="w-4 h-4" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground mb-3">
									Quick access to emergency services and safety features
								</p>
								<Button variant="destructive" size="sm" className="gap-2">
									<Phone className="w-4 h-4" />
									Emergency Access
								</Button>
							</CardContent>
						</Card>
					</Link>

					{/* Smart Navigation */}
					<Link href="/navigation">
						<Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
							<CardHeader className="pb-3">
								<CardTitle className="flex items-center justify-between text-primary">
									<div className="flex items-center gap-2">
										<MapPin className="w-5 h-5" />
										Smart Navigation
									</div>
									<ArrowRight className="w-4 h-4" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground mb-3">
									AI-powered route optimization with real-time traffic
									predictions
								</p>
								<Button
									variant="outline"
									size="sm"
									className="gap-2 bg-transparent"
								>
									<Navigation className="w-4 h-4" />
									Start Navigation
								</Button>
							</CardContent>
						</Card>
					</Link>

					{/* Community Reporting */}
					<Link href="/community">
						<Card className="border-secondary/20 bg-secondary/5 hover:bg-secondary/10 transition-colors cursor-pointer">
							<CardHeader className="pb-3">
								<CardTitle className="flex items-center justify-between text-secondary">
									<div className="flex items-center gap-2">
										<Trophy className="w-5 h-5" />
										Community Hub
									</div>
									<ArrowRight className="w-4 h-4" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground mb-3">
									Gamified reporting system to help improve community safety
								</p>
								<Button
									variant="outline"
									size="sm"
									className="gap-2 bg-transparent"
								>
									<Users className="w-4 h-4" />
									Join Community
								</Button>
							</CardContent>
						</Card>
					</Link>

					{/* Voice Control */}
					<Link href="/voice">
						<Card className="border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors cursor-pointer">
							<CardHeader className="pb-3">
								<CardTitle className="flex items-center justify-between text-accent">
									<div className="flex items-center gap-2">
										<Mic className="w-5 h-5" />
										Voice Control
									</div>
									<ArrowRight className="w-4 h-4" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground mb-3">
									Hands-free navigation and reporting with voice commands
								</p>
								<Button
									variant="outline"
									size="sm"
									className="gap-2 bg-transparent"
								>
									<Mic className="w-4 h-4" />
									Voice Setup
								</Button>
							</CardContent>
						</Card>
					</Link>

					{/* Traffic Alerts */}
					<Card className="border-border bg-card">
						<CardHeader className="pb-3">
							<CardTitle className="flex items-center gap-2">
								<Clock className="w-5 h-5 text-accent" />
								Live Traffic
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-sm text-muted-foreground">
										Main St & 5th Ave
									</span>
									<Badge variant="destructive">+15 min</Badge>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-sm text-muted-foreground">
										Highway 101 North
									</span>
									<Badge variant="secondary">+8 min</Badge>
								</div>
							</div>
							<Link href="/navigation">
								<Button
									variant="outline"
									size="sm"
									className="w-full mt-3 gap-2 bg-transparent"
								>
									<AlertTriangle className="w-4 h-4" />
									View All Alerts
								</Button>
							</Link>
						</CardContent>
					</Card>

					{/* Virtual Exploration */}
					<Link href="/explore">
						<Card className="border-border bg-card hover:bg-muted/50 transition-colors cursor-pointer">
							<CardHeader className="pb-3">
								<CardTitle className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<Camera className="w-5 h-5 text-accent" />
										Virtual Tours
									</div>
									<ArrowRight className="w-4 h-4" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground mb-3">
									Explore nearby places virtually before visiting
								</p>
								<Button
									variant="outline"
									size="sm"
									className="gap-2 bg-transparent"
								>
									<Camera className="w-4 h-4" />
									Start Exploring
								</Button>
							</CardContent>
						</Card>
					</Link>
				</div>
			</main>
		</div>
	);
}
