
interface PlanConfig {
  prices: {
    monthly: {
      priceId: string;
      price: string;
      displayPrice: string;
      features: string[];
      linkTo: string;
    };
    annual: {
      priceId: string;
      price: string;
      originalPrice: string;
      savings: string;
      displayPrice: string;
      displayOriginalPrice: string;
      displaySavings: string;
      monthlyEquivalent: string;
      features: string[];
      linkTo: string;
    };
  };
  contact: {
    phone: string;
  };
}

// Função para calcular valores baseados nos preços das variáveis de ambiente
const calculatePlanValues = () => {
  const monthlyPrice = import.meta.env.VITE_MONTHLY_PRICE || 'R$ 9,99';
  const annualPrice = import.meta.env.VITE_ANNUAL_PRICE || 'R$ 99,99';
  
  // Extrair valores numéricos dos preços
  const monthlyValue = parseFloat(monthlyPrice.replace('R$', '').replace(',', '.').trim());
  const annualValue = parseFloat(annualPrice.replace('R$', '').replace(',', '.').trim());
  
  // Calcular preço original anual (12 meses)
  const originalAnnualValue = monthlyValue * 12;
  const savings = originalAnnualValue - annualValue;
  
  return {
    monthly: {
      value: monthlyValue,
      display: monthlyPrice
    },
    annual: {
      value: annualValue,
      display: annualPrice,
      originalValue: originalAnnualValue,
      originalDisplay: `R$ ${originalAnnualValue.toFixed(2).replace('.', ',')}`,
      savings: savings,
      savingsDisplay: `R$ ${savings.toFixed(2).replace('.', ',')}`,
      monthlyEquivalent: annualValue / 12,
      monthlyEquivalentDisplay: `R$ ${(annualValue / 12).toFixed(2).replace('.', ',')}`
    }
  };
};

// Configuração dinâmica baseada nas variáveis de ambiente
const createConfig = (): PlanConfig => {
  const prices = calculatePlanValues();
  
  // Processar features das variáveis de ambiente
  const monthlyFeatures = import.meta.env.VITE_MONTHLY_FEATURES?.split(',').map((feature: string) => feature.trim()) || [];
  const annualFeatures = import.meta.env.VITE_ANNUAL_FEATURES?.split(',').map((feature: string) => feature.trim()) || [];
  
  // Obter URL base da aplicação
  const appUrl = import.meta.env.VITE_APP_URL || 'https://demo-app.poupeja.com';
  
  return {
    prices: {
      monthly: {
        priceId: 'price_monthly',
        price: prices.monthly.value.toString(),
        displayPrice: prices.monthly.display,
        features: monthlyFeatures,
        linkTo: `${appUrl}/auth?mode=register&planType=monthly`
      },
      annual: {
        priceId: 'price_annual',
        price: prices.annual.value.toString(),
        originalPrice: prices.annual.originalValue.toString(),
        savings: prices.annual.savings.toString(),
        displayPrice: prices.annual.display,
        displayOriginalPrice: prices.annual.originalDisplay,
        displaySavings: prices.annual.savingsDisplay,
        monthlyEquivalent: prices.annual.monthlyEquivalentDisplay,
        features: annualFeatures,
        linkTo: `${appUrl}/auth?mode=register&planType=annual`
      }
    },
    contact: {
      phone: '5511999999999'
    }
  };
};

export const usePlanConfig = () => {
  return {
    config: createConfig(),
    isLoading: false,
    error: null
  };
};
