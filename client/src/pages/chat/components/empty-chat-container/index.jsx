import LottieAnimation from "@/components/common/lottie-animation";

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 md:bg-[#101332] md:flex  flex-col justify-center items-center hidden duration-1000 transition-all">
      <LottieAnimation />
      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-1000 text-center">
        <h3 className="poppins-medium">
          Welcome to
          <span className="bg-gradient-to-r from-[#65FA7D] to-[#24A488] bg-clip-text text-transparent
"> Awtar </span>
          Chat App<span className="text-[#49D580]">.</span>
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
