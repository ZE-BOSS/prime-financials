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
import BackgroundImage from "@/assets/images/background-image.webp";
import { Text } from "@/components/ui/text";
import { LinearGradient } from 'expo-linear-gradient';

export const SplashScreen = () => {
  const router = useRouter();
  return (
    <VStack
      className="w-screen items-center h-screen justify-center"
      space="lg"
    >
      <Box className="relative w-full" style={{ width: "100%" }}>
        <Box style={{ position: "absolute", top: 50, zIndex: 20, height: "20%", width: "100%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 35, lineHeight: 40, width: "90%", textAlign: "center", fontWeight: "500" }}>Fund Your Idea, With Prime Finance Loan Today</Text>
        </Box>
        <Image
          size={"full"}
          className="w-full h-full object-contain"
          source={BackgroundImage}
          alt="image"
        />
      </Box>
      <LinearGradient
        // Button Linear Gradient
        className=""
        colors={['rgba(0, 0, 0, 0)', '#0BDA51']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ 
          position: "absolute", 
          backgroundColor: "transparent", 
          width: "100%", 
          height: 300,
          bottom: 0,
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <VStack className="flex w-full px-4 h-16 justify-center items-center" space="sm" style={{ width: "70%", marginBottom: 35 }}>
          <Button
              className="w-full h-full"
              onPress={() => {
                  router.push("/(auth)/register");
              }}
              style={{
                borderRadius: 100,
                backgroundColor: "white"
              }}
          >
              <ButtonText className="font-bold text-2xl" style={{ color: "#0BDA51"  }}>Register</ButtonText>
          </Button>
          <HStack>
            <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>Have an Account?</Text>
            <Link onPress={() => {
                  router.push("/(auth)/login");
            }}>
              <LinkText style={{ fontSize: 14, fontWeight: 800 }} className="no-underline"> Log in</LinkText>
            </Link>
          </HStack>
        </VStack>
      </LinearGradient>
    </VStack>
  );
};