import React from "react";
import { 
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Select,
  SelectItem,
  Textarea,
  Chip,
  Card,
  CardBody,
  CardHeader,
  Image,
  Divider
} from "@heroui/react";
import { Icon } from "@iconify/react";

type TrainerService = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: "personal" | "group" | "nutrition" | "special";
  status: "active" | "inactive";
  image?: string;
};

const trainerServices: TrainerService[] = [
  {
    id: "1",
    name: "Жеке жаттығу",
    description: "Жаттықтырушымен жеке жаттығу, жаттығу бағдарламасын құрастыру.",
    duration: "60 мин",
    price: 10000,
    category: "personal",
    status: "active",
    image: "https://img.heroui.chat/image/sports?w=400&h=300&u=3"
  },
  {
    id: "2",
    name: "Тамақтану жоспарын құру",
    description: "Клиенттің мақсаттары мен ерекшеліктерін ескере отырып, жеке тамақтану жоспары.",
    duration: "90 мин",
    price: 17500,
    category: "nutrition",
    status: "active",
    image: "https://img.heroui.chat/image/food?w=400&h=300&u=1"
  },
  {
    id: "3",
    name: "Функционалды жаттығу",
    description: "Дененің функционалды мүмкіндіктерін дамытуға бағытталған топтық жаттығу.",
    duration: "45 мин",
    price: 5000,
    category: "group",
    status: "active",
    image: "https://img.heroui.chat/image/sports?w=400&h=300&u=4"
  },
  {
    id: "4",
    name: "Күш жаттығуы",
    description: "Күш пен бұлшық ет массасын дамытуға бағытталған жеке жаттығу.",
    duration: "60 мин",
    price: 10000,
    category: "personal",
    status: "active",
    image: "https://img.heroui.chat/image/sports?w=400&h=300&u=5"
  },
  {
    id: "5",
    name: "Оңалту жаттығуы",
    description: "Жарақаттан кейін қалпына келтіруге арналған арнайы жаттығу.",
    duration: "60 мин",
    price: 12500,
    category: "special",
    status: "active",
    image: "https://img.heroui.chat/image/sports?w=400&h=300&u=6"
  },
  {
    id: "6",
    name: "Йога",
    description: "Барлық деңгейдегі дайындыққа арналған топтық йога сабағы.",
    duration: "60 мин",
    price: 6000,
    category: "group",
    status: "active",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VdTwrmSJqReusosfjYJzrKEIXoLtPtibZA&s"
  }
];

export const TrainerServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  
  const filteredServices = selectedCategory 
    ? trainerServices.filter(service => service.status === "active" && service.category === selectedCategory)
    : trainerServices.filter(service => service.status === "active");
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Жаттықтырушы қызметтері</h2>
        <p className="text-default-500 mb-6">
          Біздің кәсіби жаттықтырушылар сіздің фитнес мақсаттарыңызға жету үшін қызметтердің кең спектрін ұсынады.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <Chip 
          color={selectedCategory === null ? "primary" : "default"} 
          variant={selectedCategory === null ? "solid" : "flat"}
          className="cursor-pointer"
          onClick={() => setSelectedCategory(null)}
        >
          Барлық қызметтер
        </Chip>
        <Chip 
          color={selectedCategory === "personal" ? "primary" : "default"} 
          variant={selectedCategory === "personal" ? "solid" : "flat"}
          className="cursor-pointer"
          onClick={() => setSelectedCategory("personal")}
        >
          Жеке
        </Chip>
        <Chip 
          color={selectedCategory === "group" ? "primary" : "default"} 
          variant={selectedCategory === "group" ? "solid" : "flat"}
          className="cursor-pointer"
          onClick={() => setSelectedCategory("group")}
        >
          Топтық
        </Chip>
        <Chip 
          color={selectedCategory === "nutrition" ? "primary" : "default"} 
          variant={selectedCategory === "nutrition" ? "solid" : "flat"}
          className="cursor-pointer"
          onClick={() => setSelectedCategory("nutrition")}
        >
          Тамақтану
        </Chip>
        <Chip 
          color={selectedCategory === "special" ? "primary" : "default"} 
          variant={selectedCategory === "special" ? "solid" : "flat"}
          className="cursor-pointer"
          onClick={() => setSelectedCategory("special")}
        >
          Арнайы
        </Chip>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      
      <Card className="mt-8">
        <CardBody>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Жаттығуға жазылғыңыз келе ме?</h3>
              <p className="text-default-500">Жазылу немесе қосымша ақпарат алу үшін бізбен байланысыңыз</p>
            </div>
            <Button 
              color="primary" 
              startContent={<Icon icon="lucide:calendar" />}
            >
              Жаттығуға жазылу
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

interface ServiceCardProps {
  service: TrainerService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const renderCategoryChip = (category: string) => {
    switch (category) {
      case "personal":
        return <Chip color="primary" variant="flat">Жеке</Chip>;
      case "group":
        return <Chip color="secondary" variant="flat">Топтық</Chip>;
      case "nutrition":
        return <Chip color="success" variant="flat">Тамақтану</Chip>;
      case "special":
        return <Chip color="warning" variant="flat">Арнайы</Chip>;
      default:
        return null;
    }
  };
  
  return (
    <Card>
      <CardHeader className="p-0">
        <Image
          alt={service.name}
          src={service.image || `https://img.heroui.chat/image/sports?w=400&h=300&u=${service.id}`}
          className="object-cover w-full h-[180px]"
        />
      </CardHeader>
      <CardBody>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{service.name}</h3>
          {renderCategoryChip(service.category)}
        </div>
        <p className="text-default-500 mb-4">{service.description}</p>
        <Divider className="my-3" />
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-default-500">Ұзақтығы</p>
            <p className="font-medium">{service.duration}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-default-500">Бағасы</p>
            <p className="font-bold text-lg">{service.price.toLocaleString()} ₸</p>
          </div>
        </div>
        <Button color="primary" fullWidth className="mt-4">
          Жазылу
        </Button>
      </CardBody>
    </Card>
  );
};

interface ServiceModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  service: TrainerService | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onOpenChange, service }) => {
  const isEditing = !!service;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {isEditing ? "Редактировать услугу" : "Добавить услугу"}
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                <Input
                  label="Название услуги"
                  placeholder="Введите название"
                  defaultValue={service?.name}
                />
                <Textarea
                  label="Описание"
                  placeholder="Введите описание услуги"
                  defaultValue={service?.description}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Длительность"
                    placeholder="Например: 60 мин"
                    defaultValue={service?.duration}
                  />
                  <Input
                    label="Цена (₽)"
                    placeholder="Введите цену"
                    type="number"
                    defaultValue={service?.price.toString()}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Категория"
                    placeholder="Выберите категорию"
                    defaultSelectedKeys={service ? [service.category] : undefined}
                  >
                    <SelectItem key="personal" value="personal">Персональная</SelectItem>
                    <SelectItem key="group" value="group">Групповая</SelectItem>
                    <SelectItem key="nutrition" value="nutrition">Питание</SelectItem>
                    <SelectItem key="special" value="special">Специальная</SelectItem>
                  </Select>
                  <Select
                    label="Статус"
                    placeholder="Выберите статус"
                    defaultSelectedKeys={service ? [service.status] : undefined}
                  >
                    <SelectItem key="active" value="active">Активная</SelectItem>
                    <SelectItem key="inactive" value="inactive">Неактивная</SelectItem>
                  </Select>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Отмена
              </Button>
              <Button color="primary" onPress={onClose}>
                {isEditing ? "Сохранить" : "Добавить"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
