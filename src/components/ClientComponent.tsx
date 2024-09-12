"use client";
import { ReactNode, useState, useEffect } from "react";
import Loader from "@/components/loader";

interface ClientComponentProps {
  children: ReactNode;
}

const ClientComponent: React.FC<ClientComponentProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 15000); 

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <Loader /> : children}</>;
};

export default ClientComponent;
