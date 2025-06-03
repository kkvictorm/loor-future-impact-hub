
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  linkClassName?: string;
  onClick?: () => void;
}

const Logo = ({ className = "", linkClassName = "", onClick }: LogoProps) => (
  <Link to="/" aria-label="LOOR Home" className={linkClassName} onClick={onClick}>
    <img 
      src="/lovable-uploads/ec2ac540-9f22-49a2-813d-caf541d8f149.png" 
      alt="LOOR" 
      className={`h-8 ${className}`}
    />
  </Link>
);

export default Logo;
