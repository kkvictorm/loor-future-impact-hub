
import { Link } from "react-router-dom";
import { ArrowRight, Users, BarChart, FileText, Globe } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import ChallengesList from "@/components/ChallengesList";
import BenefitsList from "@/components/BenefitsList";
import SolutionCard from "@/components/SolutionCard";

const ParaQuemGovernosOrganizacoes = () => {
  const challenges = [
    "Baixa adesão e rastreabilidade de editais",
    "Falta de plataforma para execução de programas",
    "Necessidade de prestação de contas clara",
    "Dificuldade em integrar inovação com políticas públicas"
  ];

  const benefits = [
    "Programas estruturados com total rastreabilidade e transparência",
    "Plataforma tecnológica para execução eficiente de editais",
    "Relatórios automatizados para prestação de contas",
    "Conexão efetiva entre ecossistema público e privado",
    "Impacto mensurável no desenvolvimento local"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Transforme políticas públicas em plataformas de impacto"
        subtitle="Tecnologia, estrutura e inteligência para programas de inovação com rastreabilidade e resultados concretos."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* Perfil - Você é */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Globe className="text-loor-primary h-16 w-16" />
            </div>
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Você é...</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Uma fundação, órgão público, universidade ou organização que deseja fomentar inovação com gestão eficiente e visibilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Desafios */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Desafios que você enfrenta</h2>
            <div className="max-w-2xl mx-auto">
              <ChallengesList challenges={challenges} theme="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Como o Loor pode ajudar */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Como o Loor pode ajudar"
              alignment="center"
              theme="light"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <FileText className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Backoffice Estratégico</h3>
                <p className="text-gray-600">Apoio completo com estrutura, rastreabilidade e transparência.</p>
              </div>
              <div className="text-center">
                <BarChart className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Plataforma White Label</h3>
                <p className="text-gray-600">Lançamento de programas via nossa plataforma personalizada.</p>
              </div>
              <div className="text-center">
                <Users className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Qualificação de Startups</h3>
                <p className="text-gray-600">Curadoria e dados com avaliação especializada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Acionáveis de Soluções */}
      <section className="bg-loor-gray section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossas soluções para governos e organizações"
            alignment="center"
            theme="light"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <SolutionCard
              solutionName="Backoffice Estratégico"
              briefDescription="Executamos seu programa com estrutura, rastreabilidade e transparência."
              ctaButton={{
                text: "Fale com a gente",
                url: "/solucoes/back-office-estrategico"
              }}
            />
            <SolutionCard
              solutionName="Plataforma White Label CVM 88"
              briefDescription="Plataforma própria para executar editais, eventos ou aceleração."
              ctaButton={{
                text: "Conheça nossa solução",
                url: "/solucoes/plataforma-white-label"
              }}
            />
            <SolutionCard
              solutionName="Qualificação de Startups"
              briefDescription="Avalie o potencial e maturidade das startups apoiadas."
              ctaButton={{
                text: "Solicitar qualificação",
                url: "/solucoes/qualificacao-startups"
              }}
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Benefícios de contar com o Loor</h2>
            <div className="max-w-3xl mx-auto">
              <BenefitsList benefits={benefits} theme="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Frase de Impacto */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-3xl font-bold text-loor-blue italic">
              "Fomento de verdade é aquele que entrega inovação com estrutura e medição."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-6">Pronto para impacto real?</h2>
            <p className="text-white/90 text-lg mb-8">
              Vamos construir juntos um ecossistema público-privado de inovação com impacto real?
            </p>
            <Link to="/contato" className="cta-primary bg-white text-loor-blue hover:bg-gray-100 text-lg px-8 py-4">
              🏛️ Construir ecossistema de impacto
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParaQuemGovernosOrganizacoes;
