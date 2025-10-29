import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AccountVerificationForm from "./AccountVerificationForm";

const Profile = () => {
  const [verifyDialogOpen, setVerifyDialogOpen] = React.useState(false);

  const handleEnableTwoStepVerification = () => {
    console.log("Success");
    setVerifyDialogOpen(false); 
  };

  return (
    <div className=" flex flex-col items-center mb-6">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className={"pb-9"}>
            <CardTitle className={"font-bold text-2xl pb-4"}>
              Your Information
            </CardTitle>
            <CardContent>
              <div className="flex gap-24 lg:gap-36">
                <div className="space-y-7">
                  <div className="flex gap-4">
                    <p className="w-24 lg:w-32">Email :</p>
                    <p className="text-gray-500">kandariarpit096@gmail.com</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="w-24 lg:w-32">Full Name :</p>
                    <p className="text-gray-500">Arpit Kandari</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="w-24 lg:w-32">DOB :</p>
                    <p className="text-gray-500">1/1/1</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="w-24 lg:w-32">Nationality :</p>
                    <p className="text-gray-500">Indian</p>
                  </div>
                </div>
                <div className="space-y-7">
                  <div className="flex gap-4">
                    <p className="w-24 lg:w-32">Address :</p>
                    <p className="text-gray-500">India</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="w-24 lg:w-32">City :</p>
                    <p className="text-gray-500">Dehradun</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="w-24 lg:w-32"> PostCode :</p>
                    <p className="text-gray-500">111111</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="w-24 lg:w-32">Country :</p>
                    <p className="text-gray-500">India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>

        <div className="mt-6">
          <Card className={"w-full"}>
            <CardHeader className={"pb-7"}>
              <div className="flex gap-3 items-center">
                <CardTitle>Two Step Verification</CardTitle>
                {true ? (
                  <Badge className="text-white bg-green-600 space-x-2 py-2 flex gap-0">
                    <BadgeCheckIcon
                      style={{ width: "1.2rem", height: "1.2rem" }}
                    />
                    <span className="text-sm">Enabled</span>
                  </Badge>
                ) : (
                  <Badge className={"bg-orange-600 py-2 px-3 text-sm"}>
                    Disabled
                  </Badge>
                )}
              </div>
              <CardContent>
                <div>
                  <Dialog
                    open={verifyDialogOpen}
                    onOpenChange={setVerifyDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button onClick={() => setVerifyDialogOpen(true)}>
                        Enable Two Step Verification
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Verify Your Account</DialogTitle>
                      </DialogHeader>
                      <AccountVerificationForm
                        onVerificationSuccess={() => setVerifyDialogOpen(false)}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
