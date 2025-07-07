// import * as RM from "@root/rm";
import { commonConfig } from "@/rm";
import { Facebook, Instagram, MessageCircle, Mail } from "lucide-react";

export const errorMessages = {
  401: {
    title: "401 Unauthorized",
    message: "You are not authorized to access this page.",
  },
  404: {
    title: "404 Page Not Found",
    message: "Sorry, we couldn't find the page you're looking for.",
  },
  500: {
    title: "500 Internal Server Error",
    message: "Something went wrong on our end.",
  },
};

// Add node types here (make sure to add new node components in node-register)
export const nodeTypes = [
  {
    type: "whatsapp",
    label: "Whatsapp",
    description: "Data whatsapp node",
    disabled: false,
  },
  // {
  //   type: "facebook",
  //   label: "Facebook",
  //   description: "Data whatsapp node",
  //   // icon: () => <Facebook className="h-4 w-4 mr-2" />,
  //   disabled: true,
  // },
  // {
  //   type: "instagram",
  //   label: "Instagram",
  //   description: "Send instagram data",
  //   // icon: () => <Instagram className="h-4 w-4 mr-2" />,
  //   disabled: true,
  // },
  // {
  //   type: "email",
  //   label: "Email",
  //   description: "Send facebook notification",
  //   // icon: () => <Mail className="h-4 w-4 mr-2" />,
  //   disabled: true,
  // },
];
