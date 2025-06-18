import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content1 border-t border-divider py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Фитнес Центр</h3>
            <p className="text-default-500">
              Современный фитнес-центр с полным спектром услуг для поддержания здоровья и физической формы.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="flex items-center mb-2">
              <Icon icon="lucide:map-pin" className="mr-2 text-default-500" />
              <span className="text-default-500">ул. Спортивная, 123</span>
            </div>
            <div className="flex items-center mb-2">
              <Icon icon="lucide:phone" className="mr-2 text-default-500" />
              <span className="text-default-500">+7 (123) 456-78-90</span>
            </div>
            <div className="flex items-center">
              <Icon icon="lucide:mail" className="mr-2 text-default-500" />
              <span className="text-default-500">info@fitness-center.ru</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Часы работы</h3>
            <p className="text-default-500">Пн-Пт: 6:00 - 23:00</p>
            <p className="text-default-500">Сб-Вс: 8:00 - 22:00</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Icon icon="logos:facebook" className="text-2xl" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="logos:instagram-icon" className="text-2xl" />
              </Link>
              <Link href="#" aria-label="Telegram">
                <Icon icon="logos:telegram" className="text-2xl" />
              </Link>
              <Link href="#" aria-label="VK">
                <Icon icon="logos:vk" className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-divider text-center text-default-500">
          <p>© {new Date().getFullYear()} Фитнес Центр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};