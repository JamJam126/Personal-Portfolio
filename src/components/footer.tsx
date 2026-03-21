import { EmailIcon } from "./icons/emailIcon";
import { GitHubIcon } from "./icons/githubIcon";
import { LinkedInIcon } from "./icons/linkedInIcon";
import { TelegramIcon } from "./icons/telegramIcon";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 
                p-4 sm:p-4 w-full bg-primary border-t border-b border-border text-text-sub"
    >
      <h3 className="font-medium text-xs">© 2026 Vong Rithea</h3>
      <div className="flex gap-8 sm:gap-4">
        <Link
          className="flex items-center justify-center w-6 h-6 
                    hover:text-text transition-colors duration-150"
          href={"https://www.linkedin.com/in/vong-rithea-70337233a/"}
        >
          <LinkedInIcon size={32} />
        </Link>
        <Link
          className="flex items-center justify-center w-6 h-6
                    hover:text-text transition-colors duration-150"
          href={"mailto:vongrithea126@gmail.com"}
        >
          <EmailIcon size={32} />
        </Link>
        <Link
          className="flex items-center justify-center w-6 h-6
                    hover:text-text transition-colors duration-150"
          href="https://github.com/JamJam126"
        >
          <GitHubIcon size={32} />
        </Link>
        <Link
          className="flex items-center justify-center w-6 h-6
                    hover:text-text transition-colors duration-150"
          href={"https://t.me/vongrithea"}
        >
          <TelegramIcon size={32} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;