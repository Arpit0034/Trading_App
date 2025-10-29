import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

const TopupForm = () => {
  const [amount, setAmount] = React.useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");
  const handlePaymentMethodChange = (val) => {
    setPaymentMethod(val);
  };

  const handleSubmit = () => {
    console.log(amount, paymentMethod);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-2 pl-2">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          className="text-lg py-7"
          placeholder="$9999"
        />
      </div>
      <div>
        <h1 className="pb-2">Select Payment Method</h1>
        <RadioGroup
          className="flex justify-between"
          onValueChange={(val) => handlePaymentMethodChange(val)}
          defaultValue="RAZORPAY"
        >
          <div className="flex items-center space-x-2 border p-3 px-3 rounded-md">
            <RadioGroupItem
              icon={DotIcon}
              className="h-9 w-9"
              value="RAZORPAY"
              id="op1"
            ></RadioGroupItem>
            <Label htmlFor="op1">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                  alt=""
                />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 border p-3 px-3 rounded-md">
            <RadioGroupItem
              icon={DotIcon}
              className="h-9 w-9"
              value="STRIPE"
              id="op2"
            ></RadioGroupItem>
            <Label htmlFor="op2">
              <div className="bg-white rounded-md px-9 py-1.5 w-32">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                  alt=""
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
        <DialogClose className="w-full">
          <Button
            onClick={handleSubmit}
            className="bg-white h-12 text-2xl mt-6 w-full text-center block"
          >
            Submit
          </Button>
        </DialogClose>
      </div>
    </div>
  );
};

export default TopupForm;
