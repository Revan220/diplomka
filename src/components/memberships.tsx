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
  Chip,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider
} from "@heroui/react";
import { Icon } from "@iconify/react";

type Membership = {
  id: string;
  name: string;
  duration: string;
  price: number;
  features: string[];
  status: "active" | "inactive";
  popular?: boolean;
};

const memberships: Membership[] = [
  {
    id: "1",
    name: "Айлық шектеусіз",
    duration: "1 ай",
    price: 25000,
    features: ["Жаттығу залы", "Топтық сабақтар", "Сауна"],
    status: "active"
  },
  {
    id: "2",
    name: "Жылдық шектеусіз",
    duration: "12 ай",
    price: 225000,
    features: ["Жаттығу залы", "Топтық сабақтар", "Сауна", "Бассейн", "Сүлгілер"],
    status: "active",
    popular: true
  },
  {
    id: "3",
    name: "Күндізгі (6 ай)",
    duration: "6 ай",
    price: 100000,
    features: ["Жаттығу залы", "Топтық сабақтар", "8:00-ден 17:00-ге дейін қолжетімді"],
    status: "active"
  },
  {
    id: "4",
    name: "Демалыс күндері",
    duration: "3 ай",
    price: 60000,
    features: ["Жаттығу залы", "Топтық сабақтар", "Демалыс және мереке күндері қолжетімді"],
    status: "active"
  },
  {
    id: "5",
    name: "Студенттік",
    duration: "1 ай",
    price: 17500,
    features: ["Жаттығу залы", "12:00-ден 17:00-ге дейін қолжетімді"],
    status: "active"
  }
];

export const Memberships: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Абонементтер</h2>
        <p className="text-default-500 mb-6">
          Жаттығуларыңызға сәйкес абонементті таңдаңыз. Біз әртүрлі мақсаттар мен кестелер үшін түрлі нұсқаларды ұсынамыз.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memberships.filter(m => m.status === "active").map((membership) => (
          <MembershipCard key={membership.id} membership={membership} />
        ))}
      </div>
      
      <Card className="mt-8">
        <CardBody>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Таңдауға көмек керек пе?</h3>
              <p className="text-default-500">Біздің кеңесшілеріміз оңтайлы абонементті таңдауға көмектеседі</p>
            </div>
            <Button 
              color="primary" 
              startContent={<Icon icon="lucide:phone" />}
            >
              Кеңес алу
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

interface MembershipCardProps {
  membership: Membership;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ membership }) => {
  return (
    <Card className={`overflow-visible ${membership.popular ? 'border-primary border-2' : ''}`}>
      <CardHeader className="flex flex-col gap-1 pb-0">
        {membership.popular && (
          <Chip color="primary" className="self-start mb-2">Танымал таңдау</Chip>
        )}
        <h3 className="text-xl font-bold">{membership.name}</h3>
        <p className="text-default-500">{membership.duration}</p>
      </CardHeader>
      <CardBody className="py-4">
        <p className="text-3xl font-bold mb-4">{membership.price.toLocaleString()} ₸</p>
        <Divider className="my-3" />
        <ul className="space-y-2">
          {membership.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Icon icon="lucide:check" className="text-success mt-1 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter>
        <Button color="primary" fullWidth>
          Сатып алу
        </Button>
      </CardFooter>
    </Card>
  );
};

interface MembershipModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  membership: Membership | null;
}

const MembershipModal: React.FC<MembershipModalProps> = ({ isOpen, onOpenChange, membership }) => {
  const isEditing = !!membership;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {isEditing ? "Редактировать абонемент" : "Добавить абонемент"}
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                <Input
                  label="Название абонемента"
                  placeholder="Введите название"
                  defaultValue={membership?.name}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Длительность"
                    placeholder="Например: 1 месяц"
                    defaultValue={membership?.duration}
                  />
                  <Input
                    label="Цена (₽)"
                    placeholder="Введите цену"
                    type="number"
                    defaultValue={membership?.price.toString()}
                  />
                </div>
                <Input
                  label="Включенные услуги"
                  placeholder="Введите услуги через запятую"
                  defaultValue={membership?.features.join(", ")}
                />
                <Select
                  label="Статус"
                  placeholder="Выберите статус"
                  defaultSelectedKeys={membership ? [membership.status] : undefined}
                >
                  <SelectItem key="active" value="active">Активный</SelectItem>
                  <SelectItem key="inactive" value="inactive">Неактивный</SelectItem>
                </Select>
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