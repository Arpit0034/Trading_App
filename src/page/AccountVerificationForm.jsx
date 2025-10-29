import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const AccountVerificationForm = ({ onVerificationSuccess }) => {
  const [value, setValue] = React.useState("");
  
  const handleSubmit = () => {
    console.log(value);

    if (onVerificationSuccess) {
      onVerificationSuccess();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="space-y-5 mt-2 w-full">
        <div className="flex justify-between items-center">
          <p>Email : </p>
          <p>abc@gmail.com</p>
          <Dialog> 
            <DialogTrigger asChild>
              <Button onClick={() => setValue("")}>Send OTP</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter OTP</DialogTitle>
              </DialogHeader>
              <div className="py-4 flex flex-col gap-6 justify-center items-center">
                <InputOTP 
                  value={value} 
                  onChange={setValue} 
                  maxLength={6}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <div className="flex gap-4">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild> 
                    <Button
                      onClick={handleSubmit}
                      className="w-24"
                      disabled={value.length !== 6}
                    >
                      Submit
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationForm;