import { Globe, Zap, Lightbulb, Play } from "lucide-react";


export default function Hero() {
  return (
    <section className=" min-h-1/2 py-20 flex ">
      {/* Main Content - with left margin to account for fixed sidebar */}
      <div className="flex-1 ml-20 px-16 items-center flex">
        <div className="max-w-5xl">
          {/* Eyebrow text */}
          <p className="text-[32px] font-normal tracking-normal text-[var(--brand-dark)] mb-8">
            Turning Classrooms Into Adventures.
          </p>

          {/* Main Headline */}
          <h1 className="text-[48px] font-medium text-[var(--brand-dark)] mb-10 leading-tight">
            From Chalkboards{' '}
            <span className="inline-flex items-center mx-2 py-3">
              {/* Lightning bolt icon */}
              <Zap size={40} color="var(--brand-purple)" />
            </span>
            To{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-[var(--brand-orange)] -rotate-2 block"></span>
              <span className="relative text-black px-2 py-1">
                Dreamboards
              </span>
            </span>
            :<br />
            <span className="inline-flex items-center py-3 mx-2">
              {/* Brain icon */}
               <Globe size={40} color="var(--brand-orange)"  />
            </span>
            Transforming Your Classrooms
          </h1>

          {/* Subtitle */}
          <p className="text-[24px] text-[var(--brand-dark)] mb-12 max-w-4xl leading-relaxed">
            Empowering Rwanda&apos;s classrooms with tools that make learning
            engaging, inclusive, and future-ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 ">
            <button className="bg-[var(--brand-orange)] text-[18px] text-[var(--brand-white)] px-8 py-4 rounded-lg font-medium hover:bg-orange/90 transition-colors flex items-center">
              <span className="mr-2">
                <Play size={18} color="white" />
              </span>
              Get Started
            </button>
            <button className="bg-[var(--brand-purple)] text-[18px] text-[var(--brand-white)] px-8 py-4 rounded-lg font-medium hover:bg-purple/90 transition-colors flex items-center">
              <span className="mr-2">
                <Lightbulb size={18} color="white" />
              </span>
              Learn How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
