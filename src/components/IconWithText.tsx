
interface IconWithTextProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  layout?: 'icon-top' | 'icon-left';
}

const IconWithText = ({ 
  icon, 
  title,
  text, 
  layout = 'icon-top' 
}: IconWithTextProps) => {
  if (layout === 'icon-top') {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="text-loor-green mb-4">{icon}</div>
        <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    );
  }

  return (
    <div className="flex items-start">
      <div className="text-loor-green mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default IconWithText;
