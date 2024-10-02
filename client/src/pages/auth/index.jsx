import Background from "../../assets/login2.png";
import Victory from "../../assets/victory.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import apiClient from "@/lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/store";

const Auth = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const validateLogin = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    return true;
  };
  const validateSignup = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password should be same.");
      return false;
    }
    return true;
  };
  const handleLogin = async () => {
    try {
      if (validateLogin()) {
        const response = await apiClient.post(
          LOGIN_ROUTE,
          { email, password },
          { withCredentials: true }
        );
        if (response.data.user.id) {
          setUserInfo(response.data.user);
          if (response.data.user.profileSetup) navigate("/chat");
          else navigate("/profile");
        } else {
          console.log("error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async () => {
    try {
      if (validateSignup()) {
        const response = await apiClient.post(
          SIGNUP_ROUTE,
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        if (response.status === 201) {
          setUserInfo(response.data.user);
          navigate("/profile");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-[radial-gradient(circle_at_left,#252C67,#101332)]">
      <div className="h-[80vh]  border-2 border-none  text-opacity-90  w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex  items-center justify-center flex-col">
            <div className="flex  items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white">Welcome</h1>

            </div>
            <p className="font-medium text-center text-white">
            The Chat App Designed for Productivity!
            </p>
          </div>
          <div className="flex items-center justify-center w-full ">
            <Tabs defaultValue="login" className="w-3/4">
              <TabsList className="bg-transparent rounded-none w-full ">
                <TabsTrigger
                  className="data-[state=active]:bg-transparent text-white text-opacity-50 border-b-2 border-b-[#252C67]   rounded-none w-full data-[state=active]:text-white  data-[state=active]:font-semibold data-[state=active]:border-b-white p-3 transition-all duration-300"
                  value="login"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-transparent text-white  text-opacity-50 border-b-2 border-b-[#252C67]   rounded-none w-full data-[state=active]:text-white  data-[state=active]:font-semibold data-[state=active]:border-b-white p-3 transition-all duration-300 "
                  value="signup"
                >
                  Signup
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="flex flex-col gap-5 mt-10">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6 bg-[#252C67] border-none text-white outline-none focus:outline-none focus:ring-0 focus:border-transparent"  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6 bg-[#252C67] border-none text-white outline-none focus:outline-none focus:ring-0 focus:border-transparent"  
                                  
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="rounded-full p-6 bg-gradient-to-r from-[#65FA7D] to-[#24A488] hover:from-[#4bcf68] hover:to-[#1f8f71]" onClick={handleLogin}>
                  Login
                </Button>
              </TabsContent>
              <TabsContent value="signup" className="flex flex-col gap-5 ">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6 bg-[#252C67] border-none text-white outline-none focus:outline-none focus:ring-0 focus:border-transparent"  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6 bg-[#252C67] border-none text-white outline-none focus:outline-none focus:ring-0 focus:border-transparent"  
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-full p-6 bg-[#252C67] border-none text-white outline-none focus:outline-none focus:ring-0 focus:border-transparent"  
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button className="rounded-full p-6 bg-gradient-to-r from-[#65FA7D] to-[#24A488] hover:from-[#4bcf68] hover:to-[#1f8f71]" onClick={handleSignup}>
                  Signup
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center ">
          <img src={Background} className="h-[500px] " />
        </div>

        {/* Login Signup COmponent */}
        {/* Branding */}
      </div>
    </div>
  );
};

export default Auth;
