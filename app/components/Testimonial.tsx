import Image from "next/image";
export default function Testimonial() {
  return (
    <section className="bg-[var(--foreground)] my-5">
        <div className="flex flex-col lg:flex-row sm:mx-auto justify-between mx-30 p-20 ">
          {/* Left side - Avatar and Name */}
          <div className="flex items-center  mb-8 lg:mb-0 md:mx-">
            {/* Avatar placeholder */}
            <div className="w-20 h-20 rounded-full mr-6">
                <Image
                    src="/avatar.jpeg"
                    alt="Avatar"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                />
            </div>
            <div>
              <h3 className="text-white font-normal text-[30px] sm:text-[22px] md:text-[24px]">Nelson Mandela</h3>
              <p className="text-white text-[20px] leading-none">Former President of South Africa</p>
            </div>
          </div>

          {/* Right side - Quote */}
          <div className="flex flex-col items-center max-w-2xl lg:ml-12 ">
            {/* Quote icon */}
            <div className="flex mb-4">
              <blockquote className="text-[var(--brand-white)] text-[20px] leading-none md:text-[40px] font-normal w-full">
                Education is the most{' '}
                <span className="text-[#7B61F0]">powerful weapon</span>{' '}
                which you can use to change the world.
              </blockquote>
            </div>
            <p className="text-[var(--brand-white)] mt-6 text-2xl font-light leading-none">
              By inspiring young minds&apos; curiosity, nurturing imagination, 
              and empowering both the teachers & students, we can 
              transform classrooms into places where the future is built.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row sm:mx-auto justify-between mx-30 p-20 ">
          {/* Left side - Avatar and Name */}
          <div className="flex items-start mb-8 lg:mb-0 md:mx-">
            {/* Avatar placeholder */}
            <div>
            <h1 className="text-[70px] font-medium text-[var(--brand-white)] mb-10 leading-tight">
            The {' '}
            <span className="relative inline-block">
                <span className="absolute inset-5 mx-2 bg-orange-500 transform"></span>
                <span className="relative text-white px-3 py-1">
                    Smarter
                </span>
            </span>
            {' '}Way To Inspire Education
          </h1>
            </div>
          </div>

          {/* Right side - Quote */}
          <div className="flex items-end max-w-2xl lg:ml-12 md:mx-auto ">
            {/* Quote icon */}
            <p className="text-[var(--brand-white)] mt-6 text-[30px] font-normal leading-none">
              When classrooms stop being ordinary and start inspiring every student.
            </p>
          </div>
        </div>
    </section>
  );
}
