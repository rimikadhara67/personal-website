import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Interests = () => {
  return (
    <section id="interests" className="pt-32 pb-16">
      
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
                        <span className="text-light-purple">INT</span>ERESTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3"/>
                    </div>
                </div>
                
                <div className="mt-10 mb-10">
                    <p className="mb-10 font-opensans">
                    There is a lot more to me than my coding experience! Here's a glimpse of other activities that take up
                    my time, energy, and passion. If I am not coding, I am either dancing, writing or capturing the moment on my phone 
                    or camera.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                          className="bg-gradient-rainblue text-deep-blue rounded-md py-3 px-7 font-semibold
                          hover:bg-blue hover:text-white transition duration-500"
                          href="https://www.rimikawrites.com/"
                      >
                          My Blog
                      </a>
                      <a
                          className="bg-gradient-rainblue text-deep-blue rounded-md py-3 px-7 font-semibold
                          hover:bg-blue hover:text-white transition duration-500"
                          href="https://vsco.co/-rimika/gallery"
                      >
                          My VSCO
                      </a>
                    </div>
                </div>
            </motion.div>

      {/* INTERESTS */}
      <div className="md:flex md:justify-between gap-8">
        

        <motion.div
          className="mx-auto rounded-md relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-150px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-l font-opensans">
            For me, life is all about observation, collaboration, and change. Through my blog articles, I aim to
            put my thoughts and experiences up for open discussion. Check out my blog above!
          </p>
        </motion.div>

        <motion.div
          className="mx-auto rounded-md relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-150px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-l  font-opensans align-text-bottom">
            I have been dancing for the past 16 years of my life.
            My love for dance transcends through the several performance, competitions, and projects that I have worked on so far!
          </p>
        </motion.div>

        <motion.div
          className="mx-auto rounded-md relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-150px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-l font-opensans">
            I love capturing life as I see it! Capturing and editing pictures help me cherish and relive some of my best moments.
            Check out my VSCO above to see life through my lens! 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
