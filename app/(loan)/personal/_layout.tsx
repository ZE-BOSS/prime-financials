import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { PersonalInfo } from '@/screens/personalInfo';

export default function PersonalLayout() {
  const colorScheme = useColorScheme();

  return (
    <PersonalInfo />
  );
}