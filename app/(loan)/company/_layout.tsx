import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { CompanyInfo } from '@/screens/companyInfo';

export default function CompanyLayout() {
  const colorScheme = useColorScheme();

  return (
    <CompanyInfo />
  );
}