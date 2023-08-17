import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/JPMC Project SS.png";
import proj2 from "../../public/images/projects/BodyLangProject.png";
import proj3 from "../../public/images/projects/PersonalWebsite.png";
import proj4 from "../../public/images/projects/FoodApp.png";
import TransitionEffect from "@/components/TransitionEffect";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    
    
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >

      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      

      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />
      <ParticlesBackground />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Personal Projects!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Finance Project"
                title="Equities Strategy Dashboard"
                summary={"Enhancing a trader's dashboard within "+
                "the Equities team, enabling them to input data for monitoring a new trading strategy. "+
                "The project entails interfacing with financial data feeds, performing necessary calculations," +
                "and utilizing JPMorgan's Perspective software to visualize and analyze real-time data, aligning with user requirements."}
                img={proj1}
                link="https://github.com/yeshmandava/JPMC-SWE-Project.git"
                github="https://github.com/yeshmandava/JPMC-SWE-Project.git"
              />
            </div>
          
            <div className="col-span-12">
              <FeaturedProject
                type="AI Project"
                title="Real-Time Body Language Recognition "
                summary={"This project utilizes Mediapipe and OpenCV to create a real-time body language "+
                "recognition system, using a trained machine learning model to classify gestures from webcam "+
                "data and display results on the live feed. It identifies and traces facial, hand, and body pose "+
                "landmarks in webcam streams, subsequently utilizing trained machine learning models to classify and "+
                "exhibit recognized body language gestures in real-time, offering immediate insights into individuals'" +
                "nonverbal communication signals."}
                img={proj2}
                link="https://github.com/yeshmandava/Body-Language-Detector/tree/main"
                github="https://github.com/yeshmandava/Body-Language-Detector/tree/main"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Personal Website"
                title="Personal Portfolio Website"
                summary={"Built a portfolio website by leveraging Next.js for dynamic page rendering, Tailwind CSS for "+
                "efficient styling, and Framer Motion for fluid animations. The integration of responsive layouts, optimized "+
                "image handling, and seamless transitions"}
                img={proj3}
                link="https://github.com/yeshmandava/Personal-Portfolio"
                github="https://github.com/yeshmandava/Personal-Portfolio"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Food App"
                title="Cookbook Recipe App"
                summary={"Developed an application that enables users to curate and share their personalized "+
                "recipes while exploring a diverse array of culinary creations from others. Serving as a food based social"+ 
                "platform, the application was built using MongoDB, Express.js, React, and Node.js to facilitate seamless recipe storage, "+
                "sharing, and discovery."}
                img={proj4}
                link="https://github.com/yeshmandava/PlateFull-Food-App"
                github="https://github.com/yeshmandava/PlateFull-Food-App"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type=""
                // img={}
                title=""
                link=""
                github=""
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
