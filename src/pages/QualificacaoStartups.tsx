
import { Link } from "react-router-dom";
import { ArrowRight, Filter, ClipboardCheck, FileText, TrendingUp, Clock, Shield, Database } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SolutionDetailSection from "@/components/SolutionDetailSection";
import ProcessStep from "@/components/ProcessStep";
import TargetProfile from "@/components/TargetProfile";

const QualificacaoStartups = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Startups mais preparadas, investimentos mais seguros"
        subtitle="Ajudamos a selecionar, avaliar e qualificar startups para que seus investimentos sejam mais estratégicos, conscientes e alinhados à sua tese."
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* O que é */}
      <SolutionDetailSection
        title="O que é"
        content="Um serviço completo de curadoria e análise de startups, com metodologia própria. Ideal para grupos que recebem muitos pitches e querem ganhar tempo, reduzir riscos e manter qualidade."
        theme="light"
      />

      {/* Para quem é */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Para quem é</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <TargetProfile
                icon={<Filter size={24} />}
                title="Investidores que recebem muitos deals"
                description="Profissionais sobrecarregados com volume de oportunidades e precisam de filtragem eficiente"
                theme="dark"
              />
              <TargetProfile
                icon={<TrendingUp size={24} />}
                title="Hubs, programas de aceleração e fundos"
                description="Organizações que precisam avaliar grandes volumes de startups de forma sistemática"
                theme="dark"
              />
              <TargetProfile
                icon={<Shield size={24} />}
                title="Gestores de plataformas de investimento"
                description="Responsáveis por curadoria que precisam manter alta qualidade das oportunidades oferecidas"
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
                title="Triagem"
                description="Triagem e análise preliminar da startup"
                icon={<Filter size={24} />}
              />
              <ProcessStep
                number={2}
                title="Coleta"
                description="Coleta de informações chave (produto, mercado, time, compliance)"
                icon={<ClipboardCheck size={24} />}
              />
              <ProcessStep
                number={3}
                title="Análise"
                description="Análise estruturada e parecer técnico"
                icon={<FileText size={24} />}
              />
              <ProcessStep
                number={4}
                title="Acompanhamento"
                description="Acompanhamento de evolução se desejado"
                icon={<TrendingUp size={24} />}
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
                <h3 className="text-white font-semibold text-xl mb-3">Metodologia validada com base em análise de portfólio real</h3>
                <p className="text-white/90">Nossa metodologia foi desenvolvida e testada com investimentos reais em nosso próprio portfólio.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Clock className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Redução de risco e ganho de tempo</h3>
                <p className="text-white/90">Focamos nas informações que realmente importam para acelerar suas decisões de investimento.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Database className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Acesso a base própria de startups e inteligência de dados</h3>
                <p className="text-white/90">Aproveitamos nossa rede e base de dados para oferecer insights únicos sobre o mercado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Quer qualificar melhor os deals que chegam até você?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Entre em contato e descubra como podemos otimizar seu processo de análise e seleção de startups.
            </p>
            <Link to="/contato" className="cta-primary text-lg px-8 py-4">
              📥 Conte com a gente
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualificacaoStartups;
