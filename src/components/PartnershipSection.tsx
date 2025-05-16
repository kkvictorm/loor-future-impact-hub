
const PartnershipSection = () => {
  return (
    <section className="bg-loor-gray py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="md:w-1/4 flex justify-center">
              {/* Placeholder for partner logo - replace with actual logo */}
              <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 font-medium">Logo Grupo Entre</span>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-4 flex items-center">
                <span className="text-2xl mr-2">🤝</span> Parceria com o Grupo Entre Investimentos
              </h3>
              <p className="text-gray-600">
                Atuamos junto ao Grupo Entre Investimentos na identificação e qualificação de startups com alto potencial. 
                Essa parceria estratégica fortalece o acesso ao capital e multiplica as oportunidades para negócios que 
                desejam crescer com estrutura e credibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
