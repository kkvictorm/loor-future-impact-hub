
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Briefcase, Building, Users } from "lucide-react";
import Card from "@/components/Card";

const ParaQuem = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Soluções Sob Medida para Você"
        subtitle="Oferecemos serviços especializados para diferentes perfis do ecossistema de inovação."
        alignment="center"
      />

      {/* Main Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle
            overline="Para quem servimos"
            title="Soluções personalizadas para cada perfil"
            subtitle="Conheça as soluções específicas para o seu perfil no ecossistema de inovação."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Para Startups Section */}
            <div className="bg-loor-gray p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Zap size={32} className="text-loor-green mr-4" />
                <h3 className="text-2xl font-heading font-bold">Para Startups</h3>
              </div>

              <p className="text-gray-700 mb-6">
                Acesse capital de forma estruturada e conte com nossa expertise para acelerar seu crescimento. Nossas soluções ajudam startups em diferentes estágios a se qualificarem para investimento e captarem recursos de forma eficiente.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Captação via Equity Crowdfunding</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Programa de qualificação para captação</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Acesso a investidores qualificados</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Suporte em governança e compliance</span>
                </li>
              </ul>

              <Link to="/para-quem/startups" className="cta-primary inline-flex items-center">
                Soluções para Startups
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Para Investidores Section */}
            <div className="bg-loor-gray p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Briefcase size={32} className="text-loor-green mr-4" />
                <h3 className="text-2xl font-heading font-bold">Para Investidores</h3>
              </div>

              <p className="text-gray-700 mb-6">
                Diversifique seu portfólio com oportunidades de investimento em startups inovadoras. Nossa plataforma oferece acesso a negócios criteriosamente selecionados, com total conformidade regulatória e gestão transparente.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Oportunidades curadas em Equity Crowdfunding</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Investimentos a partir de R$ 1.000</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Relatórios periódicos de desempenho</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Comunidade exclusiva de investidores</span>
                </li>
              </ul>

              <Link to="/para-quem/investidores" className="cta-primary inline-flex items-center">
                Soluções para Investidores
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Para Corporates Section */}
            <div className="bg-loor-gray p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Building size={32} className="text-loor-green mr-4" />
                <h3 className="text-2xl font-heading font-bold">Para Corporates</h3>
              </div>

              <p className="text-gray-700 mb-6">
                Tenha sua própria plataforma de investimentos em startups com nossa solução White Label. Ideal para empresas, fundos e instituições que desejam estruturar programas de investimento ou acelerar inovação aberta.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Plataforma White Label personalizada</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Conformidade com a IN CVM 88/2022</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Suporte operacional completo</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Customização conforme suas necessidades</span>
                </li>
              </ul>

              <Link to="/para-quem/corporates" className="cta-primary inline-flex items-center">
                Soluções para Corporates
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Para Governos e Organizações Section */}
            <div className="bg-loor-gray p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Users size={32} className="text-loor-green mr-4" />
                <h3 className="text-2xl font-heading font-bold">Para Governos e Organizações</h3>
              </div>

              <p className="text-gray-700 mb-6">
                Impulsione o ecossistema de inovação local com nossas ferramentas de qualificação e conexão. Oferecemos soluções para fomentar o empreendedorismo inovador e atrair investimentos para sua região ou setor.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Programas de qualificação de startups</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Plataformas de conexão ecossistema-investidor</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Eventos de conexão com investidores</span>
                </li>
                <li className="flex items-start">
                  <div className="text-loor-green mr-2">•</div>
                  <span>Consultoria para desenvolvimento local</span>
                </li>
              </ul>

              <Link to="/para-quem/governos-organizacoes" className="cta-primary inline-flex items-center">
                Soluções para Governos e Organizações
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mt-16">
            <SectionTitle
              title="Histórias de Sucesso"
              subtitle="Conheça alguns casos de sucesso que passaram pelas nossas soluções."
              alignment="center"
            />

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-8">Em breve compartilharemos histórias de sucesso das nossas parcerias e clientes.</p>

              <Link to="/contato" className="cta-secondary inline-flex items-center">
                Seja o próximo caso de sucesso
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParaQuem;
