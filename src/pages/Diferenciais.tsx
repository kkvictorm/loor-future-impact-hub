
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import IconWithText from "@/components/IconWithText";
import { Link } from "react-router-dom";
import { 
  Shield, Award, LineChart, Zap, Globe, Briefcase, Users, ArrowRight 
} from "lucide-react";

const Diferenciais = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Nossos Diferenciais"
        subtitle="Conheça o que torna o LOOR a plataforma ideal para conectar startups e investidores."
        alignment="center"
      />

      {/* Main Content */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            overline="Por que nos escolher"
            title="Diferenciais LOOR"
            subtitle="Entenda por que somos a plataforma ideal para conectar startups e capital."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <IconWithText
                icon={<Shield size={42} />}
                title="Conformidade com a CVM"
                text="Total aderência à Instrução CVM 88/2022, garantindo segurança jurídica para todos os envolvidos em nossas operações de investimento."
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <IconWithText
                icon={<Zap size={42} />}
                title="Soluções acessíveis e seguras"
                text="Democratizamos o acesso ao investimento em startups com valores acessíveis, mantendo os mais altos padrões de segurança e conformidade."
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <IconWithText
                icon={<Award size={42} />}
                title="Tecnologia proprietária"
                text="Nossa plataforma desenvolvida internamente oferece uma experiência fluida e segura, com arquitetura modular, escalável e customizável."
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <IconWithText
                icon={<Users size={42} />}
                title="Operação white label completa"
                text="Oferecemos suporte integral para operações white label, permitindo que parceiros tenham sua própria plataforma de investimento em conformidade com a CVM."
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <IconWithText
                icon={<Globe size={42} />}
                title="Presença internacional"
                text="Contamos com rede ativa de parceiros em diferentes países, facilitando a expansão internacional para startups e acesso a oportunidades globais para investidores."
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <IconWithText
                icon={<LineChart size={42} />}
                title="Atuação como investidor"
                text="Investimos diretamente nas startups que acreditamos, alinhando interesses com nossos parceiros e demonstrando confiança nas oportunidades apresentadas."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="bg-loor-gray section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Parceria Estratégica"
            subtitle="Nossa parceria com o Grupo Entre Investimentos fortalece nossa atuação e amplia oportunidades."
            alignment="center"
          />

          <div className="bg-white p-8 rounded-lg shadow-md mt-8 text-center">
            <div className="flex justify-center mb-6">
              <Briefcase size={48} className="text-loor-green" />
            </div>
            <h3 className="text-xl font-semibold mb-4">🤝 Parceria com o Grupo Entre Investimentos</h3>
            <p className="text-gray-700">
              Atuamos junto ao Grupo Entre Investimentos na identificação e qualificação de startups com alto potencial. 
              Essa parceria estratégica fortalece o acesso ao capital e multiplica as oportunidades para negócios que 
              desejam crescer com estrutura e credibilidade.
            </p>

            <div className="mt-6">
              <Link to="/quem-somos" className="text-loor-green hover:text-loor-blue transition-colors font-medium inline-flex items-center">
                Saiba mais sobre nós
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-loor-blue text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos transformar o futuro juntos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como o LOOR pode impulsionar seu negócio ou suas oportunidades de investimento.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contato" className="bg-loor-green text-white font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300">
              Fale com um especialista
            </Link>
            <Link to="/solucoes" className="bg-white/10 text-white border border-white border-opacity-40 font-medium px-6 py-3 rounded-md hover:bg-white/20 transition-all duration-300">
              Nossas soluções
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diferenciais;
