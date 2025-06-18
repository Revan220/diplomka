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
  Textarea,
  Tabs,
  Tab,
  Card,
  CardBody,
  Chip,
  Avatar,
  Pagination
} from "@heroui/react";
import { Icon } from "@iconify/react";

type Client = {
  id: string;
  name: string;
  phone: string;
  email: string;
  membershipType: string;
  membershipExpiry: string;
  registrationDate: string;
  status: "active" | "inactive" | "expired";
  notes: string;
  avatar: string;
};

const clients: Client[] = [
  {
    id: "1",
    name: "Анна Смирнова",
    phone: "+7 (901) 123-45-67",
    email: "anna.smirnova@example.com",
    membershipType: "Годовой безлимит",
    membershipExpiry: "15.04.2025",
    registrationDate: "15.04.2024",
    status: "active",
    notes: "Предпочитает тренировки в утреннее время.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
  },
  {
    id: "2",
    name: "Сергей Иванов",
    phone: "+7 (902) 234-56-78",
    email: "sergey.ivanov@example.com",
    membershipType: "Месячный безлимит",
    membershipExpiry: "05.05.2024",
    registrationDate: "05.04.2024",
    status: "active",
    notes: "Интересуется персональными тренировками.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2"
  },
  {
    id: "3",
    name: "Екатерина Новикова",
    phone: "+7 (903) 345-67-89",
    email: "ekaterina.novikova@example.com",
    membershipType: "Дневной (6 мес.)",
    membershipExpiry: "10.09.2024",
    registrationDate: "10.03.2024",
    status: "active",
    notes: "Занимается йогой и пилатесом.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3"
  },
  {
    id: "4",
    name: "Дмитрий Кузнецов",
    phone: "+7 (904) 456-78-90",
    email: "dmitry.kuznetsov@example.com",
    membershipType: "Выходного дня",
    membershipExpiry: "20.06.2024",
    registrationDate: "20.03.2024",
    status: "active",
    notes: "Предпочитает силовые тренировки.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4"
  },
  {
    id: "5",
    name: "Ольга Морозова",
    phone: "+7 (905) 567-89-01",
    email: "olga.morozova@example.com",
    membershipType: "Годовой безлимит",
    membershipExpiry: "01.03.2024",
    registrationDate: "01.03.2023",
    status: "expired",
    notes: "Была заинтересована в продлении абонемента.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5"
  },
  {
    id: "6",
    name: "Алексей Соколов",
    phone: "+7 (906) 678-90-12",
    email: "alexey.sokolov@example.com",
    membershipType: "Месячный безлимит",
    membershipExpiry: "15.03.2024",
    registrationDate: "15.02.2024",
    status: "expired",
    notes: "Интересуется групповыми тренировками.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=6"
  },
  {
    id: "7",
    name: "Наталья Петрова",
    phone: "+7 (907) 789-01-23",
    email: "natalia.petrova@example.com",
    membershipType: "Студенческий",
    membershipExpiry: "25.04.2024",
    registrationDate: "25.03.2024",
    status: "active",
    notes: "Студентка, занимается в дневное время.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=7"
  },
  {
    id: "8",
    name: "Павел Волков",
    phone: "+7 (908) 890-12-34",
    email: "pavel.volkov@example.com",
    membershipType: "Месячный безлимит",
    membershipExpiry: "30.04.2024",
    registrationDate: "30.03.2024",
    status: "active",
    notes: "Предпочитает тренировки в вечернее время.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=8"
  }
];

export const ClientManagement: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editingClient, setEditingClient] = React.useState<Client | null>(null);
  const [selectedClient, setSelectedClient] = React.useState<Client | null>(null);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    onOpen();
  };

  const handleAdd = () => {
    setEditingClient(null);
    onOpen();
  };

  const handleViewDetails = (client: Client) => {
    setSelectedClient(client);
  };

  const renderStatusCell = (status: string) => {
    switch (status) {
      case "active":
        return <Chip color="success" variant="flat">Активный</Chip>;
      case "inactive":
        return <Chip color="warning" variant="flat">Неактивный</Chip>;
      case "expired":
        return <Chip color="danger" variant="flat">Истёк</Chip>;
      default:
        return null;
    }
  };

  const pages = Math.ceil(clients.length / rowsPerPage);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return clients.slice(start, end);
  }, [page]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Управление клиентами</h2>
        <Button 
          color="primary" 
          startContent={<Icon icon="lucide:plus" />}
          onPress={handleAdd}
        >
          Добавить клиента
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardBody>
              <Table 
                aria-label="Таблица клиентов"
                removeWrapper
                bottomContent={
                  <div className="flex w-full justify-center">
                    <Pagination
                      isCompact
                      showControls
                      showShadow
                      color="primary"
                      page={page}
                      total={pages}
                      onChange={(page) => setPage(page)}
                    />
                  </div>
                }
              >
                <TableHeader>
                  <TableColumn>КЛИЕНТ</TableColumn>
                  <TableColumn>АБОНЕМЕНТ</TableColumn>
                  <TableColumn>СТАТУС</TableColumn>
                  <TableColumn>ДЕЙСТВИЯ</TableColumn>
                </TableHeader>
                <TableBody>
                  {items.map((client) => (
                    <TableRow key={client.id} className="cursor-pointer" onClick={() => handleViewDetails(client)}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar src={client.avatar} size="sm" />
                          <div>
                            <p>{client.name}</p>
                            <p className="text-default-500 text-sm">{client.phone}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{client.membershipType}</p>
                          <p className="text-default-500 text-sm">До {client.membershipExpiry}</p>
                        </div>
                      </TableCell>
                      <TableCell>{renderStatusCell(client.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            isIconOnly 
                            size="sm" 
                            variant="light"
                            onPress={(e) => {
                              e.stopPropagation();
                              handleEdit(client);
                            }}
                          >
                            <Icon icon="lucide:edit" className="text-default-500" />
                          </Button>
                          <Button 
                            isIconOnly 
                            size="sm" 
                            variant="light"
                            color="danger"
                            onPress={(e) => e.stopPropagation()}
                          >
                            <Icon icon="lucide:trash-2" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>

        <div>
          {selectedClient ? (
            <ClientDetails client={selectedClient} />
          ) : (
            <Card>
              <CardBody className="flex flex-col items-center justify-center py-12 text-center text-default-500">
                <Icon icon="lucide:user" className="text-4xl mb-4" />
                <p>Выберите клиента для просмотра подробной информации</p>
              </CardBody>
            </Card>
          )}
        </div>
      </div>

      <ClientModal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        client={editingClient} 
      />
    </div>
  );
};

interface ClientDetailsProps {
  client: Client;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client }) => {
  return (
    <Card>
      <CardBody className="space-y-6">
        <div className="flex flex-col items-center text-center">
          <Avatar src={client.avatar} className="w-20 h-20" />
          <h3 className="text-lg font-semibold mt-2">{client.name}</h3>
          <div className="mt-1">{renderClientStatusBadge(client.status)}</div>
        </div>

        <Tabs aria-label="Информация о клиенте">
          <Tab key="info" title="Информация">
            <div className="space-y-3 pt-2">
              <InfoItem label="Телефон" value={client.phone} />
              <InfoItem label="Email" value={client.email} />
              <InfoItem label="Дата регистрации" value={client.registrationDate} />
              <InfoItem label="Тип абонемента" value={client.membershipType} />
              <InfoItem label="Действителен до" value={client.membershipExpiry} />
              <InfoItem label="Заметки" value={client.notes} />
            </div>
          </Tab>
          <Tab key="visits" title="Посещения">
            <div className="space-y-3 pt-2">
              <VisitItem date="25.04.2024" time="18:30" duration="1ч 15м" />
              <VisitItem date="23.04.2024" time="19:00" duration="1ч 30м" />
              <VisitItem date="20.04.2024" time="17:45" duration="1ч 20м" />
              <VisitItem date="18.04.2024" time="18:15" duration="1ч 10м" />
              <VisitItem date="15.04.2024" time="19:30" duration="1ч 25м" />
            </div>
          </Tab>
          <Tab key="payments" title="Платежи">
            <div className="space-y-3 pt-2">
              <PaymentItem date="15.04.2024" amount="45000" type="Годовой безлимит" />
              <PaymentItem date="15.03.2024" amount="2000" type="Персональная тренировка" />
              <PaymentItem date="01.03.2024" amount="3500" type="Составление плана питания" />
              <PaymentItem date="15.02.2024" amount="2000" type="Персональная тренировка" />
            </div>
          </Tab>
        </Tabs>

        <div className="flex justify-center gap-2 pt-2">
          <Button 
            color="primary" 
            variant="flat" 
            startContent={<Icon icon="lucide:calendar" />}
          >
            Записать на тренировку
          </Button>
          <Button 
            color="primary" 
            startContent={<Icon icon="lucide:credit-card" />}
          >
            Продлить абонемент
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

const renderClientStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Chip color="success">Активный клиент</Chip>;
    case "inactive":
      return <Chip color="warning">Неактивный клиент</Chip>;
    case "expired":
      return <Chip color="danger">Абонемент истёк</Chip>;
    default:
      return null;
  }
};

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <div>
      <p className="text-default-500 text-sm">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
};

interface VisitItemProps {
  date: string;
  time: string;
  duration: string;
}

const VisitItem: React.FC<VisitItemProps> = ({ date, time, duration }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{date}</p>
        <p className="text-default-500 text-sm">{time}</p>
      </div>
      <Chip size="sm" variant="flat">{duration}</Chip>
    </div>
  );
};

interface PaymentItemProps {
  date: string;
  amount: string;
  type: string;
}

const PaymentItem: React.FC<PaymentItemProps> = ({ date, amount, type }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{date}</p>
        <p className="text-default-500 text-sm">{type}</p>
      </div>
      <p className="font-semibold">{parseInt(amount).toLocaleString()} ₽</p>
    </div>
  );
};

interface ClientModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  client: Client | null;
}

const ClientModal: React.FC<ClientModalProps> = ({ isOpen, onOpenChange, client }) => {
  const isEditing = !!client;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {isEditing ? "Редактировать клиента" : "Добавить клиента"}
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Имя"
                    placeholder="Введите имя"
                    defaultValue={client?.name}
                  />
                  <Input
                    label="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    defaultValue={client?.phone}
                  />
                </div>
                <Input
                  label="Email"
                  placeholder="example@email.com"
                  type="email"
                  defaultValue={client?.email}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Тип абонемента"
                    placeholder="Выберите тип абонемента"
                    defaultValue={client?.membershipType}
                  />
                  <Input
                    label="Действителен до"
                    placeholder="ДД.ММ.ГГГГ"
                    defaultValue={client?.membershipExpiry}
                  />
                </div>
                <Textarea
                  label="Заметки"
                  placeholder="Дополнительная информация о клиенте"
                  defaultValue={client?.notes}
                />
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