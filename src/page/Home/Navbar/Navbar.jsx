import React from "react";
import { Menu , Search} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar.jsx";
import { Avatar,AvatarFallback } from "@radix-ui/react-avatar";
const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-r-0 flex flex-col"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 200 200"
                    className="shrink-0"
                  >
                    <defs>
                      <radialGradient
                        id="goldGradient"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#F0B90B", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#C79100", stopOpacity: 1 }}
                        />
                      </radialGradient>
                    </defs>
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="url(#goldGradient)"
                    />
                    <g fill="white">
                      <rect
                        x="90"
                        y="90"
                        width="20"
                        height="20"
                        transform="rotate(45 100 100)"
                      />
                      <rect
                        x="90"
                        y="50"
                        width="20"
                        height="20"
                        transform="rotate(45 100 60)"
                      />
                      <rect
                        x="130"
                        y="90"
                        width="20"
                        height="20"
                        transform="rotate(45 140 100)"
                      />
                      <rect
                        x="90"
                        y="130"
                        width="20"
                        height="20"
                        transform="rotate(45 100 140)"
                      />
                      <rect
                        x="50"
                        y="90"
                        width="20"
                        height="20"
                        transform="rotate(45 60 100)"
                      />
                    </g>
                  </svg>
                  <div>
                    <span className="font-bold text-2xl text-red-500">
                      Trading
                    </span>
                    <span className="font-bold text-2xl">Buddy</span>
                  </div>
                </div>
                <Sidebar />
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div><span className="text-xl font-semibold text-yellow-300 cursor-pointer">TradingBuddy</span></div>
        <div className="ml-5 p-0"><Button variant="outline" className="flex items-center gap-3 "><Search className="w-6 h-6"/><span className="text-amber-50 font-light">Search</span></Button></div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>
            <svg
                    width="40"
                    height="40"
                    viewBox="0 0 200 200"
                    className="shrink-0"
                  >
                    <defs>
                      <radialGradient
                        id="goldGradient"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#F0B90B", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#C79100", stopOpacity: 1 }}
                        />
                      </radialGradient>
                    </defs>
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="url(#goldGradient)"
                    />
                    <g fill="white">
                      <rect
                        x="90"
                        y="90"
                        width="20"
                        height="20"
                        transform="rotate(45 100 100)"
                      />
                      <rect
                        x="90"
                        y="50"
                        width="20"
                        height="20"
                        transform="rotate(45 100 60)"
                      />
                      <rect
                        x="130"
                        y="90"
                        width="20"
                        height="20"
                        transform="rotate(45 140 100)"
                      />
                      <rect
                        x="90"
                        y="130"
                        width="20"
                        height="20"
                        transform="rotate(45 100 140)"
                      />
                      <rect
                        x="50"
                        y="90"
                        width="20"
                        height="20"
                        transform="rotate(45 60 100)"
                      />
                    </g>
            </svg>
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
