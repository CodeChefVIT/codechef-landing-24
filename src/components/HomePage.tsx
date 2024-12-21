import PixelImage from "./PixelImage";

const CodeChefHeader = () => {
  return (
    <div className="bg-white z-[-1] min-h-screen flex justify-center items-center p-4">
      
      
      {/* Outer Container */}
      <div className="w-full  relative p-4 md:p-8">
        
        <div className="relative border border-black">
          
          
          <div className="absolute top-0 left-0">
            <div className="relative border-r border-b border-black md:px-4 pxl-4 py-2 inline-block">
              <div className="absolute w-1.5 h-1.5 bg-black -top-1 -left-1"></div>
              <div className="absolute w-1.5 h-1.5 bg-black -top-1 -right-1"></div>
              <div className="absolute w-1.5 h-1.5 bg-black -bottom-1 -left-1"></div>
              <div className="absolute w-1.5 h-1.5 bg-black -bottom-1 -right-1"></div>
              <h1 className="font-enigma font-bold text-sm md:text-xl tracking-widest">
                CODECHEF-VIT
              </h1>
            </div>
          </div>


          <div className="mt-16 mb-20 px-4">
            <h2 className="mt-10 font-enigma text-xl md:text-4xl font-bold leading-tight text-black">
              WE'RE CODECHEF-VIT <br />
              A MULTIDISCIPLINARY TECHNICAL <br />
              CLUB ESTABLISHED IN <br />
              VELLORE INSTITUTE OF <br />
              <span className="text-black">TECHNOLOGY</span>
            </h2>
          </div>         
        </div>


        <div className="relative -mt-12 bg-white border-2 border-black w-11/12  h-64 md:h-80 lg:h-96 mx-auto flex justify-end items-start ">
          <div className="absolute w-2 h-2 bg-black -top-2 -left-2"></div>
          <div className="absolute w-2 h-2 bg-black -top-2 -right-2"></div>
          <div className="absolute w-2 h-2 bg-black -bottom-2 -left-2"></div>
          <div className="absolute w-2 h-2 bg-black -bottom-2 -right-2"></div>
          
          <PixelImage />
            
           

          

        </div>

        <div
          className="mt-8 ml-4 text-lg font-enigma text-gray-800 leading-relaxed text-center bg-clip-text "
        >
          CodeChef is a dynamic technical chapter dedicated to elevating coding skills across campus. We operate at the
          intersection of technology, management and design, fostering a
          collaborative environment where students learn, share, and excel.
        </div>
      </div>
    </div>
  );
};

export default CodeChefHeader;
