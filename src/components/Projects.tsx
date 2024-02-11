import { FunctionComponent, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, cn
} from "@nextui-org/react";

import { faDisplay, faArrowUpRightFromSquare, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { usePagination, PaginationItemType } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ChevronIcon} from "./ChevronIcon";

import '../styles/scrollbar.css';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects: FunctionComponent = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      name: "Dog Recommendation Website",
      description: "A website aimed at identifying dog breeds using AI and aiding pet adoption efforts.",
      tags: ["AI", "Website", "Website"],
      image: "projects/dog.png",
      images: [
        "projects/dog.png",
      ],
    },
    {
      name: "Pest Insect Identification Website",
      description: "A website, for our client, Landcare Research NZ, aimed at aiding biosecurity and scientists, including those in the Ministry for Primary Industries, in identifying harmful pests using machine learning.",
      tags: ["AI", "Website", "Website"],
      image: "projects/insect.png",
      images: [
        "projects/insect/1.png",
        "projects/insect/2.png",
        "projects/insect/3.png",
        "projects/insect/4.png",
        "projects/insect/5.png",
        "projects/insect/6.png",
      ],
      projectDetails: (
      <div>
        <div className="font-bold mb-2">Description</div>
        <div>
          Pests, whether in the form of insects, rodents, or other unwanted organisms, acutely affect New Zealand's ecology, economy, and public health. The goal of our project was to develop an application that expedites the process of detecting pests. We have developed a web-based, local, and mobile application to classify insects and organisms accurately. Our application allows users to upload images of insects and organisms that are then classified by neural networks and returned to the user in the form of classifications and confidence levels, which are downloadable in the form of a CSV or Excel file.
        </div>
        <div className="font-bold  mt-4">Technologies Used</div>
        <div className="flex gap-2 items-center mt-2">
        <div className="">Backend</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">python</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">uvicornw</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">FastAPI</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">Pyinstaller</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">Inno Setup</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">TensorFlow</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">HTTPX</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">PyTorch</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">pywebview</div>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <div className="">Frontend</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">daisyUI</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">Firebase</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">tailwindcss</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">React</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">TypeScript</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">Dart</div>
          <div className="px-3 py-1 text-small outline outline-1 text-blue-400 rounded-full">Flutter</div>
        </div>
        <div className="font-bold mt-4">Features</div>
        <div className="gap-4">
          <ul>
            <li className="mb-1">Upload images for prediction.</li>
            <li className="mb-1">Choose from various machine-learning models.</li>
            <li className="mb-1">Save or delete predictions in CSV or XSLX format.</li>
            <li className="mb-1">Make batch queries for simultaneous results.</li>
            <li className="mb-1">View results and confidence scores accompanied by comprehensive taxonomic and occurrence information.</li>
            <li className="mb-1">Register an account to access additional functionality.</li>
            <li className="mb-1">Login to access user history and logged-in status.</li>
            <li className="mb-1">Logged-in users have prediction results automatically saved that are accessible on the history page. Track and manage query data and interact with prediction results similarly to the detection page. Users can filter, sort, search, delete, and download previous queries.</li>
            <li className="mb-1">Platform accessible on desktop, web, or mobile.</li>
            <ul>
              <li className="mb-1">Deployed Web Application.</li>
              <li className="mb-1">Desktop application offering functionalities akin to the web application available for download from CodeCritters GitHub releases (excluding user accounts).</li>
              <li className="mb-1">Android mobile app allows users to capture images for insect classification from the comfort of their mobile device. This is available for download from the CodeCritters FlutterApp Github release.</li>
            </ul>
          </ul>
        </div>
      </div> ),
    },
    {
      name: "3D Avatars for Sign Language",
      description: "A scholarship research project for creating 3D avatars that can sign in NZSL using Blender and Python, automating the signing process and promoting accessibility.",
      tags: ["Blender", "Python", "3D modeling"],
      image: "projects/nzsl.jpg",
      images: [
        "projects/nzsl.jpg",
      ],
    },
    {
      name: "Concert Booking Web Service",
      description: "A web service for booking seats for concerts.",
      tags: ["Java", "Tag2", "Website"],
      image: "projects/concert.png",
      images: [
        "projects/concert/1.png",
        "projects/concert/2.png",
        "projects/concert/3.png",
      ],
    },
    {
      name: "Music Library Web Application",
      description: "A music library web application, allowing users to log in, play, manage, and review their favorite songs.",
      tags: ["Python", "SQL", "Website"],
      image: "projects/music.png",
      images: [
        "projects/music.png",
      ],
    },
    {
      name: "Barcode Detection Tool",
      description: "A software tool that detects barcodes in images using image processing techniques, aiding in inventory management and object identification.",
      tags: ["Python", "Tag2", "Tag3"],
      image: "projects/barcode.png",
      images: [
        "projects/barcode.png",
      ],
    },
    {
      name: "Ako Māori",
      description: "Ako Māori, a web application to assist beginners in learning Te Reo Māori. This application aims to aid in the revitalisation of Te Reo Māori, an essential part of Aotearoa New Zealand's heritage.",
      tags: ["Tag1", "Tag2", "Website"],
      image: "projects/tereo.png",
      images: [
        "projects/tereo.png",
      ],
    },
    {
      name: "Carbon Footprint",
      description: "Project 7 Description",
      tags: ["Tag1", "Tag2", "Website"],
      image: "projects/carbon.png",
      images: [
        "projects/carbon.png",
      ],
    },
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    onOpen();
  };

  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total: selectedProject?.images.length || 0,
    showControls: true,
    siblings: 20,
    boundaries: 10,
  });

  return (
    <section className="w-full h-full pt-20" data-scroll-to="projectsSection">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mt-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-2">
          {projects.map((project, index) => (
            <Card key={index} style={{ width: "400px" }} >
              <img
                src={project.image}
                alt="Project Image"
                width="400px"
                height="200px"
                className="object-cover"
              />
              <CardHeader className="flex" style={{ width: "auto" }}>
                <div className="px-4 pb-4 flex flex-col"> 
                  <p className="text-center text-lg font-semibold">{project.name}</p>
                  <div className="flex gap-4 items-center justify-center">
                    {project.tags.map((tag, index) => (
                      <div key={index} className="px-3 py-1 text-tiny outline outline-1 text-blue-400 rounded-full">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <p className="text-small text-default-500">
                    {project.description}
                  </p>
                  <Button radius="full" color="primary" onPress={() => openModal(project)}>
                    Read more
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl" style={{zIndex: 30}}>
          <ModalContent style={{ maxHeight: "90vh", overflowY: "auto", }}>
            <ModalHeader className="textsize-2xl text-center flex flex-col gap-1">{selectedProject?.name}</ModalHeader>
              <div className="px-12 scrollbar" style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <div>
              <Image src={selectedProject?.images[activePage - 1]} alt="Project Image" className="w-full"/>
              
              <ul className="flex gap-4 items-center justify-center list-none">
        {range.map((page) => {
          if (page === PaginationItemType.NEXT) {
            return (
              <li key={page} aria-label="next page" className="w-4 h-4">
                <button
                  className="w-full h-full bg-transparent rounded-full"
                  onClick={onNext}
                >
                  {/* <FontAwesomeIcon icon={faChevronRight}/> */}
                  
                  <ChevronIcon className="rotate-180"/>
                </button>
              </li>
            );
          }

          if (page === PaginationItemType.PREV) {
            return (
              <li key={page} aria-label="previous page" className="w-4 h-4">
                <button
                  className="w-full h-full bg-transparent rounded-full"
                  onClick={onPrevious}
                >
                <ChevronIcon />
                </button>
              </li>
            );
          }

          if (page === PaginationItemType.DOTS) {
            return (
              <li key={page} className="w-4 h-4">
                ...
              </li>
            );
          }

          return (
            <li key={page} aria-label={`page ${page}`} className="w-4 h-4">
              <button
                className={
                  (activePage === page ? "bg-primary w-full h-full rounded-full" : "bg-default-300 w-full h-full rounded-full")
                }
                onClick={() => setPage(page)}
              />
            </li>
          );
        })}
      </ul>
              <ModalBody>
                {selectedProject?.projectDetails}
              </ModalBody>
            </div>
            </div>
            <ModalFooter className="flex justify-center">
              <Link isExternal href="https://github.com/uoa-compsci399-s2-2023/capstone-project-team-34-code-critters">
                <Button color="primary">
                  <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
                  <p className="mx-4 text-[#ffffff]">Repository</p>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: "#ffffff" }} />
                </Button>
              </Link>
              <Link isExternal href="https://codecritters.live/">
                <Button color="primary">
                  <FontAwesomeIcon icon={faDisplay} style={{ color: "#ffffff" }} />
                  <p className="mx-4 text-[#ffffff]">Website</p>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: "#ffffff" }} />
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </section>
  );
};

export default Projects;
