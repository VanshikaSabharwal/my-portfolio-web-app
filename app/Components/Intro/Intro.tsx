import Image from "next/image";
import Link from "next/link";
import EnhancedContact from "../EnhancedContact";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-12 pt-6 sm:pt-10 ">
      {/* Image Section */}
      <div className="image mb-8 sm:mb-10">
        <Image
          src="/images/vImg.png"
          width={150}
          height={150}
          alt="Profile Image"
          className="rounded-full object-cover sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
        />
      </div>

      {/* Intro Text */}
      <div className="text-center">
        <p className="text-2xl sm:text-4xl font-semibold mb-6 sm:mb-8">
          Hello, I am <span className="text-[#2D2D2D]">Vanshika Sabharwal</span>
          , A Software Engineer. Nice to meet You! 
        </p>

        {/* Button Section */}
        <div className="flex space-x-6 justify-center mb-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#2D2D2D] text-white rounded-md hover:bg-gray-900 transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            Hire Me
          </Link>
<Link
  href="/Resume.pdf"
  download
  className="px-8 py-3 bg-[#2D2D2D] text-white rounded-md hover:bg-gray-900 transition duration-300"
  target="_blank" rel="noopener noreferrer"
>
  Download CV
</Link>

        </div>
      </div>
    </div>
  );
};

export default Intro;
