
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-loor-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo className="h-8" />
            </div>
            <p className="text-loor-text-gray text-sm">Your future, our present.</p>
            <p className="text-loor-text-gray text-sm">
              Conectamos inovação e capital para transformar oportunidades em impacto real.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-loor-blue">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-loor-text-gray hover:text-loor-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-loor-text-gray hover:text-loor-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-loor-text-gray hover:text-loor-primary transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/para-quem" className="text-loor-text-gray hover:text-loor-primary transition-colors">
                  Para Quem
                </Link>
              </li>
              <li>
                <Link to="/diferenciais" className="text-loor-text-gray hover:text-loor-primary transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-loor-text-gray hover:text-loor-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-loor-blue">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/termos-de-uso"
                  className="text-loor-text-gray hover:text-loor-primary transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="text-loor-text-gray hover:text-loor-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/lgpd" className="text-loor-text-gray hover:text-loor-primary transition-colors">
                  Conformidade LGPD
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-loor-text-gray hover:text-loor-primary transition-colors">
                  Área de Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-loor-blue">Contato</h3>
            <ul className="space-y-2 text-loor-text-gray">
              <li>contato@loor.com.br</li>
              <li>+55 (11) 9999-9999</li>
              <li className="pt-4">
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-loor-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-loor-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-loor-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-loor-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-loor-text-gray text-sm">
            © {currentYear} LOOR. Todos os direitos reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-loor-text-gray text-sm">Feito em Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
