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
  Pagination,
  Select,
  SelectItem
} from "@heroui/react";
import { Icon } from "@iconify/react";

type Trainer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  specialization: string[];
  experience: string;
  status: "active" | "inactive" | "vacation";
  bio: string;
  avatar: string;
};

const trainers: Trainer[] = [
  {
    id: "1",
    name: "Иван Петров",
    phone: "+7 (901) 111-22-33",
    email: "ivan.petrov@example.com",
    specialization: ["Силовые тренировки", "Функциональный тренинг"],
    experience: "5 лет",
    status: "active",
    bio: "Мастер спорта по пауэрлифтингу. Специализируется на силовых тренировках и функциональном тренинге.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=11"
  },
  {
    id: "2",
    name: "Мария Козлова",
    phone: "+7 (902) 222-33-44",
    email: "maria.kozlova@example.com",
    specialization: ["Йога", "Пилатес", "Стретчинг"],
    experience: "7 лет",
    status: "active",
    bio: "Сертифицированный инструктор по йоге и пилатесу. Проводит групповые и индивидуальные занятия.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=12"
  },
  {
    id: "3",
    name: "Алексей Соколов",
    phone: "+7 (903) 333-44-55",
    email: "alexey.sokolov@example.com",
    specialization: ["Кроссфит", "TRX", "Функциональный тренинг"],
    experience: "4 года",
    status: "active",
    bio: "Специалист по функциональному тренингу и кроссфиту. Разрабатывает индивидуальные программы тренировок.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=13"
  },
  {
    id: "4",
    name: "Ольга Морозова",
    phone: "+7 (904) 444-55-66",
    email: "olga.morozova@example.com",
    specialization: ["Аэробика", "Степ-аэробика", "Зумба"],
    experience: "6 лет",
    status: "vacation",
    bio: "Мастер спорта по художественной гимнастике. Проводит групповые занятия по аэробике и зумбе.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=14"
  },
  {
    id: "5",
    name: "Дмитрий Волков",
    phone: "+7 (905) 555-66-77",
    email: "dmitry.volkov@example.com",
    specialization: ["Бодибилдинг", "Силовые тренировки"],
    experience: "8 лет",
    status: "active",
    bio: "Чемпион России по бодибилдингу. Специализируется на наборе мышечной массы и силовых тренировках.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=15"
  },
  {
    id: "6",
    name: "Анна Кузнецова",
    phone: "+7 (906) 666-77-88",
    email: "anna.kuznetsova@example.com",
    specialization: ["Диетология", "Составление планов питания"],
    experience: "5 лет",
    status: "inactive",
    bio: "Сертифицированный диетолог. Разрабатывает индивидуальные планы питания для достижения различных целей.",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=16"
  }
];

export const TrainerManagement: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editingTrainer, setEditingTrainer] = React.useState<Trainer | null>(null);
  const [selectedTrainer, setSelectedTrainer] = React.useState<Trainer | null>(null);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const handleEdit = (trainer: Trainer) => {
    setEditingTrainer(trainer);
    onOpen();
  };

  const handleAdd = () => {
    setEditingTrainer(null);
    onOpen();
  };

  const handleViewDetails = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
  };

  const renderStatusCell = (status: string) => {
    switch (status) {
      case "active":
        return <Chip color="success" variant="flat">Активный</Chip>;
      case "inactive":
        return <Chip color="danger" variant="flat">Неактивный</Chip>;
      case "vacation":
        return <Chip color="warning" variant="flat">Отпуск</Chip>;
      default:
        return null;
    }
  };

  const pages = Math.ceil(trainers.length / rowsPerPage);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return trainers.slice(start, end);
  }, [page]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Управление тренерами</h2>
        <Button 
          color="primary" 
          startContent={<Icon icon="lucide:plus" />}
          onPress={handleAdd}
        >
          Добавить тренера
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardBody>
              <Table 
                aria-label="Таблица тренеров"
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
                  <TableColumn>ТРЕНЕР</TableColumn>
                  <TableColumn>СПЕЦИАЛИЗАЦИЯ</TableColumn>
                  <TableColumn>СТАТУС</TableColumn>
                  <TableColumn>ДЕЙСТВИЯ</TableColumn>
                </TableHeader>
                <TableBody>
                  {items.map((trainer) => (
                    <TableRow key={trainer.id} className="cursor-pointer" onClick={() => handleViewDetails(trainer)}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar src={trainer.avatar} size="sm" />
                          <div>
                            <p>{trainer.name}</p>
                            <p className="text-default-500 text-sm">{trainer.phone}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {trainer.specialization.map((spec, index) => (
                            <Chip key={index} size="sm" variant="flat">{spec}</Chip>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{renderStatusCell(trainer.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            isIconOnly 
                            size="sm" 
                            variant="light"
                            onPress={(e) => {
                              e.stopPropagation();
                              handleEdit(trainer);
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
          {selectedTrainer ? (
            <TrainerDetails trainer={selectedTrainer} />
          ) : (
            <Card>
              <CardBody className="flex flex-col items-center justify-center py-12 text-center text-default-500">
                <Icon icon="lucide:dumbbell" className="text-4xl mb-4" />
                <p>Выберите тренера для просмотра подробной информации</p>
              </CardBody>
            </Card>
          )}
        </div>
      </div>

      <TrainerModal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        trainer={editingTrainer} 
      />
    </div>
  );
};

interface TrainerDetailsProps {
  trainer: Trainer;
}

const TrainerDetails: React.FC<TrainerDetailsProps> = ({ trainer }) => {
  return (
    <Card>
      <CardBody className="space-y-6">
        <div className="flex flex-col items-center text-center">
          <Avatar src={trainer.avatar} className="w-20 h-20" />
          <h3 className="text-lg font-semibold mt-2">{trainer.name}</h3>
          <div className="mt-1">{renderTrainerStatusBadge(trainer.status)}</div>
        </div>

        <Tabs aria-label="Информация о тренере">
          <Tab key="info" title="Информация">
            <div className="space-y-3 pt-2">
              <InfoItem label="Телефон" value={trainer.phone} />
              <InfoItem label="Email" value={trainer.email} />
              <InfoItem label="Опыт работы" value={trainer.experience} />
              <InfoItem label="Специализация" value={trainer.specialization.join(", ")} />
              <InfoItem label="Биография" value={trainer.bio} />
            </div>
          </Tab>
          <Tab key="schedule" title="Расписание">
            <div className="space-y-3 pt-2">
              <ScheduleItem day="Понедельник" slots={["10:00 - 11:00", "15:00 - 16:00", "18:00 - 19:00"]} />
              <ScheduleItem day="Вторник" slots={["11:00 - 12:00", "16:00 - 17:00", "19:00 - 20:00"]} />
              <ScheduleItem day="Среда" slots={["10:00 - 11:00", "15:00 - 16:00", "18:00 - 19:00"]} />
              <ScheduleItem day="Четверг" slots={["11:00 - 12:00", "16:00 - 17:00", "19:00 - 20:00"]} />
              <ScheduleItem day="Пятница" slots={["10:00 - 11:00", "15:00 - 16:00", "18:00 - 19:00"]} />
              <ScheduleItem day="Суббота" slots={["12:00 - 13:00", "15:00 - 16:00"]} />
              <ScheduleItem day="Воскресенье" slots={["Выходной"]} />
            </div>
          </Tab>
          <Tab key="clients" title="Клиенты">
            <div className="space-y-3 pt-2">
              <ClientItem name="Анна Смирнова" service="Персональная тренировка" />
              <ClientItem name="Сергей Иванов" service="Составление плана питания" />
              <ClientItem name="Екатерина Новикова" service="Персональная тренировка" />
              <ClientItem name="Дмитрий Кузнецов" service="Функциональный тренинг" />
              <ClientItem name="Ольга Морозова" service="Персональная тренировка" />
            </div>
          </Tab>
        </Tabs>

        <div className="flex justify-center gap-2 pt-2">
          <Button 
            color="primary" 
            variant="flat" 
            startContent={<Icon icon="lucide:calendar" />}
          >
            Изменить расписание
          </Button>
          <Button 
            color="primary" 
            startContent={<Icon icon="lucide:users" />}
          >
            Назначить клиентов
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

const renderTrainerStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Chip color="success">Активный</Chip>;
    case "inactive":
      return <Chip color="danger">Неактивный</Chip>;
    case "vacation":
      return <Chip color="warning">В отпуске</Chip>;
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

interface ScheduleItemProps {
  day: string;
  slots: string[];
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ day, slots }) => {
  return (
    <div>
      <p className="font-medium">{day}</p>
      <div className="flex flex-wrap gap-1 mt-1">
        {slots.map((slot, index) => (
          slot === "Выходной" ? 
            <p key={index} className="text-default-500 text-sm">{slot}</p> :
            <Chip key={index} size="sm" variant="flat">{slot}</Chip>
        ))}
      </div>
    </div>
  );
};

interface ClientItemProps {
  name: string;
  service: string;
}

const ClientItem: React.FC<ClientItemProps> = ({ name, service }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-default-500 text-sm">{service}</p>
      </div>
      <Button size="sm" variant="flat" color="primary">
        Детали
      </Button>
    </div>
  );
};

interface TrainerModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  trainer: Trainer | null;
}

const TrainerModal: React.FC<TrainerModalProps> = ({ isOpen, onOpenChange, trainer }) => {
  const isEditing = !!trainer;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {isEditing ? "Редактировать тренера" : "Добавить тренера"}
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Имя"
                    placeholder="Введите имя"
                    defaultValue={trainer?.name}
                  />
                  <Input
                    label="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    defaultValue={trainer?.phone}
                  />
                </div>
                <Input
                  label="Email"
                  placeholder="example@email.com"
                  type="email"
                  defaultValue={trainer?.email}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Специализация"
                    placeholder="Введите через запятую"
                    defaultValue={trainer?.specialization.join(", ")}
                  />
                  <Input
                    label="Опыт работы"
                    placeholder="Например: 5 лет"
                    defaultValue={trainer?.experience}
                  />
                </div>
                <Select
                  label="Статус"
                  placeholder="Выберите статус"
                  defaultSelectedKeys={trainer ? [trainer.status] : undefined}
                >
                  <SelectItem key="active" value="active">Активный</SelectItem>
                  <SelectItem key="inactive" value="inactive">Неактивный</SelectItem>
                  <SelectItem key="vacation" value="vacation">В отпуске</SelectItem>
                </Select>
                <Textarea
                  label="Биография"
                  placeholder="Информация о тренере"
                  defaultValue={trainer?.bio}
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