"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const getAppUrl = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://app.cakewalk.ai";
};

interface CTAButtonProps {
  size?: "sm" | "default" | "lg";
  className?: string;
}

export const CTAButton = ({ size = "lg", className = "" }: CTAButtonProps) => {
  return (
    <a href={`${getAppUrl()}/get-started`}>
      <Button size={size} variant="glow" className={`group ${className}`}>
        Check Your Visibility
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </a>
  );
};
