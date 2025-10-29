import { Input } from "@/components/ui/input";
import React from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon, Half1Icon } from "@radix-ui/react-icons";
import bitcoinIcon from "@/assets/1534906694.svg";
import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const TradingForm = () => {
  const [orderType, setOrderType] = React.useState("BUY");
  const handleChange = () => {};
  return (
    <div className="space-y-10 p-5">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 items-center justify-between">
          <Input
            className={"py-7 focus:outline-none"}
            placeholder="Enter Amount..."
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div>
            <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
              3453
            </p>
          </div>
        </div>
        {false && (
          <h1 className="text-red-600 text-center pt-1 text-xl">
            Insufficient Balance to Buy
          </h1>
        )}
        <div className="flex gap-5 items-center border-2 rounded-md px-4 py-2">
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
        <div className="flex justify-between border-2 rounded-md px-4 py-3 text-semibold text-lg leading-relaxed">
          <p>Order Type</p>
          <p>Market Order</p>
        </div>
        <div className="flex justify-between border-2 rounded-md px-4 py-3 leading-relaxed">
          <p className="text-lg">
            {orderType == "BUY" ? "Available Case" : "Available Quantity"}
          </p>
          <p className="text-xl font-bold flex gap-0.2 items-center">
            {orderType == "BUY" && <DollarSign className="h-7 w-7" />}
            <span className="text-2xl">
              {orderType == "BUY" ? "6434.34" : "32"}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            className={`w-full text-xl font-bold py-4
            ${orderType == "SELL" ? "bg-red-600 text-white" : ""}`}
          >
            {orderType == "BUY" ? "BUY" : "SELL"}
          </Button>
          <Button
            variant={"link"}
            className="py-4 w-full text-xl bg-black text-white rounded-md border-2 font-bold font-mono hover:bg-white/10"
            onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}
          >
            {orderType == "BUY" ? "Or Sell" : "Or Buy"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TradingForm;
