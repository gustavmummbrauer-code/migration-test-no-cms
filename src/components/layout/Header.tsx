import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import wisePelicanLogo from "@/assets/wise-pelican-logo.svg";

const navigationItems = [
  {
    title: "Products",
    items: [
      {
        title: "Postcards",
        description: "Real estate postcards for every occasion",
        href: "/products/postcards",
        subitems: [
          { title: "Just Listed", href: "/products/postcards/just-listed" },
          { title: "Just Sold", href: "/products/postcards/just-sold" },
          { title: "Farming", href: "/products/postcards/farming" },
          { title: "Holiday", href: "/products/postcards/holiday" },
        ],
      },
      {
        title: "Letters",
        description: "Professional real estate letters",
        href: "/products/letters",
      },
      {
        title: "Brochures",
        description: "Property brochures and flyers",
        href: "/products/brochures",
      },
      {
        title: "Greeting Cards",
        description: "Personal touch greeting cards",
        href: "/products/greeting-cards",
      },
    ],
  },
  {
    title: "Industries",
    items: [
      { title: "Real Estate Agents", href: "/industries/real-estate" },
      { title: "Mortgage Brokers", href: "/industries/mortgage" },
      { title: "Insurance Agents", href: "/industries/insurance" },
      { title: "Financial Advisors", href: "/industries/financial" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Templates Gallery", href: "/templates" },
      { title: "Mailing Lists", href: "/mailing-lists" },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-header text-header-foreground sticky top-0 z-50 shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={wisePelicanLogo} 
              alt="Wise Pelican" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-muted hover:text-foreground data-[state=open]:bg-muted">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-card border border-border shadow-lg">
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card">
                            {item.items.map((subitem) => (
                              <li key={subitem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={subitem.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
                                    )}
                                  >
                                    <div className="text-sm font-medium leading-none text-secondary">
                                      {subitem.title}
                                    </div>
                                    {subitem.description && (
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {subitem.description}
                                      </p>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href!}
                        className="text-foreground px-4 py-2 hover:text-primary transition-colors font-medium"
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full"
            >
              <Link to="/signup" className="flex items-center gap-2">
                Create A Free Account
                <User className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-in-right">
          <nav className="container mx-auto px-4 py-4">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-border last:border-0">
                {item.items ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-3 text-foreground font-medium cursor-pointer list-none">
                      {item.title}
                      <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pb-3 pl-4 space-y-2">
                      {item.items.map((subitem) => (
                        <Link
                          key={subitem.title}
                          to={subitem.href}
                          className="block text-muted-foreground hover:text-primary py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={item.href!}
                    className="block py-3 text-foreground font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
              >
                <Link to="/signup" className="flex items-center justify-center gap-2">
                  Create A Free Account
                  <User className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
