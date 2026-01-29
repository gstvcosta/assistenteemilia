import { motion } from 'framer-motion';

const LandingConversation = () => {
    const row1 = [
        "Quais contas vencem hoje?", "Como está meu investimento?", "Qual meu fluxo de caixa?", 
        "Qual meu limite de gastos?", "Quanto posso economizar?", "Quais despesas fixas tenho?", 
        "Como está meu score de crédito?", "Qual meu orçamento?"
    ];
    
    const row2 = [
        "Preciso pagar o aluguel", "Agendar pagamento da luz", "Transferir para poupança", 
        "Cancelar assinatura Netflix", "Renegociar dívida do cartão", "Investir R$ 500 no Tesouro", 
        "Pagar fatura do cartão", "Verificar saldo bancário"
    ];
    
    const row3 = [
        "Gastei R$ 50 no almoço", "Comprei um livro de R$ 30", "Recebi R$ 2000 de salário", 
        "Paguei R$ 100 de gasolina", "Vendi um item por R$ 150", "Gastei R$ 20 no café", 
        "Paguei a conta de internet", "Recebi reembolso de R$ 50"
    ];
    
    const row4 = [
        "Quanto gastei com transporte?", "Qual minha maior despesa?", "Tenho saldo para viajar?", 
        "Quanto sobrou do salário?", "Meus gastos aumentaram?", "Qual a previsão para o mês?", 
        "Onde posso cortar gastos?", "Estou dentro da meta?"
    ];

    const MarqueeRow = ({ items, direction = "left", speed = 20 }: { items: string[], direction?: "left" | "right", speed?: number }) => {
        return (
            <div className="flex overflow-hidden py-2 select-none relative w-full mask-linear-fade">
                <motion.div
                    className="flex flex-nowrap gap-4 whitespace-nowrap"
                    initial={{ x: direction === "left" ? 0 : "-50%" }}
                    animate={{ x: direction === "left" ? "-50%" : 0 }}
                    transition={{
                        duration: speed,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {[...items, ...items, ...items, ...items].map((text, index) => (
                        <span
                            key={index}
                            className="bg-accent text-white rounded-full px-6 py-3 text-sm md:text-base whitespace-nowrap shadow-md hover:bg-accent/90 transition-colors"
                        >
                            {text}
                        </span>
                    ))}
                </motion.div>
            </div>
        );
    };

    return (
        <section className="py-20 w-full overflow-hidden bg-background">
            <div className="container px-4 mx-auto mb-12">
                <motion.div 
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                        Converse com a Assistente Emilia 24h por dia
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Pergunte o que quiser sobre suas finanças e compromissos. Veja exemplos abaixo.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <MarqueeRow items={row1} direction="left" speed={40} />
                <MarqueeRow items={row2} direction="right" speed={45} />
                <MarqueeRow items={row3} direction="left" speed={50} />
                <MarqueeRow items={row4} direction="right" speed={55} />
            </div>
        </section>
    );
};

export default LandingConversation;
