import { useUser as useClerkUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";

interface UserProfile {
	clerkId: string;
	email: string;
	firstName?: string;
	lastName?: string;
	points: number;
	level: number;
	rank?: number;
	reportsSubmitted: number;
	accuracyRate: number;
}

export const useUserProfile = () => {
	const { user: clerkUser } = useClerkUser();
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (clerkUser) {
			fetchUserProfile();
		}
	}, [clerkUser]);

	const fetchUserProfile = async () => {
		try {
			const response = await fetch(`/api/users/${clerkUser?.id}`);
			if (response.ok) {
				const profile = await response.json();
				setUserProfile(profile);
			}
		} catch (error) {
			console.error("Error fetching user profile:", error);
		} finally {
			setLoading(false);
		}
	};

	const updatePoints = async (points: number, action: string) => {
		try {
			const response = await fetch(`/api/users/${clerkUser?.id}/points`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ points, action }),
			});

			if (response.ok) {
				const updatedUser = await response.json();
				setUserProfile(updatedUser);
			}
		} catch (error) {
			console.error("Error updating points:", error);
		}
	};

	return { userProfile, loading, updatePoints, refetch: fetchUserProfile };
};
