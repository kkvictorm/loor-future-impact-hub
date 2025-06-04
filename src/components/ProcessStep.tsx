
import { ReactNode } from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-loor-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
          {icon || number}
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2 text-loor-blue">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ProcessStep;
