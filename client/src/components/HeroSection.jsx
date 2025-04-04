import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = ({onSignInClick}) => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
       <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          onClick={onSignInClick}
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
      <div className="w-1/2 mx-2 my-6 animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-lg cursor-pointer hover:scale-[1.03] bg-conic/[from_var(--border-angle)] from-black via-orange-500 to-black from-80% via-90% to-100% p-0.5">
    <video  autoPlay
          loop
          muted
           className=" rounded-lg bg-black border border-neutral-800">
            <source src={video1} type="video/mp4" />
    </video>
  </div>
  <div className="w-1/2 mx-2 my-6 animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-lg cursor-pointer hover:scale-[1.03] bg-conic/[from_var(--border-angle)] from-black via-orange-500 to-black from-80% via-90% to-100% p-0.5">
    <video  autoPlay
          loop
          muted
           className=" rounded-lg bg-black border border-neutral-800">
            <source src={video2} type="video/mp4" />
    </video>
  </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
