import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// 👇 Clerk components
import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

import { Navigation } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const dmSans = DM_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-dm-sans",
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "SafeNav - Smart Navigation & Community Safety",
	description:
		"Smart navigation app with traffic prediction, SOS features, and community safety tools",
	generator: "v0.app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" className={`${dmSans.variable} antialiased`}>
				<body className="font-sans">
					{/* ✅ Unified Navbar */}
					<header className="bg-card border-b border-border">
						<div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
							{/* Logo */}
							<Link href="/" className="flex items-center gap-3">
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
									<Navigation className="w-6 h-6 text-primary-foreground" />
								</div>
								<div>
									<h1 className="text-xl font-bold text-foreground">SafeNav</h1>
									<p className="text-xs text-muted-foreground">
										Smart Navigation & Safety
									</p>
								</div>
							</Link>

							{/* Navigation Links */}
							<nav className="hidden md:flex gap-2">
								<Link href="/">
									<Button variant="ghost" size="sm">
										Home
									</Button>
								</Link>
								<Link href="/navigation">
									<Button variant="ghost" size="sm">
										Navigation
									</Button>
								</Link>
								<Link href="/emergency">
									<Button variant="ghost" size="sm">
										Emergency
									</Button>
								</Link>
								<Link href="/community">
									<Button variant="ghost" size="sm">
										Community
									</Button>
								</Link>
								<Link href="/voice">
									<Button variant="ghost" size="sm">
										Voice Control
									</Button>
								</Link>
								<Link href="/explore">
									<Button variant="ghost" size="sm">
										Explore
									</Button>
								</Link>
							</nav>

							{/* Auth Section */}
							<div className="flex gap-3">
								<SignedOut>
									<SignInButton>
										<Button variant="outline" size="sm">
											Sign In
										</Button>
									</SignInButton>
									<SignUpButton>
										<Button
											className="bg-green-800 text-white rounded-full"
											size="sm"
										>
											Sign Up
										</Button>
									</SignUpButton>
								</SignedOut>
								<SignedIn>
									<UserButton />
								</SignedIn>
							</div>
						</div>
					</header>

					{/* Page Content */}
					<main className="min-h-screen">{children}</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
