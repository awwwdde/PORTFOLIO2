import React, { useState } from 'react';
import './about.scss';
import logo from '../../graphics/images/logo.svg'; // Импортируем логотип
import SphereBackground from '../../components/bg/SphereBackground';
import Ablock from '../../components/about block/ablock';
import Cblock from '../../components/contact block/cblock';
import PBlock from '../../components/portfolio block/pblock';
const About = () => {
  // Массивы с текстом и названиями меню
  const texts = [
    <Ablock/>,
    <PBlock/>,
    <Cblock/>
  ];

  const menuItems = [
    "ABOUT",
    "PORTFOLIO",
    "CONTACT"
  ];

  // Состояние для текущего текста
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Функция для изменения текста
  const handleMenuClick = (index) => {
    setCurrentTextIndex(index);
  };

  return (
    <div className="about">
      <div className="about-container">
        <SphereBackground />
        <div className="about-container__block">
          {texts[currentTextIndex]} {/* Отображаем текущий текст */}
        </div>
      </div>
      <div className="about-menu">
        <img src={logo} alt="Логотип" className="about-menu__logo" /> {/* Логотип */}
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className="about-menu__item" 
            onClick={() => handleMenuClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;