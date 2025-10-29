import React from "react";
import { Button } from "@/components/ui/button";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import bitcoinIcon from "@/assets/1534906694.svg";
import { Dot, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const Home = () => {
  const [category, setCategory] = React.useState("All");
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const [inputValue, setInputValue] = React.useState("");
  const handleChange = (value) => {
    setInputValue(value.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("User input:", inputValue);
      setInputValue("");
    }
  };

  const [isBotReleased, setIsBotReleased] = React.useState(false);
  const handleBotRelease = () => {
    setIsBotReleased(!isBotReleased);
  };

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-5">
            <Button
              onClick={() => handleCategoryChange("All")}
              variant={category == "All" ? "default" : "outline"}
              className="rounded-full px-6 py-4"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategoryChange("Top50")}
              variant={category == "Top50" ? "default" : "outline"}
              className="rounded-full px-6 py-4"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategoryChange("TG")}
              variant={category == "TG" ? "default" : "outline"}
              className="rounded-full px-6 py-4"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategoryChange("TL")}
              variant={category == "TL" ? "default" : "outline"}
              className="rounded-full px-6 py-4"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>
        <div className="hidden lg:block lg:w-[50%]">
          <StockChart />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar className="ml-2">
                <AvatarImage
                  src={bitcoinIcon}
                  alt="Bitcoin"
                  className="w-8 h-8 object-contain"
                />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600">BTC</p>
                <Dot className="text-gray-600 font-extrabold text-2xl" />
                <p className="text-gray-600">Bitcoin</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-lg font-bold">111492</p>
                <p className="text-red-600">
                  <span>2224350554199</span>
                  <span>(+0.32068%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute bottom-5 right-5 z-22 flex flex-col justify-end gap-2">
        <div className="relative w-40 cursor-pointer group">
          {isBotReleased && (
            <div className="absolute right-0 bottom-full mb-3 z-50">
              <div className="rounded-md w-[20rem] md:w-80 h-[70vh] bg-gray-500 flex flex-col justify-between shadow-lg">
                <div className="flex justify-between items-center px-6 h-12 border-b">
                  <p className="text-lg font-semibold leading-relaxed">
                    Chat Bot
                  </p>
                  <Button
                    onClick={handleBotRelease}
                    variant="ghost"
                    size="icon"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="h-[76%] flex flex-col overflow-y-auto gap-4 px-4 py-4 scroll-container">
                  <div className="self-start pb-5 w-auto">
                    <div className="px-4 py-2 rounded-md bg-slate-800 w-auto">
                      <p>Hi</p>
                      <p>You can ask crypto related any questions</p>
                      <p>like price , market cap etc.</p>
                    </div>
                  </div>
                  {[1, 1, 1, 1, 1, 1].map((item, i) => (
                    <div
                      key={i}
                      className={`${
                        i % 2 === 0 ? "self-start" : "self-end"
                      } pb-5 w-auto`}
                    >
                      {i % 2 === 0 ? (
                        <div className="px-4 py-2 rounded-md bg-slate-800 w-auto">
                          <p>Prompt Who are you?</p>
                        </div>
                      ) : (
                        <div className="px-4 py-2 rounded-md bg-slate-800 w-auto">
                          <p>Ans Hi, Arpit</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="h-[10%] border-t mb-0">
                  <Input
                    className="w-full h-full order-0 outline-none focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none"
                    placeholder="Type your message here..."
                    onChange={handleChange}
                    value={inputValue}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </div>
            </div>
          )}

          <Button
            onClick={handleBotRelease}
            className="w-full h-12 gap-2 items-center"
          >
            <MessageCircle className="fill-[#1e293b] -rotate-90" />
            <span className="text-xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
