import dynamic from 'next/dynamic';
import React from 'react';

interface StatsProps {
  dataUrl: string;
}

const StatsWithClientSideProcessing = dynamic<StatsProps>(() => import('../../components/Stats'), {
  ssr: false
});

export default function StatsPage() {
  return <StatsWithClientSideProcessing dataUrl={''} />;
}