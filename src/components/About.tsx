import { FunctionComponent, useState } from "react";
import { ButtonGroup, Button, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"; // Import the required Font Awesome icons

const About: FunctionComponent = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <section className="w-full h-screen pt-8 flex items-center justify-center" data-scroll-to="aboutSection">
      <div className="w-4/5 h-4/5 bg-white rounded-3xl shadow-lg flex">
        {/* Left 2/5 - Avatar Holder and Buttons */}
        <div className="w-2/5 bg-gray-300 p-4 rounded-3xl flex flex-col items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-400 rounded-3xl m-auto">
            {/* Square Avatar Holder */}
            <img src="avatar2.png" alt="Avatar" className="bg-[#D7EBFF] w-full h-full object-cover rounded-3xl" />
          </div>
          <div className="mb-8">
            <ButtonGroup size="lg">
              <Button 
                variant={activeButton === "em" ? "shadow" : "solid"}
                color={activeButton === "em" ? "primary" : "default"}
                className={activeButton === "em" ? "" : "bg-white text-blue-500 py-8"}
                onClick={() => handleButtonClick("em")}
              >
                <Link 
                  isExternal 
                  href="mailto:helenluakl@gmail.com"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                </Link>
              </Button>
              <Button 
                variant={activeButton === "ld" ? "shadow" : "solid"}
                color={activeButton === "ld" ? "primary" : "default"}
                className={activeButton === "ld" ? "" : "bg-white text-blue-500 py-8"}
                onClick={() => handleButtonClick("ld")}
              >
                <Link 
                  isExternal 
                  href="https://www.linkedin.com/in/helen-lu-a24783228/"
                  >
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
                </Link>
              </Button>
              <Button 
                variant={activeButton === "gh" ? "shadow" : "solid"}
                color={activeButton === "gh" ? "primary" : "default"}
                className={activeButton === "gh" ? "" : "bg-white text-blue-500 py-8"}
                onClick={() => handleButtonClick("gh")}
              >
                <Link 
                  isExternal 
                  href="https://github.com/hlu750"
                  >
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </Link>
              </Button>
            </ButtonGroup>
          </div>
        </div>

        {/* Right 3/5 - Text Section and Buttons */}
        <div className="w-3/5 flex flex-col items-center justify-center">
          <div className="p-32 flex flex-col items-start justify-center">
            <h1 className="text-3xl text-primary font-bold" style={{ fontSize: "2rem", margin: "0"}}>About Me</h1>
            <div className="mt-4 text-2xl mt-8 mb-6" style={{ fontSize: "1.3rem"}}>
              I'm Helen, a seasoned software developer dedicated to crafting innovative solutions through code. 
              With expertise in Full-stack development, Machine learning, and UI/UX design, I thrive on turning ideas into reality. 
              <br></br>
              <br></br>
              Let's create something remarkable together!
            </div>
            <div className="mt-4">
              <Button radius="full" color="primary" variant="solid" className="mr-4" size="lg">
                My projects
              </Button>
              <Button radius="full" color="primary" variant="bordered" size="lg">
                Download CV
                <FontAwesomeIcon icon={faDownload} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
