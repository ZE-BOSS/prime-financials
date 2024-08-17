import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Box } from "@/components/ui/box";
import { Text } from '@/components/ui/text';
import { VerifiedIcon } from '@/components/svgs/svg';

export default function ApplySuccess({ isActive }: { isActive: boolean }) {
  return (
    isActive && <Box style={styles.container}>
      <VerifiedIcon style={{ height: 65, width: 100 }} className="w-10 h-10 mt-4" fill="#0BDA51"/>
      <Text style={styles.title}>
        Completed!
      </Text>
      <Text style={styles.body}>
        You have successfully applied for a loan, A response will be sent to you shortly.
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 300,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "gray",
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    position: "absolute",
    zIndex: 200,
    alignSelf: "center",
    borderRadius: 30,
    top: 150
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#0BDA51"
  },
  body: {
    marginTop: 30,
    fontSize: 15,
    width: '80%',
    textAlign: "center"
  },
});
