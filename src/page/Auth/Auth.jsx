import React from "react";
import Lightning from "../Lightning";
import Signup from "./Signup";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Signin from "./Signin";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Configuration for different auth routes
  const authConfig = {
    "/signup": {
      title: "Create Your Account",
      component: <Signup />,
      alternateText: "Already have an account?",
      alternateButton: "Login",
      alternatePath: "/signin",
      showForgotPassword: false
    },
    "/forgot-password": {
      title: "Reset Your Password",
      component: <ForgotPassword />,
      alternateText: "Back to login?",
      alternateButton: "Login",
      alternatePath: "/signin",
      showForgotPassword: false
    },
    "/signin": {
      title: "Welcome Back",
      component: <Signin />,
      alternateText: "Don't have an account?",
      alternateButton: "Register",
      alternatePath: "/signup",
      showForgotPassword: true
    }
  };

  const currentConfig = authConfig[location.pathname] || authConfig["/signin"];

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Lightning hue={230} intensity={1} speed={1}>
        <div className="h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-black/60 backdrop-blur-md border border-blue-500/30 rounded-lg shadow-2xl shadow-blue-500/20">
            {/* Header */}
            <div className="text-center space-y-2 p-4">
              <h1 className="py-4 text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Trading Buddy
              </h1>
              <p className="text-blue-200/80 text-semibold mt-2">
                {currentConfig.title}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-4 p-6 pt-0">
              {/* Auth Form */}
              <div key={location.pathname} className="transition-all duration-300">
                {currentConfig.component}
              </div>

              {/* Alternate Auth Option */}
              <div className="flex items-center justify-center gap-4 py-2 border-2 border-blue-500/20 w-[80%] mx-auto rounded-md">
                <span className="text-blue-100/80 text-sm">
                  {currentConfig.alternateText}
                </span>
                <Button
                  onClick={() => navigate(currentConfig.alternatePath)}
                  variant="ghost"
                  className="text-blue-300 hover:text-white hover:bg-blue-500/20 transition-colors duration-200 font-medium px-3 h-auto text-sm"
                >
                  {currentConfig.alternateButton}
                </Button>
              </div>

              {/* Forgot Password (only on signin) */}
              {currentConfig.showForgotPassword && (
                <div className="text-center">
                  <Button
                    onClick={() => navigate("/forgot-password")}
                    variant="link"
                    className="text-blue-300 hover:text-white transition-colors duration-200 font-normal text-sm"
                  >
                    Forgot your password?
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Lightning>
    </div>
  );
};

export default Auth;