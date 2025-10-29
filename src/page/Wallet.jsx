import React from "react";
import {
  WalletCards,
  WalletMinimal,
  Copy,
  RotateCcw,
  CircleDollarSign,
  Upload,
  Shuffle,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TopupForm from "./TopupForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";
import { ShuffleIcon, UpdateIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[50%]">
        <Card>
          <CardHeader className="pb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletMinimal className="w-8 h-8 text-white-500" />
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-2xl">My Wallet</CardTitle>
                  <div className="flex gap-2">
                    <p className="text-gray-400 text-sm">#QRISD435</p>
                    <Copy className="cursor-pointer text-gray-300 text-sm h-4 w-4" />
                  </div>
                </div>
              </div>
              <div>
                <RotateCcw className="cursor-pointer text-gray-300 h-6 w-6" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CircleDollarSign className="h-10 w-10 text-green-500" />
              <span className="text-2xl font-bold">27643</span>
            </div>
            <div className="flex gap-8 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div className="h-28 w-28 flex flex-col items-center justify-center rounded-md shadow-sm  shadow-slate-200">
                    <Upload className="h-6 w-6 text-white-500" />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-xl text-center">
                      Top up your wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TopupForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="h-28 w-28 flex flex-col items-center justify-center rounded-md shadow-sm  shadow-slate-200">
                    <WalletCards className="h-6 w-6" />
                    <span className="text-sm mt-2 leading-relaxed">
                      Withdrawal
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center ">
                      Request Withdrawal
                    </DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="h-28 w-28 flex flex-col items-center justify-center rounded-md shadow-sm  shadow-slate-200">
                    <Shuffle className="h-6 w-6 text-white-500" />
                    <span className="text-sm mt-2 leading-relaxed">
                      Transfer
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-xl text-center">
                      Transfer Money to other Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl font-semibold">History</h1>
            <UpdateIcon className="h-6 w-6 p-0 cursor-pointer hover:text-gray-500" />
          </div>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1].map((item, index) => {
              return (
                <Card
                  key={index}
                  className="px-5 flex flex-row p-2 justify-between"
                >
                  <div className="flex gap-3 items-center">
                    <Avatar className="rounded-full border-3 h-9 w-9 flex items-center justify-center border-gray-700 bg-gray-700">
                      <AvatarFallback>
                        <ShuffleIcon className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                      <h1 className="leading-relaxed">Buy Asset</h1>
                      <p className="text-sm text-gray-500">2025-10-27</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-green-600">$999 USD</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
