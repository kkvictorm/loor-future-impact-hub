
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SolutionCard from "@/components/SolutionCard";

const Solucoes = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Nossas Soluções"
        subtitle="Desenvolvemos tecnologias e serviços que conectam startups promissoras a investidores estratégicos, sempre com foco em conformidade regulatória e impacto positivo."
        alignment="center"
      />

      {/* All Solutions Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            overline="Conheça nossas soluções"
            title="Soluções completas para o ecossistema de inovação"
            subtitle="Explore nossas soluções desenvolvidas para atender diferentes necessidades do mercado."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <SolutionCard
              solutionName="Investimentos Diretos em Startups"
              briefDescription="Investimos diretamente em startups criteriosamente selecionadas, com foco em negócios de alto potencial e impacto."
              benefitsList={[
                "Due diligence completa",
                "Acompanhamento pós-investimento",
                "Mentoria especializada",
                "Acesso à nossa rede de parceiros"
              ]}
              ctaButton={{
                text: "Conhecer solução",
                url: "/solucoes/investimentos-diretos"
              }}
            />
            
            <SolutionCard
              solutionName="Equity Crowdfunding"
              briefDescription="Invista em startups inovadoras com valores a partir de R$ 1.000,00 através de nossa plataforma regulada pela CVM."
              benefitsList={[
                "Acesso a oportunidades curadas",
                "Investimento a partir de R$ 1.000,00",
                "Conformidade com a IN CVM 88/2022",
                "Acompanhamento pós-investimento"
              ]}
              ctaButton={{
                text: "Conhecer solução",
                url: "/solucoes/equity-crowdfunding"
              }}
            />
            
            <SolutionCard
              solutionName="Plataforma White Label CVM 88"
              briefDescription="Tenha sua própria plataforma de investimentos em startups, em conformidade com a CVM."
              benefitsList={[
                "Tecnologia proprietária",
                "Suporte operacional completo",
                "Conformidade regulatória",
                "Customização completa"
              ]}
              ctaButton={{
                text: "Conhecer solução",
                url: "/solucoes/plataforma-white-label"
              }}
            />
            
            <SolutionCard
              solutionName="Plataforma de Investimento Privado"
              briefDescription="Solução para captação e gestão de investimentos privados em empresas não listadas na bolsa."
              benefitsList={[
                "Ambiente seguro e exclusivo",
                "Gestão completa de documentos",
                "Conformidade fiscal e contábil",
                "Dashboard para investidores"
              ]}
              ctaButton={{
                text: "Conhecer solução",
                url: "/solucoes/investimento-privado"
              }}
            />
            
            <SolutionCard
              solutionName="Qualificação de Startups"
              briefDescription="Preparamos sua startup para acessar capital com estrutura, governança e compliance."
              benefitsList={[
                "Avaliação de maturidade",
                "Mentoria especializada",
                "Preparação para captação",
                "Acesso a investidores"
              ]}
              ctaButton={{
                text: "Conhecer solução",
                url: "/solucoes/qualificacao-startups"
              }}
            />
            
            <SolutionCard
              solutionName="Back Office Estratégico"
              briefDescription="Serviços de back office para startups e investidores, garantindo operações eficientes e conformes."
              benefitsList={[
                "Governança corporativa",
                "Gestão de documentos",
                "Relatórios para investidores",
                "Suporte jurídico e contábil"
              ]}
              ctaButton={{
                text: "Conhecer solução",
                url: "/solucoes/back-office-estrategico"
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-loor-gray section-padding">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="Não encontrou o que precisava?"
            subtitle="Entre em contato conosco para discutir soluções personalizadas para o seu negócio ou investimento."
            alignment="center"
          />
          <div className="mt-8">
            <Link to="/contato" className="cta-primary inline-flex items-center">
              Fale com um especialista
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solucoes;
