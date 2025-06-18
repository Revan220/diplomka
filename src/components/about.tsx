import React from "react";
    import { Card, CardBody, Image } from "@heroui/react";
    import { Icon } from "@iconify/react";
    
    export const About: React.FC = () => {
      return (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Біздің фитнес орталығымызға қош келдіңіз</h2>
              <p className="mb-4">
                Біздің заманауи фитнес орталығымыз денсаулық пен физикалық форманы сақтауға арналған қызметтердің толық спектрін ұсынады. 
                Біз әркім өзіне сәйкес жаттығулар мен кәсіби қолдау таба алатын жайлы кеңістік жасадық.
              </p>
              <p>
                Біздің миссиямыз - сізге достық және ынталандырушы атмосферада фитнес мақсаттарыңызға жетуге көмектесу. 
                Дайындық деңгейіңізге қарамастан, біздің тәжірибелі жаттықтырушыларымыз сіздің жолыңыздың әр кезеңінде көмектеседі.
              </p>
            </div>
            <div>
              <Image
                alt="Фитнес центр"
                src="https://img.heroui.chat/image/sports?w=600&h=400&u=1"
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Біздің артықшылықтарымыз</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon="lucide:dumbbell" 
              title="Заманауи жабдықтар" 
              description="Жаттығу залы әлемдік жетекші өндірушілердің ең жаңа жабдықтарымен жабдықталған."
            />
            <FeatureCard 
              icon="lucide:users" 
              title="Кәсіби жаттықтырушылар" 
              description="Біздің жаттықтырушыларымыздың сертификаттары мен фитнес индустриясында көп жылдық тәжірибесі бар."
            />
            <FeatureCard 
              icon="lucide:calendar" 
              title="Әртүрлі бағдарламалар" 
              description="Кез-келген дайындық деңгейіне арналған топтық және жеке бағдарламалардың кең таңдауы."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
            <div>
              <Image
                alt="Групповые тренировки"
                src="https://img.heroui.chat/image/sports?w=600&h=400&u=2"
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Біздің аймақтар мен қызметтеріміз</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>Кардио және күш аймақтары бар кең жаттығу залы</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>Топтық сабақтарға арналған залдар (йога, пилатес, аэробика)</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>Жүзуге арналған жолақтары бар бассейн</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>Сауна және қалпына келтіру аймағы</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>Салауатты сусындар мен тіскебасарлары бар фитнес-бар</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>Душ кабиналары мен шкафтары бар жайлы киім ауыстыру бөлмелері</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    };
    
    interface FeatureCardProps {
      icon: string;
      title: string;
      description: string;
    }
    
    const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
      return (
        <Card>
          <CardBody className="flex flex-col items-center text-center p-6">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Icon icon={icon} className="text-3xl text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-default-500">{description}</p>
          </CardBody>
        </Card>
      );
    };