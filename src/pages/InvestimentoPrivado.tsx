
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Upload, UserCheck, FileSignature, Users, Briefcase, UserPlus } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SolutionDetailSection from "@/components/SolutionDetailSection";
import ProcessStep from "@/components/ProcessStep";
import TargetProfile from "@/components/TargetProfile";

const InvestimentoPrivado = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Sua operação privada de investimento em startups começa aqui"
        subtitle="Ferramenta digital para gerir investimentos privados com total controle, segurança e eficiência. Ideal para grupos de anjos, micro VCs e deal clubs."
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* O que é */}
      <SolutionDetailSection
        title="O que é"
        content="Uma plataforma privada e segura que permite digitalizar todo o processo de investimento em startups: diligência online, controle de acesso, convites restritos, alocação de capital e assinatura digital."
        theme="light"
      />

      {/* Para quem é */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Para quem é</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <TargetProfile
                icon={<Users size={24} />}
                title="Grupos de investidores ou clubes de anjos"
                description="Comunidades organizadas de investidores que realizam investimentos conjuntos"
                theme="dark"
              />
              <TargetProfile
                icon={<Briefcase size={24} />}
                title="Micro VCs ou CVCs em estágio inicial"
                description="Gestores e fundos em formação que precisam de ferramentas profissionais"
                theme="dark"
              />
              <TargetProfile
                icon={<UserPlus size={24} />}
                title="Consultores, analistas ou advisors"
                description="Profissionais que desejam operar teses exclusivas com grupos seletos de investidores"
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
                title="Área Restrita"
                description="Criação de área restrita com controle de acesso a deals"
                icon={<Lock size={24} />}
              />
              <ProcessStep
                number={2}
                title="Upload"
                description="Upload de documentos e diligência online"
                icon={<Upload size={24} />}
              />
              <ProcessStep
                number={3}
                title="Convites"
                description="Sistema de convite e alocação controlada"
                icon={<UserCheck size={24} />}
              />
              <ProcessStep
                number={4}
                title="Assinatura"
                description="Assinatura digital integrada e relatórios de acompanhamento"
                icon={<FileSignature size={24} />}
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
                <Lock className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Autonomia com segurança</h3>
                <p className="text-white/90">Controle total sobre seus investimentos com a segurança de uma plataforma profissional.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Users className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Plataforma personalizável com suporte jurídico</h3>
                <p className="text-white/90">Adaptamos a ferramenta às suas necessidades específicas com suporte jurídico especializado.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Briefcase className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Ideal para quem quer operar sem tornar-se uma plataforma pública</h3>
                <p className="text-white/90">Perfeito para operações privadas e exclusivas, sem a complexidade de uma plataforma pública.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Quer gerir seu próprio portfólio com estrutura digital?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Descubra como nossa solução pode digitalizar e profissionalizar sua operação de investimentos privados.
            </p>
            <Link to="/contato" className="cta-primary text-lg px-8 py-4">
              🔐 Conheça nossa solução
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestimentoPrivado;
