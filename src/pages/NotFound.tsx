
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-4 py-12">
        <h1 className="text-6xl font-bold mb-4 text-loor-blue">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Oops! Página não encontrada</p>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
        </p>
        <Link
          to="/"
          className="cta-primary"
        >
          <ArrowLeft size={18} />
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
