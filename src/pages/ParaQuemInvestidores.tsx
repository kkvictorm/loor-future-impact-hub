
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, Users, Briefcase } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import ChallengesList from "@/components/ChallengesList";
import BenefitsList from "@/components/BenefitsList";
import SolutionCard from "@/components/SolutionCard";

const ParaQuemInvestidores = () => {
  const challenges = [
    "Falta de curadoria",
    "Insegurança jurídica",
    "Dificuldade em operar rodadas privadas",
    "Alto custo para montar estrutura própria"
  ];

  const benefits = [
    "Acesso a startups pré-qualificadas e com potencial validado",
    "Segurança jurídica com conformidade CVM 88/2022",
    "Operação autônoma com controle total sobre investimentos",
    "Estrutura profissional sem custos de montagem interna",
    "Relatórios periódicos e acompanhamento de desempenho"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Invista com segurança, autonomia e impacto real"
        subtitle="Com o Loor, você acessa oportunidades reais, opera com controle e investe com inteligência."
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* Perfil - Você é */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <TrendingUp className="text-loor-primary h-16 w-16" />
            </div>
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Você é...</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Um investidor que busca acessar startups promissoras ou estruturar sua própria operação de investimento.
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
                <Users className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Equity Crowdfunding (CVM 88)</h3>
                <p className="text-gray-600">Acesso à nossa plataforma regulada com startups curadas.</p>
              </div>
              <div className="text-center">
                <Shield className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Plataforma de Investimento Privado</h3>
                <p className="text-gray-600">Operação autônoma com total controle e segurança.</p>
              </div>
              <div className="text-center">
                <Briefcase className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Backoffice Estratégico</h3>
                <p className="text-gray-600">Suporte completo para sua operação de investimentos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Acionáveis de Soluções */}
      <section className="bg-loor-gray section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossas soluções para investidores"
            alignment="center"
            theme="light"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <SolutionCard
              solutionName="Plataforma de Investimento Privado"
              briefDescription="Gerencie seu próprio deal flow com total controle e segurança."
              ctaButton={{
                text: "Quero conhecer a plataforma",
                url: "/solucoes/investimento-privado"
              }}
            />
            <SolutionCard
              solutionName="Equity Crowdfunding"
              briefDescription="Acesse startups em rodadas públicas e reguladas."
              ctaButton={{
                text: "Ver oportunidades",
                url: "/solucoes/equity-crowdfunding"
              }}
            />
            <SolutionCard
              solutionName="Backoffice Estratégico"
              briefDescription="Quer operar sua tese de investimento sem equipe interna? Conte com o Loor."
              ctaButton={{
                text: "Fale com o time",
                url: "/solucoes/back-office-estrategico"
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
              "Investir com autonomia é bom. Com estrutura, é o futuro."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-6">Pronto para investir com estrutura?</h2>
            <p className="text-white/90 text-lg mb-8">
              Fale com nosso time e conheça as oportunidades abertas ou monte sua própria operação.
            </p>
            <Link to="/contato" className="cta-primary bg-white text-loor-blue hover:bg-gray-100 text-lg px-8 py-4">
              📩 Fale com nosso time
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParaQuemInvestidores;
