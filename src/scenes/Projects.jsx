import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import data from '../assets/data/projectData'
import React from "react";

const Projects = () => {

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
            className="md:w-2/4 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
        <div>
            <p className="font-playfair font-semibold text-4xl">
                <span className="text-light-purple">PRO</span>JECTS
            </p>
            <div className="flex justify-center mt-5">
                <LineGradient width="w-1/3"/>
            </div>
        </div>
        
        <div className="mt-10 mb-10">
            <p className="mb-10 font-opensans">
                Here are my personal projects that help me expand upon my knowledge base! These projects have also helped me 
                identify and solve the problems around me – whether it be optimizing something, automating a trivial day-today task
                or finding ways to solve an exisiting problem.
            </p>
        </div>
        </motion.div>
        <motion.div
          className="mx-auto items-center text-center grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
        >
          {
            data?.map((project, index) => (
              <motion.div className="group relative z-[-1] flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden:{ opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
              }}>
                <figure className="aspect-w-5 aspect-h-3 w-full">
                  <img className="rounded-md object-cover w-full h-full" src={project.imgUrl} alt="" />
                </figure>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                
                <div className="mt-2 flex flex-wrap justify-center">
                  {project.technologies.map((tech) => (
                    <span className="px-2 py-1 m-1 bg-deep-purple text-black rounded-md">{tech}</span>
                  ))}
                </div>
                <p className="mt-2 text-center">{project.description}</p>
                {/* <a
                  className="bg-gradient-rainblue text-deep-blue rounded-sm py-2 px-4 font-semibold
                          hover:bg-blue hover:text-white transition duration-500 mt-4 text-center"
                  href={project.siteUrl}
                >
                  View Code
                </a> */}
              </motion.div>
            ))
          }
        </motion.div>


            
              


       
    </section>
  )
}
export default Projects;