

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePlanConfig } from '@/hooks/usePlanConfig';

const LandingPricing = () => {
  const { config, isLoading, error } = usePlanConfig();

  if (isLoading) {
    return (
      <section className="py-20 w-full" id="planos">
        <div className="w-full px-4">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !config) {
    return (
      <section className="py-20 w-full" id="planos">
        <div className="w-full px-4">
          <div className="text-center text-red-600">
            Erro ao carregar configurações dos planos
          </div>
        </div>
      </section>
    );
  }

  const plans = [{
    name: "Mensal",
    price: config.prices.monthly.displayPrice,
    period: "/mês",
    description: "Ideal para quem quer começar agora",
    features: [
      "Registros ilimitados de gastos e receitas",
      "Controle financeiro direto pelo WhatsApp",
      "Dashboard completo e intuitivo",
      "Relatórios financeiros avançados",
      "Metas e compromissos ilimitados",
      "Lembretes automáticos de contas e compromissos"
    ],
    limitations: [],
    buttonText: "Se organize agora",
    buttonVariant: "default" as const,
    popular: false,
    linkTo: config.prices.monthly.linkTo
  }, {
    name: "Anual",
    price: config.prices.annual.displayPrice,
    period: "/ano",
    originalPrice: config.prices.annual.displayOriginalPrice,
    savings: config.prices.annual.displaySavings,
    monthlyEquivalent: config.prices.annual.monthlyEquivalent,
    description: "Máximo custo-benefício",
    features: [
      "Registros ilimitados de gastos e receitas",
      "Controle financeiro direto pelo WhatsApp",
      "Dashboard completo e intuitivo",
      "Relatórios financeiros avançados",
      "Metas e compromissos ilimitados",
      "Lembretes automáticos de contas e compromissos",
      <strong key="user">1 usuário adicional gratuito</strong>,
      <strong key="consult">Consultoria financeira gratuita</strong>,
      <strong key="vip">Suporte VIP</strong>
    ],
    limitations: [],
    buttonText: "Quero o melhor custo-benefício",
    buttonVariant: "default" as const,
    popular: true,
    linkTo: config.prices.annual.linkTo
  }];

  return (
    <section className="py-24 w-full" id="planos">
      <div className="w-full px-4">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          {/* Vídeo do YouTube Shorts */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-900 bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/bLFGpfYGOzk"
                title="Assistente Emília"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Escolha como quer organizar sua vida financeira
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tenha uma assistente financeira 24 horas por dia no seu bolso.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, staggerChildren: 0.1 }} 
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="relative"
            >
              <Card className={`h-full relative ${plan.popular ? 'border-accent shadow-2xl scale-105 bg-gradient-to-br from-card to-card/80' : 'hover:shadow-lg border-primary/20'} transition-all duration-300`} style={plan.popular ? {boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'} : {}}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                      <Star className="h-4 w-4 text-white fill-current" />
                      Melhor custo-benefício
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    {plan.monthlyEquivalent && (
                      <div className="mt-2">
                        <span className="text-sm text-green-600 font-medium">Apenas {plan.monthlyEquivalent} por mês</span>
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                        <span className="text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' : ''} transition-all hover:scale-[1.02]`}
                    variant={plan.buttonVariant} 
                    size="lg"
                    onClick={() => window.location.href = plan.linkTo}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPricing;
