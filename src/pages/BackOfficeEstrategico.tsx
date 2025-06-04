
import { Link } from "react-router-dom";
import { ArrowRight, Settings, Target, Cog, BarChart3, Briefcase, Building, Users } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SolutionDetailSection from "@/components/SolutionDetailSection";
import ProcessStep from "@/components/ProcessStep";
import TargetProfile from "@/components/TargetProfile";

const BackOfficeEstrategico = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Operação completa de investimento sem precisar montar estrutura interna"
        subtitle="Oferecemos um modelo de operação sob demanda, com suporte regulatório, técnico e estratégico para sua tese de investimento."
        backgroundImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* O que é */}
      <SolutionDetailSection
        title="O que é"
        content="Uma solução de terceirização do backoffice de investimento: nós operamos a base jurídica, técnica, relacional e tecnológica, para que você foque na tese, no relacionamento ou no deal flow."
        theme="light"
      />

      {/* Para quem é */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Para quem é</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <TargetProfile
                icon={<Briefcase size={24} />}
                title="Micro VCs, CVCs ou clubes de investimento em estruturação"
                description="Organizações que estão iniciando e precisam de estrutura operacional profissional"
                theme="dark"
              />
              <TargetProfile
                icon={<Building size={24} />}
                title="Grupos que já captam, mas querem operar com mais eficiência"
                description="Investidores que desejam profissionalizar e otimizar suas operações existentes"
                theme="dark"
              />
              <TargetProfile
                icon={<Users size={24} />}
                title="Organizações que querem lançar teses sem equipe interna"
                description="Entidades que desejam investir mas preferem terceirizar a operação técnica"
                theme="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-loor-blue text-3xl font-bold mb-12 text-center">Como funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProcessStep
                number={1}
                title="Diagnóstico"
                description="Diagnóstico da sua tese e necessidades operacionais"
                icon={<Target size={24} />}
              />
              <ProcessStep
                number={2}
                title="Montagem"
                description="Montagem do modelo ideal (regulação, tech, jurídico, CRM)"
                icon={<Settings size={24} />}
              />
              <ProcessStep
                number={3}
                title="Execução"
                description="Execução de ponta a ponta: onboarding, alocação, relacionamento e relatórios"
                icon={<Cog size={24} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher o Loor */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Por que escolher o Loor</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <Settings className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Equipe experiente em estruturação de operações</h3>
                <p className="text-white/90">Nossa equipe tem vasta experiência na criação e gestão de operações de investimento.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Cog className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Flexibilidade para operar desde modelos simples até avançados</h3>
                <p className="text-white/90">Adaptamos nossa operação desde estruturas básicas até modelos complexos e sofisticados.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <BarChart3 className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Você foca no que importa, a gente cuida do resto</h3>
                <p className="text-white/90">Permita que você se concentre na estratégia e relacionamentos enquanto cuidamos da operação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Quer investir sem ter que montar uma operação inteira?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Entre em contato e descubra como podemos estruturar e operar sua tese de investimento de forma completa e eficiente.
            </p>
            <Link to="/contato" className="cta-primary text-lg px-8 py-4">
              📊 Vamos conversar
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackOfficeEstrategico;
