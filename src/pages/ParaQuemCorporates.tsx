
import { Link } from "react-router-dom";
import { ArrowRight, Building, Lightbulb, Settings, Target } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import ChallengesList from "@/components/ChallengesList";
import BenefitsList from "@/components/BenefitsList";
import SolutionCard from "@/components/SolutionCard";

const ParaQuemCorporates = () => {
  const challenges = [
    "Falta de equipe técnica/jurídica",
    "Custo alto para estruturar internamente",
    "Risco reputacional em operações de investimento",
    "Necessidade de operar com marca própria"
  ];

  const benefits = [
    "Plataforma própria com sua marca e identidade visual",
    "Conformidade total com CVM 88/2022 sem complexidade interna",
    "Operação profissional sem necessidade de equipe dedicada",
    "Acesso ao ecossistema de inovação com curadoria especializada",
    "Gestão de risco e compliance automatizados"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Inove com estratégia: seu CVC começa com o Loor"
        subtitle="Estruturamos sua plataforma, tese ou programa de investimento com tecnologia, segurança e suporte."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* Perfil - Você é */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building className="text-loor-primary h-16 w-16" />
            </div>
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Você é...</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Uma empresa que quer investir, testar modelos de inovação aberta ou operar uma plataforma própria.
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
                <Lightbulb className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Plataforma White Label CVM 88</h3>
                <p className="text-gray-600">Operação completa com sua marca e total conformidade.</p>
              </div>
              <div className="text-center">
                <Settings className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Backoffice Estratégico</h3>
                <p className="text-gray-600">Suporte operacional completo sem criar equipe interna.</p>
              </div>
              <div className="text-center">
                <Target className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Qualificação de Startups</h3>
                <p className="text-gray-600">Curadoria criteriosa para seu CVC ou programa de inovação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Acionáveis de Soluções */}
      <section className="bg-loor-gray section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossas soluções para corporates"
            alignment="center"
            theme="light"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <SolutionCard
              solutionName="Plataforma White Label CVM 88"
              briefDescription="Tenha sua própria plataforma regulada, com sua marca e sem complexidade."
              ctaButton={{
                text: "Quero lançar minha plataforma",
                url: "/solucoes/plataforma-white-label"
              }}
            />
            <SolutionCard
              solutionName="Backoffice Estratégico"
              briefDescription="Operação completa sem criar equipe interna."
              ctaButton={{
                text: "Fale com nosso time",
                url: "/solucoes/back-office-estrategico"
              }}
            />
            <SolutionCard
              solutionName="Qualificação de Startups"
              briefDescription="Seleção criteriosa de negócios para seu CVC ou programa de inovação."
              ctaButton={{
                text: "Conhecer solução",
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
              "A inovação corporativa precisa de estrutura, inteligência e execução."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-6">Pronto para inovar com estratégia?</h2>
            <p className="text-white/90 text-lg mb-8">
              Quer levar sua marca para o ecossistema com confiança? Fale com o Loor.
            </p>
            <Link to="/contato" className="cta-primary bg-white text-loor-blue hover:bg-gray-100 text-lg px-8 py-4">
              🏢 Levar minha marca para o ecossistema
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParaQuemCorporates;
