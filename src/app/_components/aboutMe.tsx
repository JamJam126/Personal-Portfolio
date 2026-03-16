import Image from "next/image";
import Cover from '@/src/assets/cover.png';
import Profile from '@/src/assets/rithea.png';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="flex flex-col w-full">
      <div className="w-full">
        <div className="relative w-full h-60 border-b border-border overflow-hidden">
          <Image
            className="object-cover object-[50%_18%] opacity-40"
            src={Cover}
            fill
            alt=""
          />
        </div>

        <div className="ml-4 sm:ml-4 -mt-18 w-32 bg-[#7C7C7C] aspect-square border-4 border-primary rounded-full overflow-hidden relative">
          <Image
            src={Profile}
            alt="Profile"
            height={128}
            width={128}
            unoptimized
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-8 sm:pt-2">
        <div className="flex flex-col gap-1 text-text">
          <h1 className="font-semibold text-2xl">Vong Rithea</h1>
          <h3 className="text-sm text-text-sub">
            Full-stack Developer - Based in Cambodia
          </h3>
        </div>

        <p className="text text-text-sub">
          Backend by heart, full-stack by choice. I enjoy building clean,
          maintainable, and user-friendly web applications. I approach problems
          practically and adapt quickly.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;