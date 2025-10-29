import React from "react";
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

const initialWatchList = [
  {
    id: 1,
    Date: "2025/11/1",
    Time: "12:30 PM",
    name: "Bitcoin",
    Buy_Price: "BTC",
    Selling_Price: "41601028446",
    Order_Type: "2224350554199",
    ProfitLoss: "+0.32068",
    VALUE: "$111492",
  },
  {
    id: 2,
    Date: "2025/11/1",
    Time: "12:30 PM",
    name: "Ethereum",
    Buy_Price: "ETH",
    Selling_Price: "21000000000",
    Order_Type: "1000000000000",
    ProfitLoss: "+1.12",
    VALUE: "$3500",
  },
  {
    id: 3,
    Date: "2025/11/1",
    Time: "12:30 PM",
    name: "Cardano",
    Buy_Price: "ADA",
    Selling_Price: "5000000000",
    Order_Type: "45000000000",
    ProfitLoss: "-0.05",
    VALUE: "$1.20",
  },
  {
    id: 4,
    Date: "2025/11/1",
    Time: "12:30 PM",
    name: "Solana",
    Buy_Price: "SOL",
    Selling_Price: "3000000000",
    Order_Type: "25000000000",
    ProfitLoss: "+2.50",
    VALUE: "$150",
  },
  {
    id: 5,
    Date: "2025/11/1",
    Time: "12:30 PM",
    name: "Dogecoin",
    Buy_Price: "DOGE",
    Selling_Price: "1200000000",
    Order_Type: "10000000000",
    ProfitLoss: "-0.02",
    VALUE: "$0.25",
  },
];
const Activity = () => {
  return (
    <div className="p-2 lg:p-12">
      <h1 className="font-bold text-2xl pl-4 pb-5">Activity</h1>
      <Table className="border-b-2">
        <TableHeader>
          <TableRow className="border-t-2">
            <TableHead className="text-left py-4">Date & Time</TableHead>
            <TableHead>Trending Pair</TableHead>
            <TableHead>Buy</TableHead>
            <TableHead>Selling Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead className="w-36 text-left">Profit Loss</TableHead>
            <TableHead>VALUE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialWatchList.map((item) => (
            <TableRow key={item.id} className="" >
              <TableCell>
                <div className="flex flex-col gap-1">
                  <p className="text-gray-300 font-mono ">{item.Date}</p>
                  <p className="text-gray-400 font-light ">{item.Time}</p>
                </div>
              </TableCell>
              <TableCell className="font-medium py-3 pl-2">
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
              <TableCell>{item.Buy_Price}</TableCell>
              <TableCell>{item.Selling_Price}</TableCell>
              <TableCell>{item.Order_Type}</TableCell>
              <TableCell className="text-left w-[36]">{item.ProfitLoss}</TableCell>
              <TableCell>{item.VALUE}</TableCell>
            </TableRow>
          ))}
          {initialWatchList.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8">
                No items in your watch list.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
