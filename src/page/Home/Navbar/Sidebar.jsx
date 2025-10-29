import { House, LayoutDashboard, Bookmark, Activity, Wallet, Landmark, CreditCard, User, LogOut } from "lucide-react";
import { Button } from "../../../components/ui/button";
import React from "react";
import { SheetClose } from "../../../components/ui/sheet";
import { useNavigate } from "react-router-dom";

const menu = [
	{ name: "Home", path: "/", icon: <House className="h-7 w-7" /> },
	{ name: "Portfolio", path: "/portfolio", icon: <LayoutDashboard className="h-7 w-7" /> },
	{ name: "WatchList", path: "/watchlist", icon: <Bookmark className="h-7 w-7" /> },
	{ name: "Activity", path: "/activity", icon: <Activity className="h-7 w-7" /> },
	{ name: "Wallet", path: "/wallet", icon: <Wallet className="h-7 w-7" /> },
	{ name: "PaymentDetails", path: "/payment_details", icon: <Landmark className="h-7 w-7" /> },
	{ name: "Withdrawal", path: "/withdrawal", icon: <CreditCard className="h-7 w-7" /> },
	{ name: "Profile", path: "/profile", icon: <User className="h-7 w-7" /> },
	{ name: "Logout", path: "/logout", icon: <LogOut className="h-7 w-7" /> },
];
const Sidebar = () => {

	const navigate = useNavigate();

	return (
		<div className="mt-10 space-y-4">
			<div>
				{menu.map((item,index) => (
					<SheetClose key={index} className="w-full mb-3">
						<Button
							variant="outline" 
							className="flex items-center gap-0 py-6 w-full"
							onClick={() => navigate(item.path)} 
						>
							<span className="w-6">{item.icon}</span>
							<p>{item.name}</p>
						</Button>
					</SheetClose>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
