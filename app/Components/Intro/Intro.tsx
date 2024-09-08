import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mb-10 py-2">
      {/* Image Section */}
      <div className="image mb-8">
        <Image
          src="/images/vImg.png" // Replace with your image path
          width={150}
          height={150}
          alt="Profile Image"
          className="rounded-full object-cover sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
        />
      </div>

      {/* Intro Text */}
      <div className="text-center">
        <p className="text-2xl sm:text-4xl font-semibold mb-4">
          Hello, I am <span className="text-pink-600">Vanshika Sabharwal</span>,
          A Software Engineer
        </p>

        {/* Button Section */}
        <div className="flex space-x-4 justify-center">
          <Link
            href="/"
            className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-300"
          >
            Hire Me
          </Link>
          <Link
            href="/"
            className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300"
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
