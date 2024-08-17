import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { GluestackIcon } from "./assets/icons/gluestack-icon";
import { useRouter } from "expo-router";
import { Image } from "@/components/ui/image";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { 
  Link,
  LinkText
} from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "@/components/ui/scroll-view";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Grid, GridItem } from '@/components/ui/grid';
import { 
    ChevronRight
} from "lucide-react-native";
import { 
    PersonalLoanIcon,
    WorkLoanIcon
} from "@/components/svgs/svg";
import { Pressable } from "@/components/ui/pressable";

export const Loan = () => {
  const router = useRouter();

  return (
    <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", width: "100%" }} // Ensure full screen usage
    >
        <ScrollView
            contentContainerStyle={{
                paddingBottom: 10, // Ensure this does not limit visibility
                alignItems: 'center' // Center children horizontally
            }}
            style={{ flex: 1, paddingTop: 30 }} // Make sure ScrollView takes available space
        >
            <Text style={{ 
                width: "90%", 
                height: 20,
                paddingBottom: 20, 
                marginBottom: 7, 
                fontSize: 20,
                fontWeight: 700,
                marginLeft: 20,
            }}>What Loan would you like?</Text>
            <Box style={{ 
                width: "90%", 
                height: 70, // Use fixed height for testing
                backgroundColor: "#FFFFFF", 
                marginTop: 10, 
                borderRadius: 10,
                shadowColor: "gray",
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                shadowOpacity: 0.5,
                shadowRadius: 10
            }}>
                <Pressable onPress={() => router.push("(loan)/personal")}>
                    <HStack style={{ marginTop: 15, marginLeft: 15, marginRight: 15, marginBottom: 20, paddingBottom: 5, justifyContent: "space-between" }}>
                        <HStack style={{ justifyContent: "space-between" }}>
                            <PersonalLoanIcon style={{ width: 50, height: 50 }} className={"w-10 h-10"} fill={"#0BDA51"} />
                            <VStack style={{ marginTop: 4, marginBottom: 2,}}>
                                <Text style={{ color: "black", fontSize: 20, fontWeight: 500, paddingTop: 2 }}>Personal Loan</Text>
                                <Text className="text-typography-400" style={{ fontSize: 12, marginTop: -4, marginBottom: 4 }}>Apply for low interest loans {/**", Get loans in minutes"*/}</Text>
                            </VStack>
                        </HStack>
                        <VStack style={{ marginTop: 10, marginLeft: 2, marginBottom: 2,}}>
                            <Icon as={ChevronRight} size="xl" />
                        </VStack>
                    </HStack>
                </Pressable>
            </Box>
            <Box style={{ 
                width: "90%", 
                height: 70, // Use fixed height for testing
                backgroundColor: "#FFFFFF", 
                marginTop: 10, 
                borderRadius: 10,
                shadowColor: "gray",
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                shadowOpacity: 0.5,
                shadowRadius: 10
            }}>
                <Pressable onPress={() => router.push("(loan)/company")}>
                    <HStack style={{ marginTop: 15, marginLeft: 15, marginRight: 15, marginBottom: 20, paddingBottom: 5, justifyContent: "space-between" }}>
                        <HStack style={{ justifyContent: "space-between" }}>
                            <WorkLoanIcon style={{ width: 50, height: 50 }} className={"w-10 h-10"} fill={"#0BDA51"} />
                            <VStack style={{ marginTop: 4, marginBottom: 2,}}>
                                <Text style={{ color: "black", fontSize: 20, fontWeight: 500, paddingTop: 2 }}>Working Loan</Text>
                                <Text className="text-typography-400" style={{ fontSize: 12, marginTop: -4, marginBottom: 4 }}>Apply for a work loans {/**", Fund your business today"*/}</Text>
                            </VStack>
                        </HStack>
                        <VStack style={{ marginTop: 10, marginLeft: 2, marginBottom: 2,}}>
                            <Icon as={ChevronRight} size="xl" />
                        </VStack>
                    </HStack>
                </Pressable>
            </Box>
        </ScrollView>
    </SafeAreaView>
  );
};
