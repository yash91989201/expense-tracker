import "@/App.css";
// UI
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { useEffect, useState } from "react";

export default function App() {
	const [totalSpent, setTotalSpent] = useState(0);

	const getTotalSpent = async () => {
		const res = await fetch("/api/expenses/total-spent");
		const data = await res.json();
		console.log(data);
	};

	useEffect(() => {
		getTotalSpent();
		return () => {};
	});

	return (
		<>
			<Card className="w-[350px] mx-auto">
				<CardHeader>
					<CardTitle>Total spent</CardTitle>
					<CardDescription>total amount spent</CardDescription>
				</CardHeader>
				<CardContent>
					<p>{totalSpent}</p>
				</CardContent>
				<CardFooter>
					<Button>Spent</Button>
				</CardFooter>
			</Card>
		</>
	);
}
