import Image from "next/image"

const DomainCard = ({ title, img }) => {
  return (
    <div className='border-[1.5px] border-purple-500 rounded-xl h-[70px] sm:h-[100px] md:h-[100px] lg:h-[125px] max-w-[350px] relative flex justify-between'>
      <div className="relative">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text sm:p-5 p-2 absolute bottom-0">{title}</p>
      </div>
      <div className="relative w-1/2 h-full">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
    </div>
  );
};

export default DomainCard; 

