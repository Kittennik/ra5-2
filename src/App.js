import React from 'react';
import './App.css';
import shortid from 'shortid';
import './bootstrap.min.css';
import Block from './components/Block';
import TitleBlock from './components/TitleBlock';
import List from './components/List';
import ListItem from './components/ListItem';
import Teaser from './components/Teaser';
import Course from './components/Course';
import Search from './components/Search';
import Banner from './components/Banner';
import Weather from './components/Weather';

function App() {
  const titleNews = [
    {
      href: '#0',
      text: 'Сейчас в СМИ',
    },
    {
      href: '#0',
      text: 'в Казани',
    },
    {
      href: '#0',
      text: 'Интересное',
    },
  ];

  const listNews = [
    {
      icon: 'icon',
      href: '#0',
      title: 'Стало известно о новом обращении Путина к россиянам',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Отстраненный от парада солдат объяснил разбитое стекло машины ФСО',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'В Калининграде наградили потерявшую туфлю участницу парада Победы',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Сын Хрущева умер от огнестрельного ранения в голову',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Полиция начала расследование, как Лобкову удалось дважды проголосовать',
    },
  ];

  const dataTeaser = {
    href: '#0',
    title: 'Скачайте браузер',
    text: 'с защитой от сайтов с вирусами',
  };

  const searchLink = [
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Музыка',
    'Эфир',
    'ещё',
  ];

  const dataBanner = {
    img: '/',
    href: '#0',
  };

  const dataVisited = [
    {
      href: '#0',
      title: 'Недвижимость',
      text: ' — квартиры с парковкой',
    },
    {
      href: '#0',
      title: 'Едадил',
      text: ' — экономьте на продуктах',
    },
    {
      href: '#0',
      title: 'Картинки',
      text: ' — Веселые пейзажи',
    },
  ];

  const tvProgramm = [
    {
      href: '#0',
      title: 'Чемпионат Испании. Прямая трансляция. "Бетис" - "Эспаньол"',
      text: ' Футбол',
    },
    {
      href: '#0',
      title: 'Известия. Итоговый выпуск',
      text: ' Новости',
    },
    {
      href: '#0',
      title: 'Эта женщина ко мне',
      text: ' 2011, мелодрама',
    },
  ];

  const dataStream = [
    {
      icon: 'icon',
      href: '#0',
      title: 'Мой герой',
      text: ' ТВ Центр',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Деньги',
      text: ' Дождь',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Группа Creme Soda',
      text: ' Онлайн концерт',
    },
  ];

  return (
    <>
      <Block className='top-block'>
        <Block className='news'>
          <TitleBlock items={titleNews}>
            <span className='date'>25 июня, четверг 20:17</span>
          </TitleBlock>
          <List>
            {listNews.map((item) => <ListItem key={shortid.generate()} item={item} />)}
          </List>
          <Block className='course'>
            <Course />
          </Block>
        </Block>
        <Block className='teaser'>
          <Teaser {...dataTeaser} />
        </Block>
      </Block>
      <Block className='search'>
        {searchLink.map((item) => <a key={shortid.generate()} href='#0'>{item}</a>)}
        <Search />
        <span>Найдется всё. <a href='#0'><span className='example-search'>карта распространения коронавируса</span></a></span>
      </Block>
      <Block className='banner'>
        <Banner {...dataBanner} />
      </Block>
      <Block className='columns'>
        <Block className='col-4'>
          <Block className='weather'>
          <TitleBlock items={[{
            href: '#0',
            text: 'Погода',
          }]} />
            <Weather />
          </Block>
          <Block className='visited'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Посещаемое',
            }]} />
            <List>
              {dataVisited.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
          </List>
          </Block>
        </Block>
        <Block className='col-4'>
          <Block className='maps'>
            <a href='#0'>Карта России</a>
            <p>Расписания</p>
          </Block>
          <Block className='tv'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Телепрограмма',
            }]}>
              <span className='tv-show'>Эфир</span>
            </TitleBlock>
            <List>
              {tvProgramm.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
        <Block className='col-4'>
        <Block className='stream'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Эфир',
            }]} />
            <List>
              {dataStream.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
      </Block>
    </>
  );
}

export default App;
