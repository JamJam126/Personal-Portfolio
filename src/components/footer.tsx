import { EmailIcon } from "./icons/emailIcon";
import { GitHubIcon } from "./icons/githubIcon";
import { LinkedInIcon } from "./icons/linkedInIcon";
import { TelegramIcon } from "./icons/telegramIcon";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between p-8 w-full bg-primary border-t border-border text-text-sub">
      <h3 className="font-medium text-sm">Last updated: March 2026</h3>
      <div className="flex gap-4">
        <LinkedInIcon size={24} />
        <EmailIcon size={24} />
        <GitHubIcon size={24} />
        <TelegramIcon size={24} />
      </div>
    </footer>
  );
}

export default Footer;