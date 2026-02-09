import { Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
const TopBar = () => {
  return <div className="text-white text-sm py-2 bg-[#4c1544]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left side - Contact options */}
        <div className="flex items-center gap-6">
          <a href="tel:1-800-123-4567" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call</span>
          </a>
          <a href="mailto:support@wisepelican.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <button className="flex items-center gap-2 hover:text-primary transition-colors" aria-label="Open chat">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Chat</span>
          </button>
        </div>

        {/* Right side - User links */}
        <div className="flex items-center gap-6">
          <Link to="/login" className="hover:text-primary transition-colors">
            User Login
          </Link>
          <Link to="/knowledge-base" className="hover:text-primary transition-colors hidden sm:inline">
            Knowledge Base
          </Link>
        </div>
      </div>
    </div>;
};
export default TopBar;