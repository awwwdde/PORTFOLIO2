import React, { useState } from 'react';
import './about.scss';
import logo from '../../graphics/images/logo.svg'; // Импортируем логотип
import SphereBackground from '../../components/bg/SphereBackground';

const About = () => {
  // Массивы с текстом и названиями меню
  const texts = [
    "Pellentesque iaculis eleifend nisi, at ullamcorper ante ultrices eu. Aliquam felis nibh, lacinia laoreet leo pharetra, gravida dapibus ligula. Nulla eu est id lectus pharetra congue et et magna. Donec hendrerit tellus ac nibh pellentesque maximus. Sed lobortis sodales orci nec maximus. Quisque non quam tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus facilisis libero elit, non ultricies nulla molestie et. Nunc nibh ipsum, pretium et molestie pharetra, rutrum quis nisi. Cras ornare dictum nibh non imperdiet. Proin lobortis mi nec nibh iaculis iaculis. Vestibulum at congue mi. Sed ut tellus convallis, condimentum leo ultrices, tristique nibh. Suspendisse sed dui lacus.",
    "Это второй текст.",
    "Это третий текст."
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