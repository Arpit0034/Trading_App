import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import PaymentsDetailsForm from "./PaymentsDetailsForm";
import { Dialog , DialogContent , DialogHeader , DialogTitle , DialogTrigger } from "@/components/ui/dialog"; 

const PaymentDetails = () => {
  return (
    <div className="px-20">
      <h1 className="text-3xl py-10 font-bold">Payment Details</h1>
      {false ? <Card>
        <CardHeader>
          <CardTitle>Yes Bank</CardTitle>
          <CardDescription>A/C No : *************1234</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <p className="w-32">A/C Holder</p>
            <p className="text-gray-400">: Arpit</p>
          </div>
          <div className="flex items-center">
            <p className="w-32">IFSC</p>
            <p className="text-gray-400">: YESB000007</p>
          </div>
        </CardContent>
      </Card> 
        :
      <Dialog>
        <DialogTrigger asChild>
          <Button className="py-6">Add Payment details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          <PaymentsDetailsForm />
        </DialogContent>
      </Dialog>}
    </div>
  );
};

export default PaymentDetails;
