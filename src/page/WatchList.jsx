import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import bitcoinIcon from "@/assets/1534906694.svg";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialWatchlist = [
  { id: 1, name: "Bitcoin", symbol: "BTC", volume: "41601028446", marketCap: "2224350554199", change: "+0.32068", price: "$111492" },
  { id: 2, name: "Ethereum", symbol: "ETH", volume: "21000000000", marketCap: "1000000000000", change: "+1.12", price: "$3500" },
  { id: 3, name: "Cardano", symbol: "ADA", volume: "5000000000", marketCap: "45000000000", change: "-0.05", price: "$1.20" },
  { id: 4, name: "Solana", symbol: "SOL", volume: "3000000000", marketCap: "25000000000", change: "+2.50", price: "$150" },
  { id: 5, name: "Dogecoin", symbol: "DOGE", volume: "1200000000", marketCap: "10000000000", change: "-0.02", price: "$0.25" },
];

const WatchList = () => {
  const [watchlist, setWatchlist] = useState(initialWatchlist);

  const handleRemoveWatchList = (id) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-2 lg:p-24">
      <h1 className="font-bold text-2xl pl-4 pb-5">WatchList</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-center py-3">Coin</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24H</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>REMOVE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlist.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium py-3 px-2">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={bitcoinIcon}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                  </Avatar>
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.volume}</TableCell>
              <TableCell>{item.marketCap}</TableCell>
              <TableCell>{item.change}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell className="py-3">
                <Button
                  type="button"
                  onClick={() => handleRemoveWatchList(item.id)}
                  variant="ghost"
                  className="p-2"
                  aria-label={`Remove ${item.name} from watchlist`}
                >
                  <X className="w-5 h-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {watchlist.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8">
                No items in your watchlist.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchList;
