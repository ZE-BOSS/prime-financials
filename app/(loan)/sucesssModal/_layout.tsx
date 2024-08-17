import React from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import ApplySuccess from '@/modals/applySuccess';

export default function CompanyLayout() {
  const colorScheme = useColorScheme();

  return (
    <ApplySuccess />
  );
}