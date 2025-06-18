import React from "react";
import { Card, CardBody, CardHeader, Divider, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Янв", clients: 40, revenue: 24000 },
  { name: "Фев", clients: 45, revenue: 26000 },
  { name: "Мар", clients: 55, revenue: 32000 },
  { name: "Апр", clients: 60, revenue: 38000 },
  { name: "Май", clients: 65, revenue: 42000 },
  { name: "Июн", clients: 80, revenue: 50000 },
  { name: "Июл", clients: 90, revenue: 56000 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard 
          title="Активные клиенты" 
          value="248" 
          icon="lucide:users" 
          trend="+12%" 
          trendUp={true} 
        />
        <StatCard 
          title="Активные абонементы" 
          value="186" 
          icon="lucide:credit-card" 
          trend="+8%" 
          trendUp={true} 
        />
        <StatCard 
          title="Тренеров" 
          value="15" 
          icon="lucide:dumbbell" 
          trend="0%" 
          trendUp={false} 
        />
        <StatCard 
          title="Доход за месяц" 
          value="₽ 560,000" 
          icon="lucide:wallet" 
          trend="+15%" 
          trendUp={true} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex justify-between">
            <h3 className="text-lg font-semibold">Динамика клиентов и доходов</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="clients"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                    name="Клиенты"
                  />
                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.3}
                    name="Доход (₽)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Популярные абонементы</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="space-y-4">
              <MembershipItem 
                name="Годовой безлимит" 
                count={86} 
                percentage={46} 
              />
              <MembershipItem 
                name="Месячный безлимит" 
                count={52} 
                percentage={28} 
              />
              <MembershipItem 
                name="Дневной (6 мес.)" 
                count={32} 
                percentage={17} 
              />
              <MembershipItem 
                name="Выходного дня" 
                count={16} 
                percentage={9} 
              />
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Ближайшие записи к тренерам</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="space-y-4">
              <AppointmentItem 
                client="Анна Смирнова" 
                trainer="Иван Петров" 
                service="Персональная тренировка" 
                time="Сегодня, 14:00" 
              />
              <AppointmentItem 
                client="Сергей Иванов" 
                trainer="Мария Козлова" 
                service="Составление плана питания" 
                time="Сегодня, 16:30" 
              />
              <AppointmentItem 
                client="Екатерина Новикова" 
                trainer="Алексей Соколов" 
                service="Персональная тренировка" 
                time="Завтра, 10:00" 
              />
              <AppointmentItem 
                client="Дмитрий Кузнецов" 
                trainer="Ольга Морозова" 
                service="Функциональный тренинг" 
                time="Завтра, 12:30" 
              />
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Истекающие абонементы</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="space-y-4">
              <ExpiringMembershipItem 
                client="Павел Волков" 
                type="Месячный безлимит" 
                expiresIn="2 дня" 
              />
              <ExpiringMembershipItem 
                client="Наталья Соколова" 
                type="Годовой безлимит" 
                expiresIn="5 дней" 
              />
              <ExpiringMembershipItem 
                client="Андрей Морозов" 
                type="Дневной (6 мес.)" 
                expiresIn="7 дней" 
              />
              <ExpiringMembershipItem 
                client="Ирина Лебедева" 
                type="Месячный безлимит" 
                expiresIn="8 дней" 
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  trend: string;
  trendUp: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, trendUp }) => {
  return (
    <Card>
      <CardBody>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-default-500">{title}</p>
            <h4 className="text-2xl font-bold mt-1">{value}</h4>
            <div className="flex items-center mt-2">
              <Icon 
                icon={trendUp ? "lucide:trending-up" : "lucide:trending-down"} 
                className={`mr-1 ${trendUp ? "text-success" : "text-danger"}`} 
              />
              <span className={`text-sm ${trendUp ? "text-success" : "text-danger"}`}>
                {trend}
              </span>
            </div>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon icon={icon} className="text-2xl text-primary" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

interface MembershipItemProps {
  name: string;
  count: number;
  percentage: number;
}

const MembershipItem: React.FC<MembershipItemProps> = ({ name, count, percentage }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span>{name}</span>
        <span className="text-default-500">{count}</span>
      </div>
      <div className="w-full bg-default-100 rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

interface AppointmentItemProps {
  client: string;
  trainer: string;
  service: string;
  time: string;
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ client, trainer, service, time }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{client}</p>
        <p className="text-default-500 text-sm">{trainer} • {service}</p>
      </div>
      <Chip color="primary" variant="flat" size="sm">{time}</Chip>
    </div>
  );
};

interface ExpiringMembershipItemProps {
  client: string;
  type: string;
  expiresIn: string;
}

const ExpiringMembershipItem: React.FC<ExpiringMembershipItemProps> = ({ client, type, expiresIn }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{client}</p>
        <p className="text-default-500 text-sm">{type}</p>
      </div>
      <Chip color="warning" variant="flat" size="sm">Истекает через {expiresIn}</Chip>
    </div>
  );
};