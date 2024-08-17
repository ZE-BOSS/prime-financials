import React, { useEffect } from "react";
import { StatusBar, Platform } from "react-native";
import { SplashScreen } from '@/screens/splash';

export default function DashboardLayout() {
  useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, []);

  const [activeTab, setActiveTab] = React.useState("Dashboard");

  return (
    <>
      <SplashScreen />
    </>
  );
}