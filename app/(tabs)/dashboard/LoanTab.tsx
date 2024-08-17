import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Loan } from '@/screens/loan';
import { Box } from '@/components/ui/box';
import MobileTabsHeader from './MobileTabsHeader';
import { NotificationIcon } from '@/components/svgs/svg';

export default function LoanTab({ isActive }: { isActive: boolean }) {
  return (
    isActive && <View style={styles.container}>
      <Box className="h-[62px] items-center w-full flex md:hidden shadow-lg" style={{ marginTop: 10 }}>
        <MobileTabsHeader 
          title={"Loan Application"}
          titleSize={"md"}
          endContent={<NotificationIcon className="w-10 h-10" style={{ height: 50, width: 35 }} fill={"#000000"}/>}
        />
      </Box>
      <Loan />
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
