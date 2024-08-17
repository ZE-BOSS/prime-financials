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
    Landmark, 
    Wallet,
} from "lucide-react-native";
import Svg, { Path } from "react-native-svg";
import { 
    MoneyBagIcon, 
    PayBillsIcon,
    DataIcon,
    AirtimeIcon,
    BettingIcon,
    ElectrcityIcon,
    EscrowIcon,
    ReferIcon,
    GiftCardIcon,
    TVIcon,
    CertificateIcon,
    EducationIcon,
    InternetIcon
} from "@/components/svgs/svg";
import GiftCard from "@/assets/images/giftcard.png";

export const Dashboard = () => {
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
            style={{ flex: 1 }} // Make sure ScrollView takes available space
        >
            <Box style={{ 
                width: "90%", 
                height: 250, // Use fixed height for testing
                backgroundColor: "#0BDA51", 
                marginTop: 20, 
                borderRadius: 30,
                shadowColor: "gray",
                shadowOffset: {
                    width: 0, // Adjust shadow offsets for visibility
                    height: 10
                },
                shadowOpacity: 0.5, // Add opacity for visibility
                shadowRadius: 10 // Add shadow radius for effect
            }}>
                <VStack style={{ marginTop: 35, marginLeft: 15, marginBottom: 20, paddingBottom: 5, height: 50 }}>
                    <Text style={{ color: "white", fontSize: 15 }}>Balance</Text>
                    <Text style={{ color: "white", fontSize: 35, fontWeight: 700, paddingTop: 12 }}>₦0.00</Text>
                </VStack>

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
                                style={{ backgroundColor: "white" }}
                            >
                                <Icon className="text-white w-10 h-10" as={Landmark} color="#0BDA51" size={"xl"} />
                            </Box>
                            <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>Account</Text>
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
                                style={{ backgroundColor: "white" }}
                            >
                                <MoneyBagIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>Get Loan</Text>
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
                                style={{ backgroundColor: "white" }}
                            >
                                <Icon className="text-white w-10 h-10" as={Wallet} color="#0BDA51" size={"xl"} />
                            </Box>
                            <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>Withdrawal</Text>
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
                                style={{ backgroundColor: "white" }}
                            >
                                <PayBillsIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>Pay Bills</Text>
                        </VStack>
                    </GridItem>
                </Grid>

                <HStack style={{ marginTop: 5, marginLeft: 15, marginRight: 15, marginBottom: 20, paddingBottom: 5, justifyContent: "space-between" }}>
                    <Text style={{ color: "white", fontSize: 15 }}>Recent Transactions</Text>
                    <Text style={{ color: "white", fontSize: 15, fontWeight: 700 }}>See all {">"}</Text>
                </HStack>
            </Box>
            <Box style={{ 
                width: "90%", 
                height: 100, // Use fixed height for testing
                backgroundColor: "#0BDA51", 
                marginTop: 10, 
                borderRadius: 30,
                shadowColor: "gray",
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                shadowOpacity: 0.5,
                shadowRadius: 10
            }}>
                <HStack style={{ marginTop: 15, marginLeft: 15, marginRight: 15, marginBottom: 20, paddingBottom: 5, justifyContent: "space-between" }}>
                    <VStack style={{ marginTop: 4, marginLeft: 4, marginBottom: 2,}}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: 700, paddingTop: 2 }}>PRIME GIFT CARD</Text>
                        <Text style={{ color: "white", fontSize: 10, marginTop: -4, marginBottom: 4 }}>Trade all kinds of giftcard</Text>
                        <Button
                            className="w-32 h-6"
                            onPress={() => {
                                router.push("/(auth)/register");
                            }}
                            style={{
                                borderRadius: 100,
                                backgroundColor: "white"
                            }}
                        >
                            <ButtonText className="font-bold" style={{ color: "#0BDA51", fontSize: 15  }}>Trade Now</ButtonText>
                        </Button>
                    </VStack>
                    <VStack style={{ marginTop: -25, marginLeft: 2, marginBottom: 2,}}>
                        <Image
                            size={"xl"}
                            className="object-contain"
                            source={GiftCard}
                            alt="image"
                        />
                    </VStack>
                </HStack>
            </Box>
            <Text style={{ 
                width: "90%", 
                marginTop: 20, 
                marginBottom: 7, 
                fontSize: 20,
                fontWeight: 600,
                marginLeft: 20,
            }}>Services</Text>
            <Box style={{ 
                width: "90%", 
                height: 250, // Use fixed height for testing
                backgroundColor: "white", 
                marginTop: 10, 
                borderRadius: 30,
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
                                <DataIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>Data</Text>
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
                                <AirtimeIcon style={{ height: 65, width: 100 }} className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>Airtime</Text>
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
                                <BettingIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>Betting</Text>
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
                                <ElectrcityIcon style={{ height: 80, width: 100 }} className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>Electricity</Text>
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
                                <EscrowIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>Escrow</Text>
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
                                <ReferIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>Refer & Earn</Text>
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
                                <PayBillsIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>Pay Bills</Text>
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
                                <GiftCardIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>GiftCard</Text>
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
                                <TVIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>TV</Text>
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
                                <CertificateIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>WAEC</Text>
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
                                <EducationIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>Education</Text>
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
                                <InternetIcon className="w-10 h-10 mt-4" fill="#0BDA51"/> 
                            </Box>
                            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, marginTop: -6 }}>internet</Text>
                        </VStack>
                    </GridItem>
                </Grid>
            </Box> 
        </ScrollView>
    </SafeAreaView>
  );
};
