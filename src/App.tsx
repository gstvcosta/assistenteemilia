import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrandingProvider } from "@/contexts/BrandingContext";
import { useFavicon } from "@/hooks/useFavicon";
import { useSEO } from "@/hooks/useSEO";
import LandingPage from "./pages/LandingPage";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.css";
import { useEffect, useState } from "react";
import { initFacebookPixel } from "./lib/facebookPixel";

const queryClient = new QueryClient();

function App() {
  // Configura o favicon dinamicamente
  useFavicon();
  
  // Configura as meta tags de SEO dinamicamente
  useSEO();

  // Forçar tema light
  const defaultTheme = 'light';

  // Inicializa Facebook Pixel se houver ID no ambiente
  useEffect(() => {
    initFacebookPixel();
  }, []);

  // Roteamento simples por pathname
  const [path, setPath] = useState<string>(window.location.pathname);
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem>
        <BrandingProvider>
          {path === '/termos-de-uso' ? (
            <TermsOfUse />
          ) : path === '/politica-de-privacidade' ? (
            <PrivacyPolicy />
          ) : (
            <LandingPage />
          )}
        </BrandingProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;