import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const companyName = import.meta.env.VITE_COMPANY_NAME || 'Poupe Já';
  const supportPhone = import.meta.env.VITE_SUPPORT_PHONE || '+55 (00) 00000-0000';
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'suporte@example.com';
  const supportWhatsApp = import.meta.env.VITE_SUPPORT_WHATSAPP || '+55 (00) 00000-0000';
  const appUrl = import.meta.env.VITE_APP_URL || 'https://demo-app.poupeja.com';

  return (
    <div className="dv-theme min-h-screen w-full bg-gradient-to-br from-background via-muted/20 to-background flex flex-col text-foreground">
      {/* Header — igual ao da página de Termos */}
      <header className="w-full px-4 py-6 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-semibold tracking-tight">{companyName}</h1>
          <div className="flex items-center gap-2 sm:gap-3">
            {appUrl && (
              <Button asChild size="sm" className="px-3 py-2">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">Acessar o app</a>
              </Button>
            )}
            <Button asChild variant="outline" size="sm" className="px-3 py-2">
              <a href="/">Voltar</a>
            </Button>
          </div>
        </div>
      </header>

      <motion.main
        className="flex-1 w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto py-10 sm:py-14">
          {/* Título e barra de destaque — igual aos Termos */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Política de Privacidade</h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-accent" />
          </div>

          {/* Conteúdo com tipografia e espaçamento coerentes com Termos */}
          <div className="max-w-none text-muted-foreground space-y-8 sm:space-y-10 leading-7 md:leading-8">
            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Introdução</h3>
              <p className="text-base md:text-lg">
                A sua privacidade é importante para nós. É política do {appUrl ? (
                  <a
                    href={appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {companyName}
                  </a>
                ) : (
                  companyName
                )} respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site {companyName}, e outros sites que possuímos e operamos.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Coleta e Uso de Informações</h3>
              <p className="text-base md:text-lg">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
              </p>
              <p className="text-base md:text-lg mt-4">
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>
              <p className="text-base md:text-lg mt-4">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Links Externos</h3>
              <p className="text-base md:text-lg">
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Consentimento e Uso Contínuo</h3>
              <p className="text-base md:text-lg">
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
              </p>
              <p className="text-base md:text-lg mt-4">
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Google AdSense e Cookies</h3>
              <p className="text-base md:text-lg">
                O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
              </p>
              <p className="text-base md:text-lg mt-4">
                Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
              </p>
              <p className="text-base md:text-lg mt-4">
                Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
              </p>
              <p className="text-base md:text-lg mt-4">
                Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Compromisso do Usuário</h3>
              <p className="text-base md:text-lg">
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o {companyName} oferece no site e com caráter enunciativo, mas não limitativo:
              </p>
              <ol type="A" className="mt-4 list-outside pl-6 sm:pl-8 md:pl-10 space-y-2 text-base md:text-lg marker:font-medium marker:text-foreground">
                <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
                <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                <li>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do {companyName}, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
              </ol>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Mais informações</h3>
              <p className="text-base md:text-lg">
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-4">Esta política é efetiva a partir de 11 de Setembro de 2025 18:12</p>
            </section>

            <hr className="my-6 border-primary/30" />

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Entre em Contato</h3>
              <p className="text-base md:text-lg">Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:</p>
              <ul className="mt-4 space-y-2 text-base md:text-lg">
                <li><strong>Email:</strong> {supportEmail}</li>
                <li><strong>Telefone:</strong> {supportPhone}</li>
                <li><strong>WhatsApp:</strong> {supportWhatsApp}</li>
              </ul>

              <div className="mt-6">
                <a href="/" className="text-sm sm:text-base text-primary hover:underline">Voltar para o Início</a>
              </div>
            </section>
          </div>
        </div>
      </motion.main>

      {/* Footer — igual ao da página de Termos */}
      <footer className="bg-card/30 border-t py-8 w-full">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p className="text-sm md:text-base">&copy; 2025 {companyName}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;