import type { ReactNode } from 'react';
import { MuiThemeProvider } from '@/src/contexts/mui-theme-provider';

export const CommonLayout = ({ children }: { children: ReactNode }) => {
  return <MuiThemeProvider>{children}</MuiThemeProvider>;
};
