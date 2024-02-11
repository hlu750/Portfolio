import { FunctionComponent } from "react";
import Navigation from "./Navigation"; // Import the Navigation component
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

const Home: FunctionComponent = () => {
  return (
    <section className="w-full h-full" data-scroll-to="homeSection">
      <div className="flex min-h-screen">
        <div className="w-3/5 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start">
            {/* Text section on the left side */}
            <div className="text-left">
              <h1 style={{ fontSize: "4rem", fontWeight: "bold", margin: "0" }}>Hi, I'm <span className="text-primary">Helen</span> <br></br>A Software Developer.</h1>
              <h2 className="text-[#5C5C5C] text-lg pb-2 my-4 font-normal">Based in Auckland, New Zealand</h2>
              {/* <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "0" }}>Hi, I'm Helen <br></br>A Software Developer. </h1>
              <p className="text-lg mb-0">Based in Australia</p> */}
              <Button radius="full" size="lg" className="bg-primary text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex items-center justify-center">
          {/* Enlarged avatar placeholder on the right side */}
          <div className="w-full flex items-center justify-center mr-24">
            {/* Enlarged avatar placeholder on the right side */}
            
            <img src="avatar1.png" alt="Avatar" className="bg-[#D7EBFF] w-full h-full object-cover rounded-full mr-32" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
