import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoodreads } from '@fortawesome/free-brands-svg-icons';


const SkillIcons = () => {
    return (
        <div className="flex md:justify-start my-1 gap-7 text-[30px]">
            <div className="hover:text-light-purple transition duration-200">
                <FontAwesomeIcon icon={faGoogle}/>
            </div>
            <div className="hover:text-light-purple transition duration-200">
                <FontAwesomeIcon icon={faLinkedin}/>
            </div>
            <div className="hover:text-light-purple transition duration-200">
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            <div className="hover:text-light-purple transition duration-200">
                <FontAwesomeIcon icon={faGithub}/>
            </div>
            <div className="hover:text-light-purple transition duration-200">
                <FontAwesomeIcon icon={faGoodreads}/>
            </div>
        </div>
    )
};
export default SkillIcons;