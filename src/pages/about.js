import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Headshot.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";




function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <ParticlesBackground />

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16 ">

          <AnimatedText
            text="About Me!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                Hi, I&apos;m <strong>Yesh</strong>, a senior at the University
                of Central Florida pursuing a major in Computer Science and a minor in Finance.
                I&apos;m really intrigued by the blend of technology and finance, and I&apos;ve got two main passions: Fintech and Computer Vision AI.
              </p>
              <p className="my-4 font-medium">
                I find it fascinating how the intersection between technology and finance have revolutionized B2B,
                B2C, and consumer transactions through services like blockchain, digital payments, 
                crowdfunding and investment algorithms. Then there's Computer Vision AI, which gives computers the ability to 
                understand images and videos and recognize objects in real time. This can lead to some really cool applications. 
              </p>
              <p className="font-medium">
                Away from the computer, my hobbies include swimming, biking, working out and binging TV shows. I love watching the NBA , Premier League Soccer and Formula 1.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl m1-4"
                src={profile}
                alt="Yesh Mandava"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
           
          </div>

          <Skills />
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 0.8 }}
            >
              <Experience />
            </motion.div>
          </AnimatePresence>

          {/* <Experience /> */}
          <Education />
        </Layout>
      </main>
    </>
  );
}

