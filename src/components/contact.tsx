import React from "react";
    import { 
      Card, 
      CardBody,
      Input,
      Textarea,
      Button,
      Select,
      SelectItem
    } from "@heroui/react";
    import { Icon } from "@iconify/react";
    
    export const Contact: React.FC = () => {
      return (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Байланыс ақпараты</h2>
            <p className="text-default-500">
              Бізбен кез-келген ыңғайлы тәсілмен байланысыңыз немесе өтінім қалдырыңыз, біз сізге қоңырау шаламыз.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardBody className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <Icon icon="lucide:map-pin" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Мекенжай</h3>
                      <p className="text-default-500">Абай даңғылы, 123, Алматы</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <Icon icon="lucide:phone" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-default-500">+7 (727) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <Icon icon="lucide:mail" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-default-500">info@fitness-center.kz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <Icon icon="lucide:clock" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Жұмыс уақыты</h3>
                      <p className="text-default-500">Дс-Жм: 6:00 - 23:00</p>
                      <p className="text-default-500">Сб-Жк: 8:00 - 22:00</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="font-semibold mb-3">Мы в социальных сетях</h3>
                  <div className="flex space-x-4">
                    <Button isIconOnly variant="flat" aria-label="Facebook">
                      <Icon icon="logos:facebook" className="text-xl" />
                    </Button>
                    <Button isIconOnly variant="flat" aria-label="Instagram">
                      <Icon icon="logos:instagram-icon" className="text-xl" />
                    </Button>
                    <Button isIconOnly variant="flat" aria-label="Telegram">
                      <Icon icon="logos:telegram" className="text-xl" />
                    </Button>
                    <Button isIconOnly variant="flat" aria-label="VK">
                      <Icon icon="logos:vk" className="text-xl" />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <Card>
              <CardBody>
                <h3 className="font-semibold text-lg mb-4">Өтінім қалдыру</h3>
                <form className="space-y-4">
                  <Input
                    label="Аты"
                    placeholder="Атыңызды енгізіңіз"
                    variant="bordered"
                  />
                  <Input
                    label="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    variant="bordered"
                  />
                  <Input
                    label="Email"
                    placeholder="example@email.com"
                    type="email"
                    variant="bordered"
                  />
                  <Select
                    label="Өтініш тақырыбы"
                    placeholder="Тақырыпты таңдаңыз"
                    variant="bordered"
                  >
                    <SelectItem key="membership" value="membership">Абонементтер</SelectItem>
                    <SelectItem key="training" value="training">Жаттығулар</SelectItem>
                    <SelectItem key="schedule" value="schedule">Кесте</SelectItem>
                    <SelectItem key="other" value="other">Басқа</SelectItem>
                  </Select>
                  <Textarea
                    label="Хабарлама"
                    placeholder="Хабарламаңызды енгізіңіз"
                    variant="bordered"
                    minRows={4}
                  />
                  <Button color="primary" fullWidth>
                    Өтінім жіберу
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
          
          <Card>
            <CardBody className="p-0">
              <div className="w-full h-[400px] bg-default-100 flex items-center justify-center">
                <div className="text-center">
                  <Icon icon="lucide:map" className="text-4xl mb-2" />
                  <p>Карта с расположением фитнес-центра</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      );
    };