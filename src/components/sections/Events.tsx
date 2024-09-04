import headImage from '@/assets/images/image.png';
import people from '@/assets/images/people.png';
import Image from "next/image";

const Component1 = () => {
  return (
    <div className='bg-black h-full w-full'>

    <div className="relative h-3/4 w-5/6 lg:ml-28 xs:ml-8 laptop:ml-24 surface:ml-16">
      <Image src={headImage} alt="alt" layout="responsive" width={1310} height={512} />
      <div className="absolute inset-0  items-start justify-start">
        <h1 className="text-white xs:text-4xl lg:text-6xl font-bold">Our</h1>
        <h1 className="text-red-600  xs:text-6xl lg:text-8xl font-bold">Events</h1>
      </div>
      
    </div>
    <div className='flex mt-28 laptop:ml-10'>
   <div className='ml-5'><div className='text-white border lg:mt-10 lg:w-48 lg:ml-24 flex xs:w-20  xs:ml-4 justify-center'><h1 className='lg:text-3xl xs:text-xs'>Devsoc'24</h1></div>
    <p className="text-white xs:w-36 lg:w-96 lg:ml-14 mt-1 xs:text-3xs lg:text-xl">Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most deemed and reputed chapters. Our teamwork, dedication and determination is what propels and inspires our events to take greater strides and achieve greater heights.</p>
    </div><Image src={people} alt='alt' width={500} height={500} className='xs:w-40 laptop:ml-40 laptop:h-computer laptop:w-computer promax:ml-14 xs:ml-5 lg:ml-56 lg:h-computer lg:w-computer surface:h-56 surface:ml-14 surface:w-72 surface:mt-10'/>
    </div>
    <div className='flex mt-40 laptop:ml-24'>
    <Image src={people} alt='alt' width={500} height={500} className='laptop:ml-1 laptop:h-computer laptop:w-computer xs:w-40 promax:ml-5 xs:ml-5 lg:ml-56 lg:h-computer lg:w-computer surface:h-56 surface:ml-14 surface:w-72 surface:mt-10 '/>
   <div><div className='text-white border lg:mt-10 lg:w-48 lg:ml-64 flex justify-center xs:w-20 xs:ml-14 promax:ml-20 laptop:ml-72'><h1 className='lg:text-3xl xs:text-xs'>Cook-Off 6.0</h1></div>
    <p className="text-white xs:w-36 lg:w-96 lg:ml-48 mt-1 xs:text-3xs xs:ml-10 lg:text-xl promax:ml-14 surface:ml-40 laptop:ml-56">Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most deemed and reputed chapters. Our teamwork, dedication and determination is what propels and inspires our events to take greater strides and achieve greater heights.</p>
    </div>
    </div>
    <div className='flex mt-28 laptop:ml-16'>
   <div className='ml-5'><div className='text-white border lg:mt-10 lg:w-48 lg:ml-24 flex xs:w-20  xs:ml-4 justify-center'><h1 className='lg:text-3xl xs:text-xs'>Devsoc'24</h1></div>
    <p className="text-white xs:w-36 lg:w-96 lg:ml-14 mt-1 xs:text-3xs lg:text-xl">Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most deemed and reputed chapters. Our teamwork, dedication and determination is what propels and inspires our events to take greater strides and achieve greater heights.</p>
    </div><Image src={people} alt='alt' width={500} height={500} className='xs:w-40 laptop:ml-40 laptop:h-computer laptop:w-computer promax:ml-14 xs:ml-5 lg:ml-56 lg:h-computer lg:w-computer surface:h-56 surface:ml-14 surface:w-72 surface:mt-10'/>
    </div>
    <div className='flex mt-40 laptop:ml-24'>
    <Image src={people} alt='alt' width={500} height={500} className='laptop:ml-1 laptop:h-computer laptop:w-computer xs:w-40 promax:ml-5 xs:ml-5 lg:ml-56 lg:h-computer lg:w-computer surface:h-56 surface:ml-14 surface:w-72 surface:mt-10 '/>
   <div><div className='text-white border lg:mt-10 lg:w-48 lg:ml-64 flex justify-center xs:w-20 xs:ml-14 promax:ml-20 laptop:ml-72'><h1 className='lg:text-3xl xs:text-xs'>Cook-Off 6.0</h1></div>
    <p className="text-white xs:w-36 lg:w-96 lg:ml-48 mt-1 xs:text-3xs xs:ml-10 lg:text-xl promax:ml-14 surface:ml-40 laptop:ml-56">Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most deemed and reputed chapters. Our teamwork, dedication and determination is what propels and inspires our events to take greater strides and achieve greater heights.</p>
    </div>
    </div>

   
    

    </div>
    
  );
};

export default Component1;
