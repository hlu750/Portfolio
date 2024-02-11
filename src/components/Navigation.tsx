import React, { FunctionComponent, useCallback, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

const Navigation: FunctionComponent = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    const anchor = document.querySelector(`[data-scroll-to='${buttonName}Section']`);
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <Navbar className="rounded-full " maxWidth="2xl">
      <NavbarBrand>
        <p className="font-bold font-varela text-inherit">Helen Lu</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={activeButton === "home"}>
          <Button className={activeButton === "home" ? "text-primary" : ""} variant="light" href="#" onClick={() => handleButtonClick("home")}>
            Home
          </Button>
        </NavbarItem>
        <NavbarItem isActive={activeButton === "about"}>
          <Button className={activeButton === "about" ? "text-primary" : ""} variant="light" href="#" onClick={() => handleButtonClick("about")}>
            About
          </Button>
        </NavbarItem>
        <NavbarItem isActive={activeButton === "services"}>
          <Button className={activeButton === "services" ? "text-primary" : ""} variant="light" href="#" onClick={() => handleButtonClick("services")}>
            Services
          </Button>
        </NavbarItem>
        <NavbarItem isActive={activeButton === "projects"}>
          <Button className={activeButton === "projects" ? "text-primary" : ""} variant="light" href="#" onClick={() => handleButtonClick("projects")}>
            Projects
          </Button>
        </NavbarItem>
        {/* <NavbarItem isActive={activeButton === "skills"}>
          <Button className={activeButton === "skills" ? "text-primary" : ""} variant="light" href="#" onClick={() => handleButtonClick("skills")}>
            Skills
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem isActive={activeButton === "contact"}>
          <Button
            color="primary"
            radius="full"
            href="#"
            variant={activeButton === "contact" ? "flat" : "solid"}
            onClick={() => handleButtonClick("contact")}
          >
            Contact me
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
