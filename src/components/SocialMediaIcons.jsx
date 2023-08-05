import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoodreads } from '@fortawesome/free-brands-svg-icons';


const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center my-1 gap-7 text-[30px]">
            
            <a className="hover:text-light-purple transition duration-200"
                href="https://www.linkedin.com/in/rimika-dhara/"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a className="hover:text-light-purple transition duration-200"
                href="https://www.instagram.com/rimikadhara/"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a className="hover:text-light-purple transition duration-200"
                href="https://github.com/rimikadhara67"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a className="hover:text-light-purple transition duration-200"
                href="https://www.goodreads.com/user/show/149106428-rimika-dhara"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faGoodreads}/>
            </a>
        </div>
    )
};
export default SocialMediaIcons;