// NOTE: https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants

import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
      poster: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
      poster?: React.CSSProperties;
    }
  }
  
  // Update the Typography's variant prop options
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      poster: true;
    }
  }
