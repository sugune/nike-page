import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start justify-center flex-wrap max-lg:flex-col gap-20">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 leading-7 text-base font-montserrat sm:max-w-sm text-white-400">
            The cake at the Sacher hotel is amongst the finest in all the lands
            of the world is not well understood{" "}
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social) => (
              <div
                key={social.src}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={social.src} alt={social.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 lg:gap-10 gap-20 flex-wrap justify-between">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-2xl font-montserrat font-medium leading-normal mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="text-white-400 hover:text-slate-gray
                  font-montserrat text-base leading-nornal cursor-pointer mt-3"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between max-sm:flex-col max-sm:items-center
      text-white-400 mt-24"
      >
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
