import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 m1-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-50
                            before:-left-10 before:rounded-full before:w-full before:max-w-[700px]
                            before:h-full before:border-2 before:border-purple-400 before:z-[-1]">
                        <img 
                            alt="profile" src="assets/profile-image.JPG" 
                            className="hover:filter hover:saturate-100 transition duration-500 
                            z-10 w-full max-w-[300px] md:max-w-[400px] rounded-full"
                        />
                    </div>
                ):(<img 
                    alt="profile" src="assets/profile-image.JPG" 
                    className="hover:filter hover:saturate-100 transition duration-500 
                    z-10 w-full max-w-[400px] md:max-w-[400px] rounded-full m-10"
                    />
                )}
                </div>
                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADINGS */}
                    <motion.div
                    initial="hidden" whileInView="visible" 
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden:{ opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}>
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                       Rimika {""}
                       <span className=" md: relative md:text-deep-blue md:font-semibold z-20
                                md:before:content-brush before:absolute before:-left-[35px]
                                before:-top-[90px] before:z-[-1]">
                        Dhara
                        </span> 
                    </p>
                    <p className="mt-10 mb-7 z-10 font-opensans text-sm text-center md:text-start pt-5">
                    I'm a junior at the University of Minnesota – Twin Cities, studying Computer Science and Data Science 
                    with a minor in Statistics. My passion lies in impact-driven projects, and I'm captivated by the 
                    potential of Machine Learning and Artificial Intelligence. Beyond personal projects, research, and internships, 
                    I spend my time dancing 
                    and blogging with the aim to express myself and have a positive impact on others. Let's connect!
                    </p>
                </motion.div>
                {/* CALL TO ACTIONS */}
                <motion.div
                className="flex mt-5 gap-3 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                <AnchorLink
                    className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                    hover:bg-blue hover:text-white transition duration-500"
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                >
                    Contact
                </AnchorLink>
                <a
                    className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                    hover:bg-blue hover:text-white transition duration-500"
                    href="https://www.rimikawrites.com/"
                >
                    Blog
                </a>
                
                <a
                    className="rounded-sm bg-gradient-rainblue py-0.5 pr-0.5"
                    href="https://docs.google.com/document/d/10YAJaV2JweWmyQUOJKrE2CNrlcnas4r1adRQ92HXnWw/edit?usp=sharing"
                >
                    <div className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                    hover:bg-blue hover:text-white transition duration-500">
                    Resume
                    </div>
                </a>
                </motion.div>
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    )

}
export default Landing;