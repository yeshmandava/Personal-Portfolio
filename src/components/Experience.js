import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


// const Details = ({ position, company, companyLink, time, address, work }) => {
//   const ref = useRef(null);

//   return (
//     <li
//       ref={ref}
//       className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
//     >
//       <LiIcon reference={ref} />
//       <motion.div
//         initial={{ y: 50 }}
//         whileInView={{ y: 0 }}
//         transition={{ duration: 0.5, type: "spring" }}
//       >
//         <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
//           {position}{" "}
//           <a
//             className="capitalize text-primary dark:text-primaryDark"
//             href={companyLink}
//             target={"_blank"}
//           >
//             @{company}
//           </a>
//         </h3>
//         <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
//           {time} | {address}
//         </span>
//         <p className="font-medium w-full md:text-sm"> {work}</p>
//       </motion.div>
//     </li>
//   );
// };

const Details = ({ position, company, companyLink, time, address, work, logoUrl }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {/* Add the logo image */}
        <img
          src={logoUrl}
          alt={`${company} Logo`}
          className="h-12 mb-2"
        />

        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};



const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Software Engineer Intern"
              company=" Deloitte"
              companyLink="https://www.deloitte.com/global/en/services/consulting.html"
              time="June 2023 - August 2023"
              address="Lake Mary, FL"
              work="Developed an API monitoring tool in .NET, creating scalable architecture for performance metrics from multiple web apps using real-time SQL data, implementing an MVC model, ensuring security, and optimizing version control in collaboration with the team."
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png?20161018020339"
            />

            <Details
              position="Quality Engineer Co-op"
              company=" Lockheed Martin"
              companyLink="https://www.lockheedmartin.com/"
              time="August 2022 - Present"
              address="Orlando, FL."
              work="Worked on a team responsible for managing and maintaining supply chain logistics for the Apache program.
                    Created a reporting tool leveraging Tableau and Visual Basic that interfaces with an SAP database to effectively 
                    manage real-time defect logs for Apache helicopter parts across 5 US manufacturing centers."
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Lockheed_Martin_logo.svg/768px-Lockheed_Martin_logo.svg.png?20230620162959"
            />


            <Details
              position="Software Developer Accelerate"
              company=" IBM"
              companyLink="https://www.ibm.com/us-en"
              time="May 2022 - August 2022"
              address="Remote"
              work="Developed a user-centric ReactJS application with a focus on reusable UI components, complemented by UX design 
              principles and edge case testing. Orchestrated communication between frontend and backend components 
              through microservices deployment using Docker and Kubernetes on IBM Cloud, optimizing REST API functionality for 
              enhanced integration."
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png"
            />

            <Details
              position="Software Engineering Experience"
              company=" J.P. Morgan Chase & Co."
              companyLink="https://www.jpmorgan.com/global"
              time="January 2023 - February 2023"
              address="Remote"
              work="Engaged in the development of a stock price data analysis system using Python. 
                    Utilized JPMorgan's Open Source Software, Perspective, to provide real-time actionable 
                    metrics to a trader's dashboard with the help of React and Typescript."
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/J_P_Morgan_Logo_2008_1.svg/1920px-J_P_Morgan_Logo_2008_1.svg.png?20190328173407"
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
