
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Shield, Settings, HeadphonesIcon, Briefcase, Users, Building } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SolutionDetailSection from "@/components/SolutionDetailSection";
import ProcessStep from "@/components/ProcessStep";
import TargetProfile from "@/components/TargetProfile";

const PlataformaWhiteLabel = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Tenha sua própria plataforma de crowdfunding operada com tecnologia Loor"
        subtitle="Oferecemos uma solução white label com infraestrutura, regulação e suporte para você captar ou intermediar investimentos com sua marca."
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* O que é */}
      <SolutionDetailSection
        title="O que é"
        content="Uma plataforma de equity crowdfunding personalizável, construída sobre nossa base regulada e tecnológica. Ideal para empresas, grupos de investimento ou marcas que desejam operar sob CVM 88 sem precisar desenvolver ou homologar a operação internamente."
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
                title="Assets, gestores e estruturas de investimento"
                description="Profissionais do mercado financeiro que desejam operar plataformas próprias"
                theme="dark"
              />
              <TargetProfile
                icon={<Users size={24} />}
                title="Empresas com comunidades de investidores ou base de empreendedores"
                description="Organizações que já possuem rede estabelecida e querem monetizar ou estruturar investimentos"
                theme="dark"
              />
              <TargetProfile
                icon={<Building size={24} />}
                title="Grupos que desejam uma plataforma própria com operação terceirizada"
                description="Empresas que querem ter sua marca mas preferem terceirizar a operação técnica e regulatória"
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ProcessStep
                number={1}
                title="Definição"
                description="Definição da identidade visual e modelo de uso (marca branca)"
                icon={<Palette size={24} />}
              />
              <ProcessStep
                number={2}
                title="Onboarding"
                description="Onboarding regulatório e ajustes personalizados"
                icon={<Shield size={24} />}
              />
              <ProcessStep
                number={3}
                title="Operação"
                description="Operação pela equipe Loor ou pelo parceiro (a depender do plano)"
                icon={<Settings size={24} />}
              />
              <ProcessStep
                number={4}
                title="Suporte"
                description="Suporte jurídico, técnico e comercial"
                icon={<HeadphonesIcon size={24} />}
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
                <Shield className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Infraestrutura pronta e regulada</h3>
                <p className="text-white/90">Plataforma já homologada pela CVM e pronta para operar, sem necessidade de desenvolvimento próprio.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Users className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Time especializado em CVM 88 e backoffice de captação</h3>
                <p className="text-white/90">Equipe experiente para operar todos os aspectos regulatórios e operacionais.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Settings className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Flexibilidade: use com sua marca, no seu domínio</h3>
                <p className="text-white/90">Total customização visual e operacional, com ou sem operação ativa por nossa parte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Quer lançar sua própria plataforma de crowdfunding?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Entre em contato com nosso time e descubra como podemos personalizar nossa solução para sua marca e necessidades.
            </p>
            <Link to="/contato" className="cta-primary text-lg px-8 py-4">
              🧩 Fale com nosso time
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlataformaWhiteLabel;
