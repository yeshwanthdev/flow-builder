import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { errorMessages } from "@/lib/constants";

export default function Error() {
  const { code } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/workflow");
  };

  const { title, message } = errorMessages[code] || errorMessages[404];

  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            {title}
          </h1>
          <p className="text-gray-500">{message}</p>
        </div>
        <Button varient="primary" onClick={handleClick}>
          Return to Home
        </Button>
      </div>
    </div>
  );
}
