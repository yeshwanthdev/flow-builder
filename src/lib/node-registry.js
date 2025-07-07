import { EmailNode } from "@/components/nodes/email-node";
import { FaceBookNode } from "@/components/nodes/facebook-node";
import { InstagramNode } from "@/components/nodes/instagram-node";
import { WhatsappNode } from "@/components/nodes/whatsapp-node";

// register all nodes here
const nodeRegistry = {
  whatsapp: WhatsappNode,
  facebook: FaceBookNode,
  instagram: InstagramNode,
  email: EmailNode,
};

export default nodeRegistry;
