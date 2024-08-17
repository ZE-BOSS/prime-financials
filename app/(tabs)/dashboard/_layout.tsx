import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import React, { useEffect, ReactNode } from "react";
import { StatusBar, Platform } from "react-native";
import { Box } from "@/components/ui/box";
import MobileBottomTabs from "./MobileBottomTabs";
import {
  Plus,
  Home,
  MessageCircle,
  User,
  SlidersHorizontal,
} from "lucide-react-native";
import DashboardTab from "./DashboardTab";
import LoanTab from "./LoanTab";
import { HomeIcon, MoneyBagIcon, SavingsIcon, UserIcon } from '@/components/svgs/svg';
import MobileTabsHeader from './MobileTabsHeader';
import SavingsTab from './SavingsTab';

const bottomTabs: { label: "Home" | "Loan" | "Savings" | "Me", icon?: ReactNode, disabled?: boolean }[] = [
  {
    label: "Home",
  },
  {
    label: "Loan",
  },
  {
    label: "Savings",
  },
  {
    label: "Me",
  },
];

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />; 
}

export default function DashboardLayout() {
  const colorScheme = useColorScheme();
  useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, []);

  const [activeTab, setActiveTab] = React.useState<"Home" | "Loan" | "Savings" | "Me">("Home");

  return (
    <>
      <Box className="flex-1 bg-white">
        <StatusBar  />
        <Box className="flex-1">
          <DashboardTab isActive={activeTab === "Home"} />
          <LoanTab isActive={activeTab === "Loan"} />
          <SavingsTab isActive={activeTab === "Savings"} />
        </Box>
        {/* mobile bottom tabs */}
        <Box className="h-[72px] items-center w-full flex md:hidden shadow-lg">
          <MobileBottomTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            bottomTabs={bottomTabs}
          />
        </Box>
      </Box>
      {/* )} */}
    </>
  );
}