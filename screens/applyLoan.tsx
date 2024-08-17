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

export const ApplyLoan = () => {
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
        setSuccess(false)
    }, 5000);
  }, [success]);
  
  return (
    <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", width: "100%" }} // Ensure full screen usage
    >
        <HStack className="md:items-center" space="md" style={{ marginTop: 20, marginBottom: 10, marginLeft: 10 }}>
            <Pressable
            onPress={() => {
                router.back();
            }}
            style={{ flexDirection: "row" }}
            >
                <Icon
                    as={ChevronLeftIcon}
                    className="md:hidden text-background-800"
                    style={{ marginTop: 5 }}
                    size="xl"
                />
                <VStack>
                    <Heading className="md:text-center" size="xl">
                        Apply
                    </Heading>
                </VStack>
            </Pressable>
        </HStack>
        <ScrollView
            contentContainerStyle={{
                paddingBottom: 10, // Ensure this does not limit visibility
                alignItems: 'center' // Center children horizontally
            }}
            style={{ flex: 1 }} // Make sure ScrollView takes available space
        >
            <HStack className="md:items-center" space="md" style={{ width: "90%", marginTop: 20, marginBottom: 10, justifyContent: "space-between" }}>
                <VStack style={{ }}>
                    <Text style={{ 
                        width: "90%", 
                        marginBottom: 7, 
                        fontSize: 15,
                        fontWeight: 400,
                        marginLeft: 20,
                    }}>Loanable Amount</Text>
                    <Text style={{ 
                        width: "90%",  
                        marginBottom: 7, 
                        fontSize: 25,
                        fontWeight: 700,
                        lineHeight: 26,
                        marginLeft: 20,
                    }}>₦150,000</Text>
                </VStack>
                <VStack>
                    <Text style={{ 
                        width: "90%", 
                        marginBottom: 7, 
                        fontSize: 15,
                        fontWeight: 400,
                        marginLeft: 20,
                    }}>Loan Peroid</Text>
                    <Text style={{ 
                        width: "90%", 
                        marginBottom: 7, 
                        fontSize: 25,
                        fontWeight: 700,
                        lineHeight: 26,
                        marginLeft: 20,
                    }}>3 months</Text>
                </VStack>
            </HStack>
            <HStack className="md:items-center" space="md" style={{ width: "90%", marginTop: 5, marginBottom: 10, justifyContent: "space-between" }}>
                <VStack>
                    <Text style={{ 
                        width: "90%", 
                        marginBottom: 7, 
                        fontSize: 15,
                        fontWeight: 400,
                        marginLeft: 20,
                    }}>interest</Text>
                    <Text style={{ 
                        width: "90%", 
                        marginBottom: 7, 
                        fontSize: 20,
                        fontWeight: 700,
                        marginLeft: 20,
                        color: "#0BDA51"
                    }}>₦5,345</Text>
                </VStack>
                <VStack>
                    <Text style={{ 
                        width: "90%",  
                        marginBottom: 7, 
                        fontSize: 15,
                        fontWeight: 400,
                        marginLeft: 20,
                    }}>Service Fee</Text>
                    <Text style={{ 
                        width: "90%", 
                        marginBottom: 7, 
                        fontSize: 20,
                        fontWeight: 700,
                        marginLeft: 20,
                        color: "#0BDA51"
                    }}>₦315</Text>
                </VStack>
                <VStack>
                    <Text style={{ 
                        width: "90%",  
                        marginBottom: 7, 
                        fontSize: 15,
                        fontWeight: 400,
                        marginLeft: 20,
                    }}>Loan Agreement</Text>
                    <Text style={{ 
                        width: "90%", 
                        marginBottom: 7, 
                        fontSize: 20,
                        fontWeight: 700,
                        marginLeft: 20,
                        color: "#0BDA51"
                    }}>View {">"}</Text>
                </VStack>
            </HStack>
            <Button 
                onPress={() => { setSuccess(true) }}
                style={{ backgroundColor: "#0BDA51", marginVertical: 15, height: 60, width: "90%", borderRadius: 20 }}
            >
                <ButtonText className="font-medium">Apply For Loan</ButtonText>
            </Button>
            <Box style={{ 
                width: "90%", 
                height: 110, // Use fixed height for testing
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
                <Grid 
                    className="gap-0" 
                    _extra={{
                        className: 'grid-cols-4'
                    }} 
                    style={{ marginTop: 5, marginLeft: 2, marginBottom: 20 }}
                >
                    <GridItem
                        _extra={{
                            className: 'col-span-1'
                        }}
                    > 
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Box 
                                className="w-16 h-16 flex justify-center items-center bg-white rounded-full" 
                                style={{ backgroundColor: "white", marginTop: 6 }}
                            >
                                <EditIcon className="w-10 h-10 mt-4" fill="#000000"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6, width: 50, textAlign: "center", lineHeight: 19 }}>Edit Amount</Text>
                        </VStack>
                    </GridItem>
                    <GridItem
                        _extra={{
                            className: 'col-span-1'
                        }}
                    > 
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Box 
                                className="w-16 h-16 flex justify-center items-center bg-white rounded-full" 
                                style={{ backgroundColor: "white", marginTop: 6 }}
                            >
                                <RepayIcon style={{ height: 65, width: 100 }} className="w-10 h-10 mt-4" fill="#000000"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6, width: 50, textAlign: "center", lineHeight: 19 }}>How to Repay</Text>
                        </VStack>
                    </GridItem>
                    <GridItem
                        _extra={{
                            className: 'col-span-1'
                        }}
                    > 
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Box 
                                className="w-16 h-16 flex justify-center items-center bg-white rounded-full" 
                                style={{ backgroundColor: "white", marginTop: 6 }}
                            >
                                <HelpIcon className="w-10 h-10 mt-4" fill="#000000"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6, width: 50, textAlign: "center", lineHeight: 19 }}>Help</Text>
                        </VStack>
                    </GridItem>
                    <GridItem
                        _extra={{
                            className: 'col-span-1'
                        }}
                    > 
                        <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                            <Box 
                                className="w-16 h-16 flex justify-center items-center bg-white rounded-full" 
                                style={{ backgroundColor: "white", marginTop: 6 }}
                            >
                                <RecordIcon style={{ height: 70, width: 100 }} className="w-10 h-10 mt-4" fill="#000000"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6, width: 50, textAlign: "center", lineHeight: 19 }}>Loan Records</Text>
                        </VStack>
                    </GridItem>
                </Grid>
            </Box> 
        </ScrollView>
        <ApplySuccess isActive={success} />
    </SafeAreaView>
  );
};
