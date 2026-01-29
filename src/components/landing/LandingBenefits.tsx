

import { 
    BarChart3, 
    Target, 
    PiggyBank, 
    Shield, 
    Smartphone,
    FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';

const LandingBenefits = () => {
    const { companyName } = useBrandingConfig();
    const resolvedName = (companyName && companyName.trim().length > 0) ? companyName : (import.meta.env.VITE_COMPANY_NAME || 'Poupe Já');
    
    const features = [
        {
            icon: PiggyBank,
            title: "Gestão de Despesas",
            description: "Controle suas despesas direto pelo WhatsApp. Envie mensagens como “gastei R$50 no mercado” ou “recebi R$2.000 de salário”. A Emília registra, categoriza automaticamente e transforma tudo em relatórios claros, sem planilhas e sem complicação.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: BarChart3,
            title: "Visão Completa",
            description: "Veja exatamente para onde seu dinheiro está indo. Acompanhe entradas, saídas e saldo disponível em gráficos simples e intuitivos. Tenha clareza financeira para tomar decisões melhores no dia a dia.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: Target,
            title: "Metas Financeiras",
            description: "Acompanhe suas metas sem esforço. Crie objetivos financeiros e acompanhe o progresso automaticamente. A Emília te ajuda a manter o foco e visualizar sua evolução com clareza.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: FileText,
            title: "Relatórios inteligentes",
            description: "Relatórios claros para decisões melhores que mostram padrões de gastos e oportunidades de economia. Mais controle, menos achismo.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: Smartphone,
            title: "Seu controle financeiro, onde você estiver",
            description: "Acesse suas informações pelo celular, tablet ou computador, com sincronização em tempo real. Tudo sempre atualizado, sem esforço.",
            color: "from-primary via-accent to-secondary"
        },
        {
            icon: Shield,
            title: "Proteção Total",
            description: "Suas informações são protegidas com criptografia avançada e backups constantes. Tranquilidade para cuidar do seu dinheiro com segurança. Segurança total para seus dados financeiros.",
            color: "from-primary via-accent to-secondary"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="recursos" className="py-24 bg-muted/20 dark:bg-muted/20 w-full">
            <div className="w-full px-4">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                        Sua vida financeira organizada, sem esforço
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A Emília, sua assistente financeira, organiza gastos, compromissos e relatórios automaticamente com comandos simples direto pelo WhatsApp.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            className="group relative"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-card dark:bg-card rounded-2xl p-6 shadow-lg border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full" style={{boxShadow: '0 4px 20px rgba(99, 102, 241, 0.15)'}}>
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-lg font-semibold text-foreground mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LandingBenefits;
