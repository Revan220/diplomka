import React from "react";
    import { 
      Card, 
      CardBody,
      CardHeader,
      Tabs,
      Tab,
      Chip,
      Divider
    } from "@heroui/react";
    import { Icon } from "@iconify/react";
    
    type ClassSchedule = {
      id: string;
      name: string;
      trainer: string;
      time: string;
      duration: string;
      level: "beginner" | "intermediate" | "advanced" | "all";
      category: "fitness" | "strength" | "cardio" | "mind" | "dance";
    };
    
    const weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    
    const scheduleData: Record<string, ClassSchedule[]> = {
      "Понедельник": [
        { id: "1", name: "Утренняя йога", trainer: "Мария Козлова", time: "08:00", duration: "60 мин", level: "all", category: "mind" },
        { id: "2", name: "Силовая тренировка", trainer: "Иван Петров", time: "10:00", duration: "45 мин", level: "intermediate", category: "strength" },
        { id: "3", name: "Кардио", trainer: "Алексей Соколов", time: "12:00", duration: "45 мин", level: "all", category: "cardio" },
        { id: "4", name: "Пилатес", trainer: "Мария Козлова", time: "17:00", duration: "60 мин", level: "beginner", category: "mind" },
        { id: "5", name: "Кроссфит", trainer: "Дмитрий Волков", time: "19:00", duration: "60 мин", level: "advanced", category: "strength" }
      ],
      "Вторник": [
        { id: "6", name: "Функциональный тренинг", trainer: "Алексей Соколов", time: "09:00", duration: "45 мин", level: "intermediate", category: "fitness" },
        { id: "7", name: "Зумба", trainer: "Ольга Морозова", time: "11:00", duration: "60 мин", level: "all", category: "dance" },
        { id: "8", name: "Силовая тренировка", trainer: "Иван Петров", time: "15:00", duration: "45 мин", level: "intermediate", category: "strength" },
        { id: "9", name: "Стретчинг", trainer: "Мария Козлова", time: "18:00", duration: "45 мин", level: "all", category: "mind" },
        { id: "10", name: "Бокс", trainer: "Дмитрий Волков", time: "20:00", duration: "60 мин", level: "intermediate", category: "cardio" }
      ],
      "Среда": [
        { id: "11", name: "Утренняя йога", trainer: "Мария Козлова", time: "08:00", duration: "60 мин", level: "all", category: "mind" },
        { id: "12", name: "Кардио", trainer: "Алексей Соколов", time: "10:00", duration: "45 мин", level: "all", category: "cardio" },
        { id: "13", name: "Пилатес", trainer: "Мария Козлова", time: "12:00", duration: "60 мин", level: "beginner", category: "mind" },
        { id: "14", name: "Функциональный тренинг", trainer: "Алексей Соколов", time: "18:00", duration: "45 мин", level: "intermediate", category: "fitness" },
        { id: "15", name: "Кроссфит", trainer: "Дмитрий Волков", time: "19:30", duration: "60 мин", level: "advanced", category: "strength" }
      ],
      "Четверг": [
        { id: "16", name: "Силовая тренировка", trainer: "Иван Петров", time: "09:00", duration: "45 мин", level: "intermediate", category: "strength" },
        { id: "17", name: "Зумба", trainer: "Ольга Морозова", time: "11:00", duration: "60 мин", level: "all", category: "dance" },
        { id: "18", name: "Стретчинг", trainer: "Мария Козлова", time: "16:00", duration: "45 мин", level: "all", category: "mind" },
        { id: "19", name: "Бокс", trainer: "Дмитрий Волков", time: "18:00", duration: "60 мин", level: "intermediate", category: "cardio" },
        { id: "20", name: "Йога", trainer: "Мария Козлова", time: "20:00", duration: "60 мин", level: "all", category: "mind" }
      ],
      "Пятница": [
        { id: "21", name: "Утренняя йога", trainer: "Мария Козлова", time: "08:00", duration: "60 мин", level: "all", category: "mind" },
        { id: "22", name: "Функциональный тренинг", trainer: "Алексей Соколов", time: "10:00", duration: "45 мин", level: "intermediate", category: "fitness" },
        { id: "23", name: "Кардио", trainer: "Алексей Соколов", time: "12:00", duration: "45 мин", level: "all", category: "cardio" },
        { id: "24", name: "Пилатес", trainer: "Мария Козлова", time: "17:00", duration: "60 мин", level: "beginner", category: "mind" },
        { id: "25", name: "Кроссфит", trainer: "Дмитрий Волков", time: "19:00", duration: "60 мин", level: "advanced", category: "strength" }
      ],
      "Суббота": [
        { id: "26", name: "Силовая тренировка", trainer: "Иван Петров", time: "10:00", duration: "45 мин", level: "intermediate", category: "strength" },
        { id: "27", name: "Зумба", trainer: "Ольга Морозова", time: "12:00", duration: "60 мин", level: "all", category: "dance" },
        { id: "28", name: "Йога", trainer: "Мария Козлова", time: "14:00", duration: "60 мин", level: "all", category: "mind" },
        { id: "29", name: "Функциональный тренинг", trainer: "Алексей Соколов", time: "16:00", duration: "45 мин", level: "intermediate", category: "fitness" }
      ],
      "Воскресенье": [
        { id: "30", name: "Йога", trainer: "Мария Козлова", time: "10:00", duration: "60 мин", level: "all", category: "mind" },
        { id: "31", name: "Пилатес", trainer: "Мария Козлова", time: "12:00", duration: "60 мин", level: "beginner", category: "mind" },
        { id: "32", name: "Кардио", trainer: "Алексей Соколов", time: "14:00", duration: "45 мин", level: "all", category: "cardio" },
        { id: "33", name: "Стретчинг", trainer: "Мария Козлова", time: "16:00", duration: "45 мин", level: "all", category: "mind" }
      ]
    };
    
    export const Schedule: React.FC = () => {
      const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
      
      const filterSchedule = (classes: ClassSchedule[]) => {
        if (!selectedCategory) return classes;
        return classes.filter(cls => cls.category === selectedCategory);
      };
      
      const getLevelChip = (level: string) => {
        switch (level) {
          case "beginner":
            return <Chip size="sm" color="success" variant="flat">Начинающий</Chip>;
          case "intermediate":
            return <Chip size="sm" color="warning" variant="flat">Средний</Chip>;
          case "advanced":
            return <Chip size="sm" color="danger" variant="flat">Продвинутый</Chip>;
          default:
            return <Chip size="sm" color="default" variant="flat">Для всех</Chip>;
        }
      };
      
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Расписание занятий</h2>
            <p className="text-default-500 mb-6">
              Ознакомьтесь с нашим расписанием групповых занятий и выберите подходящие для вас тренировки.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Chip 
              color={selectedCategory === null ? "primary" : "default"} 
              variant={selectedCategory === null ? "solid" : "flat"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            >
              Все занятия
            </Chip>
            <Chip 
              color={selectedCategory === "fitness" ? "primary" : "default"} 
              variant={selectedCategory === "fitness" ? "solid" : "flat"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory("fitness")}
            >
              Фитнес
            </Chip>
            <Chip 
              color={selectedCategory === "strength" ? "primary" : "default"} 
              variant={selectedCategory === "strength" ? "solid" : "flat"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory("strength")}
            >
              Силовые
            </Chip>
            <Chip 
              color={selectedCategory === "cardio" ? "primary" : "default"} 
              variant={selectedCategory === "cardio" ? "solid" : "flat"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory("cardio")}
            >
              Кардио
            </Chip>
            <Chip 
              color={selectedCategory === "mind" ? "primary" : "default"} 
              variant={selectedCategory === "mind" ? "solid" : "flat"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory("mind")}
            >
              Разум и тело
            </Chip>
            <Chip 
              color={selectedCategory === "dance" ? "primary" : "default"} 
              variant={selectedCategory === "dance" ? "solid" : "flat"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory("dance")}
            >
              Танцевальные
            </Chip>
          </div>
          
          <Card>
            <CardBody>
              <Tabs aria-label="Дни недели">
                {weekdays.map((day) => (
                  <Tab key={day} title={day}>
                    <div className="pt-4">
                      {filterSchedule(scheduleData[day]).length > 0 ? (
                        <div className="space-y-4">
                          {filterSchedule(scheduleData[day]).map((cls) => (
                            <div key={cls.id} className="flex flex-col md:flex-row justify-between p-3 border border-default-200 rounded-lg">
                              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                                <div className="font-semibold text-lg min-w-[80px]">{cls.time}</div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-medium">{cls.name}</h4>
                                    {getLevelChip(cls.level)}
                                  </div>
                                  <p className="text-default-500 text-sm">
                                    <span>{cls.trainer}</span>
                                    <span className="mx-2">•</span>
                                    <span>{cls.duration}</span>
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3 md:mt-0">
                                <Chip color="primary" variant="flat" size="sm">Записаться</Chip>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-default-500">
                          <Icon icon="lucide:calendar-x" className="text-4xl mb-2 mx-auto" />
                          <p>Нет занятий по выбранной категории в этот день</p>
                        </div>
                      )}
                    </div>
                  </Tab>
                ))}
              </Tabs>
            </CardBody>
          </Card>
          
          <Card className="mt-4">
            <CardHeader>
              <h3 className="text-lg font-semibold">Информация о занятиях</h3>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Уровни сложности:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="default" variant="flat">Для всех</Chip>
                    <Chip color="success" variant="flat">Начинающий</Chip>
                    <Chip color="warning" variant="flat">Средний</Chip>
                    <Chip color="danger" variant="flat">Продвинутый</Chip>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Правила посещения:</h4>
                  <ul className="list-disc list-inside space-y-1 text-default-500">
                    <li>Запись на групповые занятия открывается за 24 часа</li>
                    <li>Рекомендуется приходить за 10-15 минут до начала занятия</li>
                    <li>При опоздании более чем на 10 минут, тренер имеет право не допустить к занятию</li>
                    <li>Отмена записи возможна не позднее чем за 3 часа до начала занятия</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      );
    };