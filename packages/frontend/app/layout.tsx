import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import NavigationBar from '../components/NavigationBar';

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Theme radius="large" grayColor="olive">
          <NavigationBar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
