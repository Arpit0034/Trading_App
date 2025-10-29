import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
const WithdrawalForm = () => {
  const [amount, setAmount] = React.useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = () => {
    console.log(amount);
  };

  return (
    <div className="pt-6 space-y-4">
      <div className="flex justify-between gap-4 items-center rounded-md bg-slate-700 text-xl font-bold px-5 py-4">
        <p>Available Balance</p>
        <p>$9000</p>
      </div>
      <div className="flex flex-col items-center gap-6 mt-6">
        <h1 className="text-xl leading-relaxed font-bold">
          Enter Withdrawal Amount
        </h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="wi py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
            placeholder="$9999"
            type="number"
          />
        </div>
      </div>
      <div>
        <p className=" pl-2 pb-2">Transfer to</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img
            className="h-8 w-8"
            src="https://cdn.pixabay.com/photo/2020/02/18/11/03/bank-4859142_1280.png"
            alt=""
          />
          <div>
            <p className="text-l font-bold">Yes Bank</p>
            <p classname="text-xs">***********1432</p>
          </div>
        </div>
      </div>

      <DialogClose className="w-full">
        <Button
          onClick={handleSubmit}
          className="bg-white h-12 text-2xl mt-4 w-full text-center block"
        >
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
