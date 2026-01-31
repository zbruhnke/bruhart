'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function ThemeHandler() {
  const searchParams = useSearchParams();
  const theme = searchParams.get('theme');

  useEffect(() => {
    // Apply theme class to document root
    if (theme === 'blue') {
      document.documentElement.classList.add('theme-blue');
    } else {
      document.documentElement.classList.remove('theme-blue');
    }

    // Cleanup on unmount
    return () => {
      document.documentElement.classList.remove('theme-blue');
    };
  }, [theme]);

  return null;
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <ThemeHandler />
      </Suspense>
      {children}
    </>
  );
}
