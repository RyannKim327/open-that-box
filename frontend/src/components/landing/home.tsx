import SplitText from "../animations/splitText";
import Silk from '@/components/animations/silk';

function Home() {
  return (
    <div id="home" className="home flex flex-col items-center justify-center h-screen overflow-x-hidden relative">
      {/* Silk Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl text-center">Welcome to</h1>
        <div className="text-4xl font-bold text-center mt-4">
          <SplitText
            text="Acude"
            className="text-7xl font-semibold text-center sm:text-[300px] md:text-9xl lg:text-[300px]"
            delay={100}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <p className="text-center mt-4">Your one-stop solution for all things box-related!</p>
      </div>
    </div>
  );
}

export default Home;