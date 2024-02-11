import { FunctionComponent } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";

const Services: FunctionComponent = () => {
  // Array of service data
  const services = [
    {
      name: "Custom Software Development",
      description: "Designing and developing bespoke software solutions tailored to the specific needs and requirements of clients.",
      image: "services/custom.jpg",
    },
    {
      name: "Web Development",
      description: "Creating websites and web applications using various technologies such as HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.",
      image: "services/web.jpg",
    },
    {
      name: "Mobile App Development",
      description: "Developing native or cross-platform mobile applications for iOS and Android devices using languages like Swift, Kotlin, Java, or frameworks like React Native or Flutter.",
      image: "services/mobile.jpg",
    },
    {
      name: "Database Design and Management",
      description: "Designing database architectures, creating schemas, optimizing queries, and managing data storage systems like MySQL, PostgreSQL, MongoDB, or Firebase.",
      image: "services/database.jpg",
    },
    {
      name: "Software Maintenance and Support",
      description: "Providing ongoing support, bug fixes, updates, and enhancements for existing software applications to ensure they remain functional and up-to-date.",
      image: "services/test.jpg",
    },
    {
      name: "Quality Assurance and Testing",
      description: "Conducting comprehensive testing procedures, including unit testing, integration testing, and user acceptance testing, to ensure the reliability and functionality of software products.",
      image: "services/maintain.jpg",
    },
    {
      name: "UI/UX Design",
      description: "Designing user interfaces and experiences for software applications, focusing on usability, accessibility, and visual appeal to enhance user satisfaction.",
      image: "services/ui.jpg",
    },
    {
      name: "Machine Learning and AI Development",
      description: "Developing machine learning models and AI algorithms to analyze data, automate tasks, and make predictions across natural language processing, recommendation systems, and predictive analytics.",
      image: "services/ai.jpg",
    },
  ];

  return (
    <section className="w-full h-full pt-20" data-scroll-to="servicesSection">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mt-8">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-2 p-4 mx-28">
          {services.map((service, index) => (
          <Card
              key={index}
              isFooterBlurred
              radius="lg"
              className=""
              style={{ width: "auto" }}
            >
              <img
                alt={service.name}
                className="object-cover scale-150"
                src={service.image}
                // width={400}
                // height={300} // Adjust the height of the image
              />
            <CardFooter style={{ width: "auto" }} className="w-full flex justify-center items-center py-2 m-1 bg-black/20 absolute rounded-large bottom-0">
              {/* <p className="text-tiny text-white">{service.name}</p>
              <div className="text-tiny text-white bg-black/20" color="default">
              {service.description}
              </div> */}
              <div className="">
                <p className="text-center text-white font-bold py-0">{service.name}</p>
                <Divider className="bg-white/30"/>
                <div className="text-center text-small text-white p-2 px-2 pb-4">{service.description}</div>
              </div>
            </CardFooter>
          </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
