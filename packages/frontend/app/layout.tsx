'use client';

import './global.css';
import { useState } from 'react';
import Mode from '@/providers/Mode';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/providers/QueryClient';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  return (
    <html lang="en">
      <body className={mode}>
        <QueryClientProvider client={queryClient}>
          <Mode.Provider
            value={{ mode, setMode: (newMode) => setMode(newMode) }}
          >
            {children}
          </Mode.Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
