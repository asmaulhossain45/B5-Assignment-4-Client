import { contactInfos, footerQuickLinks, SocialLinks } from "@/constants/links";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { ArrowUp} from "lucide-react";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import siteIcon from "@/assets/BookHut.png"

const footerSections = [
  {
    title: "Quick Links",
    links: footerQuickLinks,
  },
  {
    title: "Contact Us",
    links: contactInfos,
  },
  {
    title: "Follow Us",
    links: SocialLinks,
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground/5">
      <div className="inner-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 py-14 lg:py-28">
        <div>
          <NavLink to={"/"} className={"flex items-center gap-2"}>
            <img
              src={siteIcon}
              alt={`${siteConfig.name} Icon`}
              className={cn("object-contain", "w-8 h-8", "lg:w-10 lg:h-10")}
            />
            <h3 className="text-2xl lg:text-3xl font-bold">
              {siteConfig.name}
            </h3>
          </NavLink>

          <h3 className="font-medium">{siteConfig.title}</h3>

          <p className="max-w-80 mt-4">{siteConfig.description}</p>
        </div>

        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold">{section.title}</h3>
            <ul className="space-y-3 mt-4">
              {section.links.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.href} className={"flex items-center gap-2"}>
                    <link.icon size={16} className="text-brand" />
                    <span className="hover:text-brand">{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t">
        <div className="inner-container flex items-center justify-between gap-4 py-4">
          <p className="">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <NavLink to={"#"} className="flex items-center gap-2">
          <Button variant={"icon"} size={"icon"}><ArrowUp/></Button>
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
