
interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo = ({ className = "", width = 120, height = 40 }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/a6540cb7-8eb2-4404-b2a6-2d77807b0a01.png"
      alt="LOOR"
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
