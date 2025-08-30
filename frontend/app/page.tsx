"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
	X,
	Search,
	Star,
	TrendingUp,
	Target,
	Zap,
	Heart,
	CheckCircle,
	Globe,
	Lock,
	Smile,
	Quote,
	Mail,
	Send,
	Facebook,
	Twitter,
	Instagram,
	Youtube,
} from "lucide-react";

export default function HomePage() {
	const [isListening, setIsListening] = useState(false);
	const [userPoints] = useState(1247);
	const [userRank] = useState(23);

	const toggleVoiceControl = () => {
		setIsListening(!isListening);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-70 animate-blob"></div>
				<div className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
				<div className="absolute top-1/2 left-1/2 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
			</div>
			<main className="relative max-w-7xl mx-auto p-8 space-y-16">
				{/* Hero Section */}
				<section className="relative bg-cover bg-center rounded-xl p-20 text-center text-white shadow-lg shadow-black/30" style={{ backgroundImage: "url('/colorful-artisan-market.png')" }}>
					<h1 className="text-6xl font-extrabold mb-6 drop-shadow-xl">Welcome to SafeNav</h1>
					<p className="text-2xl max-w-4xl mx-auto mb-12 drop-shadow-lg">
						Your intelligent companion for safe navigation, community reporting, and emergency assistance.
					</p>
					<button className="bg-primary hover:bg-primary/95 text-white font-semibold py-4 px-12 rounded-xl shadow-xl transition duration-300 transform hover:scale-105">
						Get Started
					</button>
				</section>

				{/* Voice Control Feedback */}
				{isListening && (
					<Card className="border-accent bg-accent/5 shadow-lg animate-in slide-in-from-top-2 duration-300">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="relative">
										<div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
										<div className="absolute inset-0 w-4 h-4 bg-accent rounded-full animate-ping opacity-75"></div>
									</div>
									<p className="text-accent-foreground font-semibold text-lg">
										Listening... Say "Navigate to" or "Report incident"
									</p>
								</div>
								<Button
									variant="ghost"
									size="sm"
									onClick={() => setIsListening(false)}
									className="h-10 w-10 p-0 hover:bg-accent/20 transition-colors duration-200 rounded-full"
								>
									<X className="w-5 h-5" />
								</Button>
							</div>
						</CardContent>
					</Card>
				)}

				{/* Search Bar */}
				<section className="my-12 max-w-3xl mx-auto">
					<div className="relative">
						<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
						<input
							type="text"
							placeholder="Search destination or report..."
							className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-muted bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
						/>
					</div>
				</section>

				{/* Welcome Stats Section */}
				<Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
					<CardContent className="p-12">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
							<div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-primary/20">
								<Star className="w-8 h-8 text-primary mx-auto mb-3" />
								<p className="text-5xl font-bold text-primary mb-2">{userPoints}</p>
								<p className="text-sm font-semibold text-muted-foreground">Points Earned</p>
							</div>
							<div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-accent/20">
								<Trophy className="w-8 h-8 text-accent mx-auto mb-3" />
								<p className="text-5xl font-bold text-accent mb-2">#{userRank}</p>
								<p className="text-sm font-semibold text-muted-foreground">Community Rank</p>
							</div>
							<div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-secondary/20">
								<TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
								<p className="text-5xl font-bold text-secondary mb-2">23</p>
								<p className="text-sm font-semibold text-muted-foreground">Reports This Month</p>
							</div>
							<div className="p-8 rounded-2xl bg-gradient-to-br from-muted/20 to-muted/10 hover:from-muted/30 hover:to-muted/20 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-muted/30">
								<Target className="w-8 h-8 text-foreground mx-auto mb-3" />
								<p className="text-5xl font-bold text-foreground mb-2">7</p>
								<p className="text-sm font-semibold text-muted-foreground">Current Level</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Features Section */}
				<section className="my-16">
					<h2 className="text-4xl font-bold mb-12 text-center">Why Choose SafeNav?</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Navigation className="w-8 h-8 text-primary" />
								</div>
								<CardTitle className="text-xl">AI-Powered Navigation</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground">
									Get real-time route optimization with machine learning algorithms that predict traffic patterns and suggest the fastest paths.
								</p>
							</CardContent>
						</Card>
						<Card className="border-accent/20 bg-accent/5 hover:bg-accent/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Shield className="w-8 h-8 text-accent" />
								</div>
								<CardTitle className="text-xl">Emergency SOS</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground">
									One-tap emergency assistance with automatic location sharing and instant connection to emergency services.
								</p>
							</CardContent>
						</Card>
						<Card className="border-secondary/20 bg-secondary/5 hover:bg-secondary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Users className="w-8 h-8 text-secondary" />
								</div>
								<CardTitle className="text-xl">Community Driven</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground">
									Join a community of users reporting hazards, sharing tips, and improving safety for everyone in real-time.
								</p>
							</CardContent>
						</Card>
						<Card className="border-destructive/20 bg-destructive/5 hover:bg-destructive/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Lock className="w-8 h-8 text-destructive" />
								</div>
								<CardTitle className="text-xl">Privacy First</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground">
									Your data stays secure with end-to-end encryption and transparent privacy policies you can trust.
								</p>
							</CardContent>
						</Card>
						<Card className="border-muted/20 bg-muted/5 hover:bg-muted/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Mic className="w-8 h-8 text-muted-foreground" />
								</div>
								<CardTitle className="text-xl">Voice Control</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground">
									Navigate hands-free with advanced voice recognition that understands natural language commands.
								</p>
							</CardContent>
						</Card>
						<Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
							<CardHeader className="text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Globe className="w-8 h-8 text-primary" />
								</div>
								<CardTitle className="text-xl">Global Coverage</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-muted-foreground">
									Access detailed maps and navigation data for cities worldwide with offline capabilities.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Recent Activity Section */}
				<section className="my-12">
					<h2 className="text-3xl font-bold mb-8 text-center">Recent Activity</h2>
					<div className="space-y-6 max-w-4xl mx-auto">
						<Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-destructive">
							<div className="flex items-center gap-4">
								<div className="p-3 bg-destructive/10 rounded-full">
									<AlertTriangle className="w-5 h-5 text-destructive" />
								</div>
								<div className="flex-1">
									<p className="text-base font-medium text-foreground">
										User123 reported a pothole on Main St.
									</p>
									<p className="text-sm text-muted-foreground">2 minutes ago</p>
								</div>
								<Badge variant="destructive" className="text-xs">High Priority</Badge>
							</div>
						</Card>
						<Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary">
							<div className="flex items-center gap-4">
								<div className="p-3 bg-primary/10 rounded-full">
									<Navigation className="w-5 h-5 text-primary" />
								</div>
								<div className="flex-1">
									<p className="text-base font-medium text-foreground">
										User456 started navigation to Central Park.
									</p>
									<p className="text-sm text-muted-foreground">5 minutes ago</p>
								</div>
								<Badge variant="secondary" className="text-xs">Active</Badge>
							</div>
						</Card>
						<Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-accent">
							<div className="flex items-center gap-4">
								<div className="p-3 bg-accent/10 rounded-full">
									<Clock className="w-5 h-5 text-accent" />
								</div>
								<div className="flex-1">
									<p className="text-base font-medium text-foreground">
										User789 reported heavy traffic on Highway 101.
									</p>
									<p className="text-sm text-muted-foreground">12 minutes ago</p>
								</div>
								<Badge variant="outline" className="text-xs">Traffic</Badge>
							</div>
						</Card>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="my-16">
					<h2 className="text-4xl font-bold mb-12 text-center">What Our Users Say</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="border-primary/20 bg-primary/5 hover:shadow-lg transition-all duration-300 hover:scale-105">
							<CardContent className="p-8">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
										<Smile className="w-6 h-6 text-primary" />
									</div>
									<div>
										<p className="font-semibold text-foreground">Sarah Johnson</p>
										<p className="text-sm text-muted-foreground">Daily Commuter</p>
									</div>
								</div>
								<Quote className="w-8 h-8 text-primary/50 mb-4" />
								<p className="text-muted-foreground italic">
									"SafeNav saved me hours of traffic time with its AI predictions. The emergency feature gave me peace of mind during my solo trips."
								</p>
								<div className="flex mt-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
									))}
								</div>
							</CardContent>
						</Card>
						<Card className="border-accent/20 bg-accent/5 hover:shadow-lg transition-all duration-300 hover:scale-105">
							<CardContent className="p-8">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
										<Smile className="w-6 h-6 text-accent" />
									</div>
									<div>
										<p className="font-semibold text-foreground">Mike Chen</p>
										<p className="text-sm text-muted-foreground">Business Traveler</p>
									</div>
								</div>
								<Quote className="w-8 h-8 text-accent/50 mb-4" />
								<p className="text-muted-foreground italic">
									"The community reporting feature is incredible. I avoid hazards before they become problems. Voice control makes driving so much safer."
								</p>
								<div className="flex mt-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
									))}
								</div>
							</CardContent>
						</Card>
						<Card className="border-secondary/20 bg-secondary/5 hover:shadow-lg transition-all duration-300 hover:scale-105">
							<CardContent className="p-8">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
										<Smile className="w-6 h-6 text-secondary" />
									</div>
									<div>
										<p className="font-semibold text-foreground">Emma Rodriguez</p>
										<p className="text-sm text-muted-foreground">Safety Advocate</p>
									</div>
								</div>
								<Quote className="w-8 h-8 text-secondary/50 mb-4" />
								<p className="text-muted-foreground italic">
									"As someone who travels alone frequently, SafeNav's emergency features and community support have been invaluable for my safety."
								</p>
								<div className="flex mt-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Quick Actions Grid */}
				<section className="my-16">
					<h2 className="text-3xl font-bold mb-8 text-center">Quick Actions</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
						<Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20 bg-primary/5 cursor-pointer group">
							<div className="text-center">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
									<Navigation className="w-8 h-8 text-primary" />
								</div>
								<h3 className="text-lg font-semibold mb-2">Start Navigation</h3>
								<p className="text-sm text-muted-foreground">Get directions to your destination</p>
							</div>
						</Card>
						<Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-accent/20 bg-accent/5 cursor-pointer group">
							<div className="text-center">
								<div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
									<AlertTriangle className="w-8 h-8 text-accent" />
								</div>
								<h3 className="text-lg font-semibold mb-2">Report Incident</h3>
								<p className="text-sm text-muted-foreground">Help others by reporting hazards</p>
							</div>
						</Card>
						<Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-secondary/20 bg-secondary/5 cursor-pointer group">
							<div className="text-center">
								<div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
									<Shield className="w-8 h-8 text-secondary" />
								</div>
								<h3 className="text-lg font-semibold mb-2">Emergency SOS</h3>
								<p className="text-sm text-muted-foreground">Quick access to emergency services</p>
							</div>
						</Card>
						<Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-muted/20 bg-muted/5 cursor-pointer group">
							<div className="text-center">
								<div className="w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-muted/20 transition-colors duration-300">
									<Mic className="w-8 h-8 text-muted-foreground" />
								</div>
								<h3 className="text-lg font-semibold mb-2">Voice Control</h3>
								<p className="text-sm text-muted-foreground">Hands-free navigation commands</p>
							</div>
						</Card>
					</div>
				</section>

				{/* Newsletter Section */}
				<section className="my-16 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-12">
					<div className="text-center max-w-2xl mx-auto">
						<h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Get the latest safety tips, app updates, and community news delivered to your inbox.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 rounded-lg border border-muted bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
							/>
							<Button className="px-8 py-3 bg-primary hover:bg-primary/95 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
								<Send className="w-4 h-4 mr-2" />
								Subscribe
							</Button>
						</div>
						<p className="text-sm text-muted-foreground mt-4">
							We respect your privacy. Unsubscribe at any time.
						</p>
					</div>
				</section>

				{/* Footer */}
				<footer className="mt-20 pt-12 border-t border-muted/20">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
						<div>
							<h3 className="text-lg font-semibold mb-4">SafeNav</h3>
							<p className="text-sm text-muted-foreground">
								Your intelligent companion for safe navigation, community reporting, and emergency assistance.
							</p>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Features</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li><Link href="#" className="hover:text-primary transition-colors">AI Navigation</Link></li>
								<li><Link href="#" className="hover:text-primary transition-colors">Emergency SOS</Link></li>
								<li><Link href="#" className="hover:text-primary transition-colors">Community Reports</Link></li>
								<li><Link href="#" className="hover:text-primary transition-colors">Voice Control</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Support</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
								<li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
								<li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
								<li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Connect</h4>
							<div className="flex space-x-4">
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									<Facebook className="w-5 h-5" />
								</Link>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									<Twitter className="w-5 h-5" />
								</Link>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									<Instagram className="w-5 h-5" />
								</Link>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									<Youtube className="w-5 h-5" />
								</Link>
							</div>
						</div>
					</div>
					<div className="pt-8 border-t border-muted/20 text-center text-sm text-muted-foreground">
						<p>&copy; 2024 SafeNav. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500" /> for safer journeys.</p>
					</div>
				</footer>
			</main>
		</div>
	);
}
