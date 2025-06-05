
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Target, Users, Zap } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import ChallengesList from "@/components/ChallengesList";
import BenefitsList from "@/components/BenefitsList";
import SolutionCard from "@/components/SolutionCard";

const ParaQuemStartups = () => {
  const challenges = [
    "Dificuldade de acesso a investidores",
    "Falta de apoio na preparação da captação",
    "Insegurança regulatória",
    "Baixa visibilidade no mercado"
  ];

  const benefits = [
    "Captação estruturada com suporte técnico completo",
    "Acesso a investidores qualificados e interessados em inovação",
    "Segurança jurídica com conformidade CVM 88/2022",
    "Visibilidade nacional através da nossa plataforma",
    "Acompanhamento pós-investimento e mentoria estratégica"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Capital e suporte estratégico para startups em crescimento"
        subtitle="Conectamos sua startup a investidores e oportunidades reais com tecnologia, regulação e inteligência."
        backgroundImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* Perfil - Você é */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Rocket className="text-loor-primary h-16 w-16" />
            </div>
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Você é...</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Uma startup em tração ou validação que busca capital, visibilidade e estrutura para crescer com confiança.
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
                <Target className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Investimentos Diretos</h3>
                <p className="text-gray-600">Avaliamos e investimos diretamente em startups com alto potencial.</p>
              </div>
              <div className="text-center">
                <Users className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Equity Crowdfunding</h3>
                <p className="text-gray-600">Captação pública via plataforma regulada CVM 88/2022.</p>
              </div>
              <div className="text-center">
                <Zap className="text-loor-primary h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-loor-blue">Qualificação Estratégica</h3>
                <p className="text-gray-600">Preparação completa da startup antes da rodada de captação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Acionáveis de Soluções */}
      <section className="bg-loor-gray section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossas soluções para sua startup"
            alignment="center"
            theme="light"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <SolutionCard
              solutionName="Equity Crowdfunding"
              briefDescription="Capte recursos com visibilidade e segurança pela nossa plataforma CVM 88."
              ctaButton={{
                text: "Conhecer solução",
                url: "/solucoes/equity-crowdfunding"
              }}
            />
            <SolutionCard
              solutionName="Qualificação de Startups"
              briefDescription="Receba feedback estratégico e aumente sua chance de captar com sucesso."
              ctaButton={{
                text: "Quero qualificar minha startup",
                url: "/solucoes/qualificacao-startups"
              }}
            />
            <SolutionCard
              solutionName="Investimentos Diretos"
              briefDescription="O Loor também investe diretamente em startups com alto potencial."
              ctaButton={{
                text: "Apresente seu pitch",
                url: "/solucoes/investimentos-diretos"
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
              "Startups bem preparadas captam melhor, crescem mais rápido e geram mais impacto."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-6">Pronto para acelerar seu crescimento?</h2>
            <p className="text-white/90 text-lg mb-8">
              Cadastre sua startup e comece sua jornada com o Loor hoje mesmo.
            </p>
            <Link to="/contato" className="cta-primary bg-white text-loor-blue hover:bg-gray-100 text-lg px-8 py-4">
              🚀 Cadastre sua startup
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParaQuemStartups;
