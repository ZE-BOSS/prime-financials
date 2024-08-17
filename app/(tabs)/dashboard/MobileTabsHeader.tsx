import React, { useContext, ReactNode, SetStateAction, Dispatch } from "react";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

const MobileTabsHeader = ({ startContent, title, endContent, titleSize }: { startContent?: ReactNode, title: string, endContent?: ReactNode, titleSize?: "sm" | "md" | "lg" | "xl" }) => {

  return (
    <>
      <HStack className="content-center absolute top-0 justify-between w-full px-6 md:hidden">
        <HStack className="items-center justify-between gap-4 mt-4">
          {startContent}
          <Text
            size="md"
            style={{ 
              fontSize: titleSize === "xl"? 25 : titleSize === "lg"? 20 : titleSize === "md"? 20 : 10, 
              fontWeight: titleSize === "xl"? "bold" : titleSize === "lg"? 900 : titleSize === "md"? 600 : 400, 
              marginTop: -9 
            }}
            className={`${
              "text-typography-900"
            }`}
          >
            {title}
          </Text>
        </HStack>
        <Box className="items-center justify-between gap-4 mt-4">
          {endContent}
        </Box>
      </HStack>
    </>
  );
};

export default MobileTabsHeader;