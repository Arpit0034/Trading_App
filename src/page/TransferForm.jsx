import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { amd } from "globals";
const TransferForm = () => {
  const [formData, setFormData] = React.useState({
    amount: "",
    walletId: "",
    purpose: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(formData) ;
  }
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-2">Enter Amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-7"
          placeholder="$9999"
        />
      </div>
      <div>
        <h1 className="pb-2">Wallet Id</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-7"
          placeholder="#AERE31451"
        />
      </div>
      <div>
        <h1 className="pb-2">Purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-6"
          placeholder="Gift for your friend"
        />
      </div>
      <DialogClose className="w-full">
        <Button
          onClick = {handleSubmit}
          className="bg-white h-12 text-2xl mt-2 w-full text-center"
        >
          Submit
        </Button>
      </DialogClose>
    </div>
  );
};

export default TransferForm;
