import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import bitcoinIcon from "@/assets/1534906694.svg";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  DotIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import TradingForm from "./TradingForm";
import StockChart from "./Home/StockChart";
const StockDetails = () => {
  return (
    <div className="mt-5 p-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <Avatar>
            <AvatarImage
              src={bitcoinIcon}
              alt="Bitcoin"
              className="w-8 h-8 object-contain"
            />
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <p>BTC</p>
              <DotIcon className="text-gray-600" />
              <p>Bitcoin</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">$2362</p>
              <p className="text-red-600 flex gap-1">
                <span>-12111212.1212</span>
                <span>(-0.12123%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Button>
            {true ? (
              <BookmarkFilledIcon />
            ) : (
              <BookmarkIcon className="w-6 h-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>TRADE</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-12">
        <StockChart />
      </div>
    </div>
  );
};

export default StockDetails;
