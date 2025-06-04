
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, TrendingUp, Shield, Award, Building } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SolutionDetailSection from "@/components/SolutionDetailSection";
import ProcessStep from "@/components/ProcessStep";
import TargetProfile from "@/components/TargetProfile";

const InvestimentosDirectos = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Investimos diretamente em startups com alto potencial de crescimento"
        subtitle="Apostamos em negócios inovadores, com fundadores qualificados e soluções escaláveis, gerando impacto real e retornos sustentáveis."
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        alignment="center"
      />

      {/* O que é */}
      <SolutionDetailSection
        title="O que é"
        content="O Loor atua como investidor direto em startups com alto grau de inovação, tração validada e capacidade de escala. Selecionamos oportunidades com forte tese de crescimento e nos posicionamos como parceiros estratégicos para o desenvolvimento dessas empresas."
        theme="light"
      />

      {/* Para quem é */}
      <section className="bg-loor-blue section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Para quem é</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TargetProfile
                icon={<TrendingUp size={24} />}
                title="Startups em fase de tração ou crescimento"
                description="Empresas que já validaram seu produto no mercado e buscam escalar suas operações"
                theme="dark"
              />
              <TargetProfile
                icon={<Users size={24} />}
                title="Fundadores com histórico sólido e dedicação full-time"
                description="Empreendedores comprometidos e com experiência relevante no setor"
                theme="dark"
              />
              <TargetProfile
                icon={<Target size={24} />}
                title="Negócios com modelo escalável e potencial exponencial"
                description="Startups com modelo de negócio validado e capacidade de crescimento acelerado"
                theme="dark"
              />
              <TargetProfile
                icon={<Shield size={24} />}
                title="Empresas alinhadas a critérios ESG e impacto positivo"
                description="Negócios que geram valor sustentável e impacto social ou ambiental positivo"
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <ProcessStep
                number={1}
                title="Triagem"
                description="Triagem de oportunidades com base em nossa metodologia própria"
              />
              <ProcessStep
                number={2}
                title="Avaliação"
                description="Avaliação de perfil do time, produto, mercado e modelo"
              />
              <ProcessStep
                number={3}
                title="Validação"
                description="Validação documental e estratégica"
              />
              <ProcessStep
                number={4}
                title="Decisão"
                description="Decisão de investimento via comitê"
              />
              <ProcessStep
                number={5}
                title="Acompanhamento"
                description="Acompanhamento ativo do portfólio com suporte e rede de valor"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <Award className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Experiência real em construção e análise de negócios</h3>
                <p className="text-white/90">Nossa equipe tem experiência prática tanto na construção quanto na análise de startups e negócios inovadores.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Building className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Alinhamento estratégico com investidores institucionais</h3>
                <p className="text-white/90">Conectamos startups com nossa rede de investidores qualificados e institucionais.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Users className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Rede de coinvestimento com o Grupo Entre</h3>
                <p className="text-white/90">Acesso privilegiado à nossa rede de parceiros e coinvestidores estratégicos.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Target className="text-white h-12 w-12 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-3">Olhar criterioso, mas acessível</h3>
                <p className="text-white/90">Análise rigorosa, mas acessível a fundadores fora do eixo tradicional de investimento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-loor-blue text-3xl font-bold mb-6">Quer apresentar sua startup?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Entre em contato com nosso time de análise e descubra como podemos ser parceiros estratégicos no crescimento da sua empresa.
            </p>
            <Link to="/contato" className="cta-primary text-lg px-8 py-4">
              👉 Fale com nosso time de análise
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestimentosDirectos;
