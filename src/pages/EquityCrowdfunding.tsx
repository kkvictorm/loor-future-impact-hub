
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Building, Users, CheckCircle, FileCheck, Megaphone, CreditCard } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SolutionDetailSection from "@/components/SolutionDetailSection";
import ProcessStep from "@/components/ProcessStep";
import TargetProfile from "@/components/TargetProfile";

const EquityCrowdfunding = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Capte investimento com segurança e alcance nacional"
        subtitle="Nossa plataforma de equity crowdfunding é 100% regulamentada pela CVM (IN 88/2022) e conecta sua startup a uma base crescente de investidores."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* O que é */}
      <SolutionDetailSection
        title="O que é"
        content="Uma plataforma digital que permite que startups realizem rodadas públicas de investimento, acessando um público amplo de investidores pessoas físicas e jurídicas, com total conformidade regulatória."
        theme="light"
      />

      {/* Para quem é */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Para quem é</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <TargetProfile
                icon={<Building size={24} />}
                title="Startups com CNPJ ativo e estrutura societária regularizada"
                description="Empresas formalmente constituídas e com documentação em ordem"
                theme="dark"
              />
              <TargetProfile
                icon={<CheckCircle size={24} />}
                title="Empresas com modelo de negócio validado e proposta clara"
                description="Startups que já comprovaram a viabilidade do seu modelo de negócio"
                theme="dark"
              />
              <TargetProfile
                icon={<Shield size={24} />}
                title="Fundadores comprometidos com transparência e governança"
                description="Empreendedores dispostos a seguir boas práticas de governança corporativa"
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
                title="Aplicação"
                description="Aplicação e pré-análise da startup"
                icon={<FileCheck size={24} />}
              />
              <ProcessStep
                number={2}
                title="Preparação"
                description="Preparação da campanha com apoio do time Loor"
                icon={<Users size={24} />}
              />
              <ProcessStep
                number={3}
                title="Divulgação"
                description="Divulgação pública e captação pela plataforma"
                icon={<Megaphone size={24} />}
              />
              <ProcessStep
                number={4}
                title="Finalização"
                description="Coleta de documentos, assinatura digital e repasse do capital"
                icon={<CreditCard size={24} />}
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
                <h3 className="text-white font-semibold text-xl mb-3">Regulação CVM 88/2022 com segurança jurídica</h3>
                <p className="text-white/90">Total conformidade com a regulamentação da CVM, garantindo segurança para startups e investidores.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Users className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Suporte na preparação da oferta e comunicação</h3>
                <p className="text-white/90">Nossa equipe auxilia na estruturação da campanha e comunicação com investidores.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <CheckCircle className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Experiência com campanhas e acompanhamento pós-captação</h3>
                <p className="text-white/90">Estrutura de dados e relatórios para acompanhar o desenvolvimento pós-investimento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Pronto para captar com estrutura e visibilidade?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Cadastre sua startup em nossa plataforma e comece sua jornada de captação com total segurança regulatória.
            </p>
            <Link to="/contato" className="cta-primary text-lg px-8 py-4">
              🚀 Cadastrar minha startup
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquityCrowdfunding;
