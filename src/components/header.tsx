import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Header: React.FC = () => {
  return (
    <Navbar maxWidth="xl" className="border-b border-divider">
      <NavbarBrand>
        <Icon icon="lucide:dumbbell" className="text-primary text-2xl mr-2" />
        <p className="font-bold text-inherit">Фитнес Орталығы</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" startContent={<Icon icon="lucide:phone" />}>
            +7 (727) 123-45-67
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};