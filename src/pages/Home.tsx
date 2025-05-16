
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users, Building, LineChart, Shield, Award, Zap } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import SolutionCard from "@/components/SolutionCard";
import BlogPostCard from "@/components/BlogPostCard";
import PartnershipSection from "@/components/PartnershipSection";

const Home = () => {
  useEffect(() => {
    // For animation of sections as they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Conectamos inovação e capital para transformar oportunidades em impacto real."
        ctaButtonPrimaryText="Conheça o LOOR"
        ctaButtonPrimaryLink="/quem-somos"
        ctaButtonSecondaryText="Fale Conosco"
        ctaButtonSecondaryLink="/contato"
      />

      {/* What We Do Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="fade-in-section">
            <SectionTitle
              overline="O que fazemos"
              title="Soluções completas para o ecossistema de inovação"
              subtitle="Desenvolvemos tecnologias e serviços que conectam startups promissoras a investidores estratégicos, sempre com foco em conformidade regulatória e impacto positivo."
              alignment="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="fade-in-section">
              <Card
                icon={<Shield size={42} />}
                title="Regulação"
                description="Operamos em total conformidade com a Instrução CVM 88/2022, garantindo segurança jurídica para todas as partes envolvidas."
                link={{ text: "Saiba mais", url: "/diferenciais" }}
              />
            </div>

            <div className="fade-in-section">
              <Card
                icon={<Zap size={42} />}
                title="Tecnologia"
                description="Nossa plataforma proprietária oferece uma experiência fluida e segura para investidores e startups, com arquitetura modular e escalável."
                link={{ text: "Saiba mais", url: "/diferenciais" }}
              />
            </div>

            <div className="fade-in-section">
              <Card
                icon={<LineChart size={42} />}
                title="Impacto"
                description="Facilitamos o acesso ao capital para startups inovadoras, contribuindo para o desenvolvimento econômico sustentável."
                link={{ text: "Saiba mais", url: "/diferenciais" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="bg-loor-gray section-padding">
        <div className="container mx-auto px-4">
          <div className="fade-in-section">
            <SectionTitle
              overline="Soluções em destaque"
              title="Como podemos ajudar seu negócio"
              subtitle="Conheça nossas principais soluções para investidores e empreendedores."
              alignment="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="fade-in-section">
              <SolutionCard
                solutionName="Equity Crowdfunding"
                briefDescription="Invista em startups inovadoras com valores a partir de R$ 1.000,00 através de nossa plataforma regulada pela CVM."
                benefitsList={[
                  "Acesso a oportunidades curadas",
                  "Investimento a partir de R$ 1.000,00",
                  "Conformidade com a IN CVM 88/2022",
                  "Acompanhamento pós-investimento"
                ]}
                ctaButton={{
                  text: "Conhecer solução",
                  url: "/solucoes/equity-crowdfunding"
                }}
              />
            </div>

            <div className="fade-in-section">
              <SolutionCard
                solutionName="Qualificação de Startups"
                briefDescription="Preparamos sua startup para acessar capital com estrutura, governança e compliance."
                benefitsList={[
                  "Avaliação de maturidade",
                  "Mentoria especializada",
                  "Preparação para captação",
                  "Acesso a investidores"
                ]}
                ctaButton={{
                  text: "Conhecer solução",
                  url: "/solucoes/qualificacao-startups"
                }}
              />
            </div>

            <div className="fade-in-section">
              <SolutionCard
                solutionName="Plataforma White Label"
                briefDescription="Tenha sua própria plataforma de investimentos em startups, em conformidade com a CVM."
                benefitsList={[
                  "Tecnologia proprietária",
                  "Suporte operacional completo",
                  "Conformidade regulatória",
                  "Customização completa"
                ]}
                ctaButton={{
                  text: "Conhecer solução",
                  url: "/solucoes/plataforma-white-label"
                }}
              />
            </div>
          </div>

          <div className="mt-12 text-center fade-in-section">
            <Link to="/solucoes" className="cta-secondary inline-flex items-center">
              Ver todas as soluções
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* For Who We Serve */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="fade-in-section">
            <SectionTitle
              overline="Para quem servimos"
              title="Soluções sob medida para você"
              subtitle="Oferecemos serviços especializados para diferentes perfis do ecossistema de inovação."
              alignment="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="fade-in-section">
              <Card
                icon={<Zap size={36} />}
                title="Startups"
                description="Acesse capital de forma estruturada e conte com nossa expertise para acelerar seu crescimento."
                link={{ text: "Soluções para Startups", url: "/para-quem/startups" }}
                className="h-full"
              />
            </div>

            <div className="fade-in-section">
              <Card
                icon={<Briefcase size={36} />}
                title="Investidores"
                description="Diversifique seu portfólio com oportunidades de investimento em startups inovadoras."
                link={{ text: "Soluções para Investidores", url: "/para-quem/investidores" }}
                className="h-full"
              />
            </div>

            <div className="fade-in-section">
              <Card
                icon={<Building size={36} />}
                title="Corporates"
                description="Tenha sua própria plataforma de investimentos em startups com nossa solução White Label."
                link={{ text: "Soluções para Corporates", url: "/para-quem/corporates" }}
                className="h-full"
              />
            </div>

            <div className="fade-in-section">
              <Card
                icon={<Users size={36} />}
                title="Governos e Organizações"
                description="Impulsione o ecossistema de inovação com nossas ferramentas de qualificação e conexão."
                link={{ text: "Saiba mais", url: "/para-quem/governos-organizacoes" }}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="bg-loor-blue text-white section-padding">
        <div className="container mx-auto px-4">
          <div className="fade-in-section">
            <SectionTitle
              overline="Por que escolher o LOOR"
              title="Nossos Diferenciais"
              subtitle="Conheça o que torna o LOOR a plataforma ideal para conectar startups e investidores."
              alignment="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="fade-in-section">
              <div className="bg-white/10 rounded-lg p-6 hover:bg-white/15 transition-colors">
                <Shield className="text-loor-green h-12 w-12 mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-3">Conformidade com a CVM</h3>
                <p className="text-white/80">
                  Total aderência à Instrução CVM 88/2022, garantindo segurança jurídica para todos os envolvidos.
                </p>
              </div>
            </div>

            <div className="fade-in-section">
              <div className="bg-white/10 rounded-lg p-6 hover:bg-white/15 transition-colors">
                <Award className="text-loor-green h-12 w-12 mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-3">Tecnologia proprietária</h3>
                <p className="text-white/80">
                  Plataforma desenvolvida internamente com arquitetura modular, escalável e segura.
                </p>
              </div>
            </div>

            <div className="fade-in-section">
              <div className="bg-white/10 rounded-lg p-6 hover:bg-white/15 transition-colors">
                <LineChart className="text-loor-green h-12 w-12 mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-3">Atuação como investidor</h3>
                <p className="text-white/80">
                  Investimos diretamente nas startups que acreditamos, alinhando interesses com nossos parceiros.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center fade-in-section">
            <Link to="/diferenciais" className="cta-outline text-white border-white hover:bg-white hover:text-loor-blue">
              Conheça todos os diferenciais
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <PartnershipSection />

      {/* Blog Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="fade-in-section">
            <SectionTitle
              overline="Blog"
              title="Conteúdos Recentes"
              subtitle="Fique por dentro das últimas novidades do ecossistema de inovação e investimentos."
              alignment="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Example blog posts - would be replaced with dynamic content */}
            <div className="fade-in-section">
              <BlogPostCard
                featuredImageUrl="https://via.placeholder.com/600x400"
                category="Investimentos"
                title="Como funciona o Equity Crowdfunding no Brasil?"
                excerpt="Entenda como funciona essa modalidade de investimento regulamentada pela CVM e quais seus benefícios para startups e investidores."
                date="12 Maio 2023"
                author="Equipe LOOR"
                postUrl="/blog/como-funciona-equity-crowdfunding"
              />
            </div>

            <div className="fade-in-section">
              <BlogPostCard
                featuredImageUrl="https://via.placeholder.com/600x400"
                category="Captação"
                title="5 erros comuns de startups na captação de recursos"
                excerpt="Descubra os principais erros que startups cometem durante o processo de captação de recursos e como evitá-los."
                date="05 Maio 2023"
                author="Equipe LOOR"
                postUrl="/blog/erros-startups-captacao"
              />
            </div>

            <div className="fade-in-section">
              <BlogPostCard
                featuredImageUrl="https://via.placeholder.com/600x400"
                category="Mercado"
                title="Tendências de investimento em startups para 2023"
                excerpt="Análise das principais tendências e setores promissores para investimento em startups no Brasil e no mundo."
                date="28 Abril 2023"
                author="Equipe LOOR"
                postUrl="/blog/tendencias-investimento-startups"
              />
            </div>
          </div>

          <div className="mt-12 text-center fade-in-section">
            <Link to="/blog" className="cta-secondary inline-flex items-center">
              Ver todos os conteúdos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-loor-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in-section max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos transformar o futuro juntos?</h2>
            <p className="text-white/90 text-lg mb-8">
              Entre em contato conosco e descubra como o LOOR pode impulsionar seu negócio ou suas oportunidades de investimento.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contato" className="bg-white text-loor-green font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2">
                Fale com um especialista
                <ArrowRight size={18} />
              </Link>
              <Link to="/solucoes/qualificacao-startups" className="bg-white/10 text-white border border-white border-opacity-40 font-medium px-6 py-3 rounded-md hover:bg-white/20 transition-all duration-300">
                Cadastrar minha startup
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
