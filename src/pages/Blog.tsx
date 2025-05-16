
import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import BlogPostCard from "@/components/BlogPostCard";
import { Search } from "lucide-react";

// Mock categories for the blog
const categories = [
  "Todos",
  "Investimentos",
  "Startups",
  "Captação",
  "Mercado",
  "Tecnologia",
  "Regulação"
];

// Mock blog posts
const mockPosts = [
  {
    id: 1,
    featuredImageUrl: "https://via.placeholder.com/600x400",
    category: "Investimentos",
    title: "Como funciona o Equity Crowdfunding no Brasil?",
    excerpt: "Entenda como funciona essa modalidade de investimento regulamentada pela CVM e quais seus benefícios para startups e investidores.",
    date: "12 Maio 2023",
    author: "Equipe LOOR",
    postUrl: "/blog/como-funciona-equity-crowdfunding"
  },
  {
    id: 2,
    featuredImageUrl: "https://via.placeholder.com/600x400",
    category: "Captação",
    title: "5 erros comuns de startups na captação de recursos",
    excerpt: "Descubra os principais erros que startups cometem durante o processo de captação de recursos e como evitá-los.",
    date: "05 Maio 2023",
    author: "Equipe LOOR",
    postUrl: "/blog/erros-startups-captacao"
  },
  {
    id: 3,
    featuredImageUrl: "https://via.placeholder.com/600x400",
    category: "Mercado",
    title: "Tendências de investimento em startups para 2023",
    excerpt: "Análise das principais tendências e setores promissores para investimento em startups no Brasil e no mundo.",
    date: "28 Abril 2023",
    author: "Equipe LOOR",
    postUrl: "/blog/tendencias-investimento-startups"
  },
  {
    id: 4,
    featuredImageUrl: "https://via.placeholder.com/600x400",
    category: "Regulação",
    title: "Entenda a Instrução CVM 88/2022 para plataformas de investimento",
    excerpt: "Guia completo sobre a regulamentação da CVM para plataformas de investimento participativo no Brasil.",
    date: "20 Abril 2023",
    author: "Equipe LOOR",
    postUrl: "/blog/entenda-instrucao-cvm-88-2022"
  },
  {
    id: 5,
    featuredImageUrl: "https://via.placeholder.com/600x400",
    category: "Startups",
    title: "Como preparar sua startup para receber investimento",
    excerpt: "Passos práticos para estruturar sua startup e aumentar as chances de captação de recursos com investidores.",
    date: "15 Abril 2023",
    author: "Equipe LOOR",
    postUrl: "/blog/preparar-startup-para-investimento"
  },
  {
    id: 6,
    featuredImageUrl: "https://via.placeholder.com/600x400",
    category: "Tecnologia",
    title: "Blockchain e o futuro do investimento em startups",
    excerpt: "Como a tecnologia blockchain está revolucionando o mercado de investimentos em empresas inovadoras.",
    date: "10 Abril 2023",
    author: "Equipe LOOR",
    postUrl: "/blog/blockchain-futuro-investimento-startups"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter posts by category and search term
  const filteredPosts = mockPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Blog LOOR"
        subtitle="Informações, tendências e análises sobre o ecossistema de inovação e investimentos em startups."
        alignment="center"
      />

      {/* Blog Content */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
            {/* Category Filter */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-medium mb-4">Filtrar por categoria:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-loor-green text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar no blog..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-loor-green focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  featuredImageUrl={post.featuredImageUrl}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  postUrl={post.postUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">Nenhum resultado encontrado</h3>
              <p className="text-gray-600">
                Tente ajustar sua busca ou filtro para encontrar o que está procurando.
              </p>
            </div>
          )}

          {/* Pagination - Simplified version */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                Anterior
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 bg-loor-green text-white"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                Próximo
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-loor-gray section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Inscreva-se em nossa newsletter"
              subtitle="Receba as últimas novidades sobre o ecossistema de inovação e investimentos em startups."
              alignment="center"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-loor-green focus:border-transparent"
              />
              <button className="bg-loor-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium">
                Inscrever
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Ao se inscrever, você concorda com nossa Política de Privacidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
