
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className }: BackButtonProps) {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <Button 
      variant="outline" 
      size="icon" 
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-md hover:shadow-lg ${className}`}
      onClick={handleGoBack}
    >
      <ArrowLeft className="h-4 w-4" />
    </Button>
  );
}
