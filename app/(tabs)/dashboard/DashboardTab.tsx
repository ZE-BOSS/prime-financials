import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Dashboard } from '@/screens/dashboard';
import { Box } from '@/components/ui/box';
import MobileTabsHeader from './MobileTabsHeader';
import { UserIcon, NotificationIcon } from '@/components/svgs/svg';

export default function DashboardTab({ isActive }: { isActive: boolean }) {
  return (
    isActive && <View style={styles.container}>
      <Box className="h-[62px] items-center w-full flex md:hidden shadow-lg">
        <MobileTabsHeader 
          startContent={
            <UserIcon className="w-10 h-10" style={{ 
              height: 25, 
              width: 35 
            }} fill={"#000000"}/>
          }
          title={"Hi, DVDRAY"}
          endContent={<NotificationIcon className="w-10 h-10" style={{ height: 50, width: 35 }} fill={"#000000"}/>}
          titleSize={"lg"}
        />
      </Box>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
});
