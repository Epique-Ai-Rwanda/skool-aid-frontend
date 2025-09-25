import Image from 'next/image';
import {Badge} from '@/components/ui/badge';

export default function StatsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Stats */}
          <div className="space-y-20">
            {/* >75 Stat */}
            <div>
              <div className="flex mb-4">
                <span className="text-6xl font-bold text-gray-900">&gt;75</span>
                <div className="w-8 h-8 rounded-full ml-2 flex items-center justify-center">
                  <Badge className="h-8 min-w-8 rounded-full px-1  tabular-nums bg-[var(--brand-purple)] text-white">
                    %
                  </Badge>
                </div>
              </div>
              <p className="text-gray-600 text-lg">
                of teachers report spending excessive time on lesson prep, 
                instead of <span className="font-semibold">engaging</span> with students.
              </p>
            </div>

            {/* 15 minutes Stat */}
            <div>
              <div className="text-6xl font-bold text-gray-900 mb-4">
                15 minutes
              </div>
              <p className="text-gray-600 text-lg">
                is all it takes with Skool Aid&apos;s AI-powered course builder to design 
                a complete, interactive lesson.
              </p>
            </div>
          </div>

          {/* Right side - Video and Lessons */}
          <div className="space-y-8">
            <div className="text-right lg:text-right">
              <h1 className="text-[60px] font-medium text-[var(--brand-dark)] mb-10 leading-tight">
             Turning {' '}
             <span className="relative inline-block">
                <span className="absolute inset-5 mx-2 bg-orange-500 transform"></span>
                <span className="relative text-[var(--brand-dark)] px-3 py-1">
                    Lessons
                </span>
                </span>
            {' '}into vibrant adventures
          </h1>
            </div>

            {/* Video Card */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative">
              <Image 
                src="/Image-1.png" 
                alt="Skool Aid Platform Screenshot" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  {/* Play button */}
                  <div className="w-0 h-0 border-l-6 border-l-orange border-y-4 border-y-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
