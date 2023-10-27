'use client';

import './global.css';
import { useState } from 'react';
import Mode from '../contexts/Mode';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  return (
    <html lang="en">
      <body className={mode}>
        <Mode.Provider value={{ mode, setMode: (newMode) => setMode(newMode) }}>
          {children}
        </Mode.Provider>
      </body>
    </html>
  );
}
