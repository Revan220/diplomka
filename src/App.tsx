import React from "react";
import { Card, CardBody, Tabs, Tab } from "@heroui/react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { About } from "./components/about";
import { Memberships } from "./components/memberships";
import { TrainerServices } from "./components/trainer-services";
import { Schedule } from "./components/schedule";
import { Contact } from "./components/contact";

export default function App() {
  const [selected, setSelected] = React.useState("about");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full">
          <CardBody>
            <Tabs 
              aria-label="Фитнес Орталығы" 
              selectedKey={selected} 
              onSelectionChange={setSelected}
              className="mb-6"
            >
              <Tab key="about" title="Біз туралы">
                <About />
              </Tab>
              <Tab key="memberships" title="Абонементтер">
                <Memberships />
              </Tab>
              <Tab key="trainer-services" title="Жаттықтырушы қызметтері">
                <TrainerServices />
              </Tab>
              <Tab key="schedule" title="Кесте">
                <Schedule />
              </Tab>
              <Tab key="contact" title="Байланыс">
                <Contact />
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </main>
      <Footer />
    </div>
  );
}