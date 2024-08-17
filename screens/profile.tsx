import React, { useState, useEffect } from "react";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useRouter } from "expo-router";
import { Image } from "@/components/ui/image";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { 
  Link,
  LinkText
} from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { ScrollView } from "@/components/ui/scroll-view";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Grid, GridItem } from '@/components/ui/grid';
import { 
    ChevronLeft,
    ChevronLeftIcon,
    Landmark, 
    Wallet,
} from "lucide-react-native";
import { 
    HelpIcon,
    RecordIcon,
    ElectrcityIcon,
    EditIcon,
    RepayIcon
} from "@/components/svgs/svg";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "@/components/ui/pressable";
import ApplySuccess from "@/modals/applySuccess";

export const ProfileScreen = () => {
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false);
  const [records, setRecord] = useState<{interest: string, duration: string}[]>([
    {interest: "10", duration: "7"},
    {interest: "10", duration: "30"},
    {interest: "12", duration: "60"},
    {interest: "15", duration: "90"},
    {interest: "18", duration: "180"},
    {interest: "20", duration: "365"},
  ]);
  
  return (
    <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", width: "100%" }} // Ensure full screen usage
    >
        <ScrollView
            contentContainerStyle={{
                paddingBottom: 10, // Ensure this does not limit visibility
                alignItems: 'center' // Center children horizontally
            }}
            style={{ flex: 1 }} // Make sure ScrollView takes available space
        >
            <Text style={{ 
                width: "90%",  
                marginBottom: 7, 
                fontSize: 10,
                fontWeight: 600,
                marginLeft: 20,
            }}>Choose your preffered Savings Plan with up to 20% interest rate</Text>

            <VStack style={{ 
                width: "90%", // Use fixed height for testing
                backgroundColor: "white", 
                marginTop: 10, 
                borderRadius: 20,
                shadowColor: "gray",
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                shadowOpacity: 0.5,
                shadowRadius: 10
            }}>
                <Box style={{ height: 10, width: "100%" }} />
                {records.map((record) =>
                    <HStack className="md:items-center" space="md" style={{ width: "90%", marginBottom: 10, alignItems: "center", justifyContent: "space-between" }}>
                        <HStack className="md:items-center" space="md" style={{ marginBottom: 10, justifyContent: "space-between" }}>
                            <VStack style={{ }}>
                                <Text style={{ 
                                    width: "90%",  
                                    fontSize: 20,
                                    fontWeight: 800,
                                    lineHeight: 26,
                                    marginLeft: 20,
                                }}>{record.interest}
                                    <Text style={{ 
                                        width: "90%",  
                                        fontSize: 15,
                                        fontWeight: 800,
                                        lineHeight: 26,
                                        marginLeft: 20,
                                    }}>%</Text>
                                </Text>
                                <Text style={{ 
                                    width: "90%", 
                                    fontSize: 10,
                                    fontWeight: 500,
                                    marginLeft: 20,
                                }}>Interest p.a</Text>
                            </VStack>
                            <VStack style={{ }}>
                                <Text style={{ 
                                    width: "90%",  
                                    fontSize: 20,
                                    fontWeight: 800,
                                    lineHeight: 26,
                                    marginLeft: 20,
                                }}>{record.duration} 
                                    <Text style={{ 
                                        width: "90%",   
                                        fontSize: 15,
                                        fontWeight: 800,
                                        lineHeight: 26,
                                        marginLeft: 20,
                                    }}>Days</Text>
                                </Text>
                                <Text style={{ 
                                    width: "90%", 
                                    fontSize: 10,
                                    fontWeight: 500,
                                    marginLeft: 20,
                                }}>Duration</Text>
                            </VStack>
                        </HStack> 
                        <Button 
                            onPress={() => { setSuccess(true) }}
                            style={{ backgroundColor: "#0BDA51", marginVertical: 15, height: 30, width: 70, borderRadius: 10 }}
                        >
                            <ButtonText className="font-medium">Save</ButtonText>
                        </Button>
                    </HStack> 
                 )}  
            </VStack> 
        </ScrollView>
    </SafeAreaView>
  );
};
