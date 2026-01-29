import React, { createContext, useContext, ReactNode } from 'react';

interface BrandingData {
  companyName: string;
  logoUrl: string;
  faviconUrl: string;
  logoAltText: string;
}

interface BrandingContextType {
  branding: BrandingData;
  isLoading: boolean;
  error: string | null;
}

// Branding dinâmico para versão standalone
const defaultBranding: BrandingData = {
  companyName: import.meta.env.VITE_COMPANY_NAME || 'Poupe Já',
  logoUrl: '',
  faviconUrl: '/favicon.ico',
  logoAltText: import.meta.env.VITE_COMPANY_NAME || 'Poupe Já'
};

const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

export const BrandingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BrandingContext.Provider
      value={{
        branding: defaultBranding,
        isLoading: false,
        error: null,
      }}
    >
      {children}
    </BrandingContext.Provider>
  );
};

export const useBranding = () => {
  const context = useContext(BrandingContext);
  if (context === undefined) {
    throw new Error('useBranding must be used within a BrandingProvider');
  }
  return context;
};