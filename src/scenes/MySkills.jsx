import LineGradient from "../components/LineGradient";
// import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faJava, faOpera, faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faCubes, faDatabase, faCopyright, faMicrochip, faMemory, faAtom, faCode, faRegistered, faFlask, faTerminal, faTable, faChartArea, faChartBar, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faJs, faDocker, faRaspberryPi, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const MySkills = () => {
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
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
                        <span className="text-light-purple">SKI</span>LLS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3"/>
                    </div>
                </div>
                
                <div className="mt-10 mb-10">
                    <p className="mb-10 font-opensans">
                    Here is a brief overview of my technical skills that I have 
                    honed while researching, interning, or crafting a personal project.
                    </p>
                </div>
            </motion.div>
            </div>
            {/* SKILLS SECTION */}
            <div className="flex flex-wrap justify-center mt-15 gap-y-0 md:gap-x-10 lg:gap-x-20">
                {/* EXPERIENCE */}
                {/* SKILL SUBSECTION 1 */}
                <motion.div
                    className="w-full sm:w-[70%] md:w-[80%] mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative min-h-32 ">
                        <div className="z-10 pb-5">
                            <p className="font-opensans flex justify-center font-semibold text-2xl text-light-purple mt-3">
                                Programming Languages
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap justify-center text-center my-1 gap-7 text-[30px] ">
                            <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Python <FontAwesomeIcon icon={faPython}/>
                             </div>
                            <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Java <FontAwesomeIcon icon={faJava}/>
                             </div>
                             
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    C/C++/C# <FontAwesomeIcon icon={faCopyright}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    JavaScript <FontAwesomeIcon icon={faJs}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    SQL <FontAwesomeIcon icon={faDatabase}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    NoSQL <FontAwesomeIcon icon={faDatabase}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    HTML <FontAwesomeIcon icon={faHtml5}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    CSS (Tailwind) <FontAwesomeIcon icon={faCss3Alt}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    R <FontAwesomeIcon icon={faRegistered}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    x86 Assembly <FontAwesomeIcon icon={faMicrochip}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Matlab <FontAwesomeIcon icon={faCode}/>
                             </div>
                             
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    OCaml <FontAwesomeIcon icon={faOpera}/>
                             </div>
                             
                        </div>
                    </div>
                </motion.div>

                {/* SKILL SUBSECTION 2 */}
                <motion.div
                    className="w-full sm:w-[70%] md:w-[80%] mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative min-h-32">
                        <div className="z-10 pb-5">
                            <p className="font-opensans flex justify-center font-semibold text-2xl text-light-purple mt-3">
                                Libraries/Frameworks
                            </p>
                        </div>
                        
                        <div className=" flex flex-wrap justify-center text-center my-1 gap-7 text-[30px]">
                            <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Numpy <FontAwesomeIcon icon={faCubes}/>
                             </div>
                            <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Pandas <FontAwesomeIcon icon={faTable}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Sci-Kit Learn <FontAwesomeIcon icon={faChartBar}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Matplotlib <FontAwesomeIcon icon={faChartArea}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Seaborn <FontAwesomeIcon icon={faWaveSquare}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    LangChain <FontAwesomeIcon icon={faPhoenixFramework}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    TensorFlow <FontAwesomeIcon icon={faTerminal}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    PyTorch <FontAwesomeIcon icon={faTerminal}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    React <FontAwesomeIcon icon={faReact}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Flask <FontAwesomeIcon icon={faFlask}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Next.js <FontAwesomeIcon icon={faJs}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Postgresql <FontAwesomeIcon icon={faDatabase}/>
                             </div>
                             
                        </div>
                    </div>
                    
                        
                </motion.div>
                {/* SKILL SUBSECTION 3 */}
                <motion.div
                    className="w-full sm:w-[70%] md:w-[80%] mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                   <div className="relative min-h-32">
                        <div className="z-10 pb-5">
                            <p className="font-opensans flex justify-center font-semibold text-2xl text-light-purple mt-3">
                                Other
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap justify-center text-center my-1 gap-7 text-[30px]">
                            <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Azure <FontAwesomeIcon icon={faCloud}/>
                             </div>
                            <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Google Cloud Platform <FontAwesomeIcon icon={faCloud}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Linux <FontAwesomeIcon icon={faLinux}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Git/GitHub <FontAwesomeIcon icon={faGithub}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Docker <FontAwesomeIcon icon={faDocker}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Arduino <FontAwesomeIcon icon={faMemory}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Raspberry Pi <FontAwesomeIcon icon={faRaspberryPi}/>
                             </div>
                             <div className="bg-gradient-rainblue font-opensans text-xl text-deep-blue rounded-md py-2 px-3 font-semibold">
                                    Photon <FontAwesomeIcon icon={faAtom}/>
                             </div>
                             
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default MySkills;