
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu: string) => {
    if (dropdownOpen === menu) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(menu);
    }
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Quem Somos", path: "/quem-somos" },
    {
      name: "Soluções",
      path: "/solucoes",
      submenu: [
        { name: "Investimentos Diretos em Startups", path: "/solucoes/investimentos-diretos" },
        { name: "Equity Crowdfunding", path: "/solucoes/equity-crowdfunding" },
        { name: "Plataforma White Label CVM 88", path: "/solucoes/plataforma-white-label" },
        { name: "Plataforma de Investimento Privado", path: "/solucoes/investimento-privado" },
        { name: "Qualificação de Startups", path: "/solucoes/qualificacao-startups" },
        { name: "Back Office Estratégico", path: "/solucoes/back-office-estrategico" },
      ],
    },
    {
      name: "Para Quem",
      path: "/para-quem",
      submenu: [
        { name: "Startups", path: "/para-quem/startups" },
        { name: "Investidores", path: "/para-quem/investidores" },
        { name: "Corporates", path: "/para-quem/corporates" },
        { name: "Governos e Organizações", path: "/para-quem/governos-organizacoes" },
      ],
    },
    { name: "Diferenciais", path: "/diferenciais" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    className="navbar-item flex items-center"
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={dropdownOpen === item.name}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `navbar-item ${isActive ? "active" : ""}`}
                  >
                    {item.name}
                  </NavLink>
                )}

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                              isActive ? "bg-gray-100 font-medium" : ""
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="cta-outline">
              ENTRAR
            </Link>
            <Link to="/contato" className="cta-primary">
              Fale com um especialista
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-500 hover:text-loor-blue focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Logo linkClassName="block" onClick={() => setIsOpen(false)} />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-500 hover:text-loor-blue focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.submenu ? (
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left font-medium py-2 border-b"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          dropdownOpen === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen === item.name && (
                      <ul className="pl-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <NavLink
                              to={subItem.path}
                              className={({ isActive }) =>
                                `block py-2 ${
                                  isActive ? "text-loor-primary font-medium" : "text-gray-600"
                                }`
                              }
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 border-b ${
                        isActive ? "text-loor-primary font-medium" : "text-gray-600"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
            <li className="pt-4 space-y-3">
              <Link
                to="/login"
                className="cta-outline w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                ENTRAR
              </Link>
              <Link
                to="/contato"
                className="cta-primary w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Fale com um especialista
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
