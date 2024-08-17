import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { SavingsScreen } from '@/screens/savings';
import { Box } from '@/components/ui/box';
import MobileTabsHeader from './MobileTabsHeader';

export default function SavingsTab({ isActive }: { isActive: boolean }) {
  return (
    isActive && <View style={styles.container}>
      <Box className="h-[62px] items-center w-full flex md:hidden shadow-lg" style={{ marginTop: 30 }}>
        <MobileTabsHeader 
          title={"Fixed Savings"}
          titleSize={"md"}
        />
      </Box>
      <SavingsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
