import React from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { ApplyLoan } from '@/screens/applyLoan';

export default function CompanyLayout() {
  const colorScheme = useColorScheme();

  return (
    <ApplyLoan />
  );
}