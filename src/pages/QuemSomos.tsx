
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import PartnershipSection from "@/components/PartnershipSection";
import { Shield, Target, Heart } from "lucide-react";

const QuemSomos = () => {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner
        title="Quem Somos"
        subtitle="Conheça nossa história, missão e visão para o ecossistema de inovação."
        alignment="center"
      />

      {/* About LOOR Section - Light Theme */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Sobre o LOOR"
            subtitle="Uma plataforma que conecta inovação e capital."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-loor-light-section-title">O que é o LOOR</h3>
              <p className="mb-4 text-loor-light-section-subtitle">
                O LOOR é uma plataforma de conexão entre startups e investidores, operando em conformidade com a regulação da CVM. Oferecemos soluções inovadoras que facilitam o acesso ao capital para empreendedores e ampliam as oportunidades de investimento em negócios com alto potencial de crescimento.
              </p>
              <p className="text-loor-light-section-subtitle">
                Nossa tecnologia proprietária e abordagem centrada na confiança e transparência nos posicionam como um parceiro estratégico para todos os participantes do ecossistema de inovação.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-loor-light-section-title">Operação Regulada CVM</h3>
              <p className="mb-4 text-loor-light-section-subtitle">
                Somos uma plataforma autorizada pela Comissão de Valores Mobiliários (CVM), operando em total conformidade com a Instrução Normativa 88/2022. Isso garante que todas as operações realizadas em nossa plataforma seguem os mais altos padrões de segurança jurídica e transparência.
              </p>
              <p className="text-loor-light-section-subtitle">
                A conformidade regulatória é um de nossos principais pilares, proporcionando tranquilidade para startups e investidores em todas as etapas do processo.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-loor-light-section-title">Investimento Próprio</h3>
            <p className="text-loor-light-section-subtitle">
              Além de conectar startups e investidores, o LOOR também atua como investidor direto em oportunidades selecionadas. Nossa abordagem de co-investimento demonstra nossa confiança nas empresas apresentadas em nossa plataforma e alinha nossos interesses com os de todos os participantes do ecossistema.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section - Light Theme */}
      <section className="bg-loor-gray section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            overline="Nosso DNA"
            title="Missão, Visão e Valores"
            subtitle="Os princípios que guiam nossa atuação no mercado."
            alignment="center"
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Shield className="text-loor-light-section-icon h-12 w-12 mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-4 text-loor-light-section-title">Missão</h3>
              <p className="text-loor-light-section-subtitle">
                Conectar capital e inovação de forma segura, transparente e acessível, gerando impacto positivo para a sociedade e retorno para investidores.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Target className="text-loor-light-section-icon h-12 w-12 mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-4 text-loor-light-section-title">Visão</h3>
              <p className="text-loor-light-section-subtitle">
                Ser a principal plataforma de conexão entre startups e investidores da América Latina, reconhecida pela excelência regulatória, tecnológica e pelo impacto positivo no ecossistema de inovação.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Heart className="text-loor-light-section-icon h-12 w-12 mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-4 text-loor-light-section-title">Valores</h3>
              <ul className="text-loor-light-section-subtitle text-left">
                <li className="mb-2">• <strong>Inovação:</strong> Buscamos constantemente novas soluções</li>
                <li className="mb-2">• <strong>Transparência:</strong> Clareza em todas as operações</li>
                <li className="mb-2">• <strong>Acesso:</strong> Democratização dos investimentos</li>
                <li className="mb-2">• <strong>Impacto:</strong> Foco em transformação positiva</li>
                <li>• <strong>Sustentabilidade:</strong> Visão de longo prazo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <PartnershipSection />
    </div>
  );
};

export default QuemSomos;
