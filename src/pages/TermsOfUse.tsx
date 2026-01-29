import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const TermsOfUse = () => {
  const companyName = import.meta.env.VITE_COMPANY_NAME || 'Poupe Já';
  const supportPhone = import.meta.env.VITE_SUPPORT_PHONE || '+55 (00) 00000-0000';
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'suporte@example.com';
  const supportWhatsApp = import.meta.env.VITE_SUPPORT_WHATSAPP || '+55 (00) 00000-0000';
  const appUrl = import.meta.env.VITE_APP_URL || 'https://demo-app.poupeja.com';

  return (
    <div className="dv-theme min-h-screen w-full bg-gradient-to-br from-background via-muted/20 to-background flex flex-col text-foreground">
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
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Termos de Uso</h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-accent" />
          </div>

          <div className="max-w-none text-muted-foreground space-y-8 sm:space-y-10 leading-7 md:leading-8">
            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">1. Termos</h3>
              <p className="text-base md:text-lg">
                Ao acessar ao site {appUrl ? (
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
                )}, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e declara estar responsável por cumprir as leis locais pertinentes. Caso não concorde com algum destes termos, fica proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">2. Uso de Licença</h3>
              <p className="text-base md:text-lg">
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site {companyName}, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>
              <ol className="mt-4 list-decimal list-outside pl-6 sm:pl-8 md:pl-10 space-y-2 text-base md:text-lg marker:text-foreground marker:font-medium">
                <li>Modificar ou copiar os materiais;</li>
                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site {companyName};</li>
                <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                <li>Transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor.</li>
              </ol>
              <p className="mt-4 text-base md:text-lg">
                Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por {companyName} a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">3. Isenção de responsabilidade</h3>
              <p className="text-base md:text-lg">
                Os materiais no site de {companyName} são fornecidos "como estão". {companyName} não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. Além disso, {companyName} não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">4. Limitações</h3>
              <p className="text-base md:text-lg">
                Em nenhum caso {companyName} ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido à interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em {companyName}, mesmo que {companyName} ou um representante autorizado tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">5. Precisão dos materiais</h3>
              <p className="text-base md:text-lg">
                Os materiais exibidos no site de {companyName} podem incluir erros técnicos, tipográficos ou fotográficos. {companyName} não garante que qualquer material em seu site seja preciso, completo ou atual. {companyName} pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, {companyName} não se compromete a atualizar os materiais.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">6. Links</h3>
              <p className="text-base md:text-lg">
                {companyName} não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por {companyName} do site. O uso de qualquer site vinculado é por conta e risco do usuário.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Modificações</h3>
              <p className="text-base md:text-lg">
                {companyName} pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes termos de serviço.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Lei aplicável</h3>
              <p className="text-base md:text-lg">
                Estes termos e condições são regidos e interpretados de acordo com as leis aplicáveis à sede de {companyName}, e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquela localidade.
              </p>
            </section>

            <hr className="my-6 border-primary/30" />

            <section>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Entre em Contato</h3>
              <p className="text-base md:text-lg">Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:</p>
              <ul className="mt-4 space-y-2 text-base md:text-lg">
                <li><strong>Email:</strong> {supportEmail}</li>
                <li><strong>Telefone:</strong> {supportPhone}</li>
                <li><strong>WhatsApp:</strong> {supportWhatsApp}</li>
              </ul>

              {/* Links finais removidos conforme solicitação */}
            </section>
          </div>
        </div>
      </motion.main>

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

export default TermsOfUse;