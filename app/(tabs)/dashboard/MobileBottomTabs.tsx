import React, { useContext, ReactNode, SetStateAction, Dispatch } from "react";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HomeIcon, MoneyBagIcon, SavingsIcon, UserIcon, HelpIcon } from '@/components/svgs/svg';

const MobileBottomTabs = ({ bottomTabs, activeTab, setActiveTab }: {
  bottomTabs: { label: "Home" | "Loan" | "Savings" | "Me", icon?: ReactNode, disabled?: boolean }[],
  activeTab: "Home" | "Loan" | "Savings" | "Me",
  setActiveTab: Dispatch<SetStateAction<"Home" | "Loan" | "Savings" | "Me">>
}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [actionsheetVisible, setActionsheetVisible] = React.useState(false);

  return (
    <>
      <HStack className="content-center absolute top-3 justify-between w-full px-6 md:hidden">
        {bottomTabs.map((tab) => {
          return (
            <Pressable
              key={tab.label}
              onPress={() => {
                setActiveTab(tab.label);
              }}
              disabled={tab.disabled}
              //@ts-ignore
              opacity={tab.disabled ? 0.5 : 1}
            >
              <VStack className="items-center">
                {tab.label === "Home" && <HomeIcon className="w-10 h-10" style={{ height: 50, width: 35 }} fill={activeTab === "Home"? "#0BDA51" : "#000000"}/>}
                {tab.label === "Loan" && <MoneyBagIcon className="w-10 h-10" style={{ height: 50, width: 35 }} fill={activeTab === "Loan"? "#0BDA51" : "#000000"}/>}
                {tab.label === "Savings" && <SavingsIcon className="w-10 h-10 mt-4" style={{ height: 50, width: 35 }} fill={activeTab === "Savings"? "#0BDA51" : "#000000"}/>}
                {tab.label === "Me" && <UserIcon className="w-10 h-10" style={{ height: 50, width: 35 }} fill={activeTab === "Me"? "#0BDA51" : "#000000"}/>} 
                <Text
                  size="md"
                  style={{ fontSize: 12, fontWeight: 700, marginTop: -9 }}
                  className={`${
                    activeTab === tab.label
                      ? "text-[#0BDA51]"
                      : "text-typography-400"
                  }`}
                >
                  {String(tab.label)}
                </Text>
              </VStack>
            </Pressable>
          );
        })}
      </HStack>
    </>
  );
};

export default MobileBottomTabs;