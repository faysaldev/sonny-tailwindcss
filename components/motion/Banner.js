import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";



function Banner(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div className="relative  h-[500px] sm:h-[550px] lg:h-[1000px] xl:h-[700px] 2xl:h-[800px] overflow-hidden">
      <div
        className="relative h-[500px] sm:h-[550px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px]"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <Image
          src="/banner.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div  className="absolute top-[30%] md:top-[35%] lg:top-[35%] xl:top-[40%] w-full text-center">
        <motion.div
          style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100, cursor:'grab' }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="w-full"
        >
          <div className="flex flex-col justify-center place-items-center rounded-lg   md:w-[800px] md:h-[200px] mx-auto">
            <motion.div
              style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0, }}
              whileTap={{ cursor: "grabbing" }}
              className=" w-[300px] h-[250px]  md:h-[300px] lg:w-full lg:h-[350px] xl:h-96 sm:left-0  bg-red-500 bg-opacity-80 rounded-2xl"
            >
              <motion.div
                style={{ perspective: 2000, x, y, rotateX, rotateY, z: 100, cursor:'grab' }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="w-full h-full"

              >
                <div  className="relative w-[300px] h-[250px]  md:h-[300px] lg:w-full lg:h-[350px] xl:h-96 ">
                  {/* 
                    src="https://media.giphy.com/media/WT8liQbmP3CdbVUJSx/giphy.gif" */}
                  <Image
                    src="https://media0.giphy.com/media/3og0IJLpGAqmLwnuzC/200w.webp?cid=ecf05e47x1jklka10y0hv0sqbi9i4xt5q39tzvw4kx9wte91&rid=200w.webp&ct=g"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-2xl pointer-events-none shadow-lg"
                  />
                </div>
              </motion.div>

              <motion.div
                style={{ x, y, rotateX, rotateY, z: 2000, cursor:'grab' }}
                drag
                dragElastic={0.10}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="absolute top-[12px]  md:top-[20%] lg:top-20 xl:top-32 backdrop-blur-xl -backdrop-hue-rotate-180 left-12 p-5 rounded-md shadow-2xl z-40 text-3xl"
              >
                <h3 className="text-2xl font-semibold mb-3 w-[100px] ">
                  Want to go on an adventure?
                </h3>
                <p className="-ml-5 ">Go on now. be spontaneous!</p>
                <button className="text-sm text-white hover:bg-red-400  hover:shadow-md transform transition-all duration-300 shadow-xl -ml-8 bg-gray-900 px-4 py-2 rounded-lg mt-5">
                  Take me to nirvana!
                </button>
              </motion.div>

            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Banner;