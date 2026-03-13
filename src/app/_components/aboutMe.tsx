import Image from "next/image";
import Cover from '@/src/assets/cover.png';
import Profile from '@/src/assets/profile.png';

const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="w-full">
        <div className="relative w-full h-60 border-b border-border overflow-hidden">
          <Image
            className="object-cover object-[50%_18%] opacity-40"
            src={Cover}
            fill
            alt=""
          />
        </div>

        <div className="ml-8 -mt-24 w-32 aspect-square border border-border rounded-lg overflow-hidden relative">
          <Image
            src={Profile}
            alt="Profile"
            width={128}
            height={128}
            unoptimized
            className="object-cover rounded-lg"
          />

          <div className="absolute inset-0 bg-black opacity-40 rounded-lg pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-col gap-1 text-text">
          <h1 className="font-semibold text-2xl">Vong Rithea</h1>
          <h3 className="text-sm text-text-sub">Full-stack Developer - Based in Cambodia</h3>
        </div>

        <p className="text text-text-sub">
          Backend by heart, full-stack by choice. I enjoy building clean,
          maintainable, and user-friendly web applications. I approach problems practically and adapt quickly.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;