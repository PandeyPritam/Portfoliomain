import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Learning Phaser",
    company: "",
    date: "2023 - Present",
    responsibilities: [
     "As a fresher, the journey begins with mastering the core building blocks of the web—HTML, CSS, and JavaScript.", 
      "This phase involves understanding how to structure webpages, style them effectively, and add interactivity..",
      
    ],
  },
  {
    job: "Tech Stack Exploration",
    company: "",
    date: "2023 - Present",
    responsibilities: [
      "With the basics covered, new developers start diving into modern frontend tools and frameworks like React, Vue, or Tailwind CSS..",
      "They learn how to build dynamic UIs, manage components and state, and use NPM or Yarn for managing packages.",
    ],
  },
  {
    job: "Real-World Exposure",
    company: "",
    date: "2024 - Present",
    responsibilities: [
      "After grasping the fundamentals and tools, developers begin working on real-world projects, either through internships or personal projects.",
      "This phase is crucial for applying learned skills, understanding project workflows, and collaborating with others.",
     
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
