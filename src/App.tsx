
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Solucoes from "./pages/Solucoes";
import ParaQuem from "./pages/ParaQuem";
import Diferenciais from "./pages/Diferenciais";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/solucoes" element={<Solucoes />} />
              <Route path="/para-quem" element={<ParaQuem />} />
              <Route path="/diferenciais" element={<Diferenciais />} />
              <Route path="/blog" element={<Blog />} />
              
              {/* Placeholder routes for future implementation */}
              <Route path="/solucoes/:solutionSlug" element={<NotFound />} />
              {/* Nested routes for "para quem" */}
              <Route path="/para-quem/:targetSlug" element={<NotFound />} />
              {/* Legal pages */}
              <Route path="/termos-de-uso" element={<NotFound />} />
              <Route path="/politica-de-privacidade" element={<NotFound />} />
              <Route path="/lgpd" element={<NotFound />} />
              <Route path="/login" element={<NotFound />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
