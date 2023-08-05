import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-40 bg-light-purple pt-5">
      <div className="w-5/6 mx-auto lg:flex sm:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-deep-blue">
            RIMIKA DHARA
            <SocialMediaIcons/>
          </p>
        </div>
    </footer>
  );
};

export default Footer;