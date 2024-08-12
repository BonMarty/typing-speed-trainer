import { Footer, Header } from '@/widgets';
import React from 'react';

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto min-h-svh">
      <Header />
      <main className="flex flex-col flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
};
