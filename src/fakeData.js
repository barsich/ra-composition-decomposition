import { v4 as uuidv4 } from 'uuid';
// news icons
import duck from './images/duck.png';
import pig from './images/pig.png';
import redpanda from './images/redpanda.png';
import sheep from './images/sheep.png';
import sloth from './images/sloth.png';
import ourService from './images/our-service.jpg';
import logo from './images/logo.png';
import play from './images/play.png';

export const news = [
  {
    id: uuidv4(),
    icon: duck,
    text: 'Пожилой байкер за два часа поджог более тридцати мусорных урн',
    link: '#',
  },
  {
    id: uuidv4(),
    icon: pig,
    text: 'Наследник монгольских королей оказался самозванцем',
    link: '#',
  },
  {
    id: uuidv4(),
    icon: redpanda,
    text: 'Гомосексуалистам запретили работать на тяжёлых и опасных работах',
    link: '#',
  },
  {
    id: uuidv4(),
    icon: sheep,
    text: 'Программисты научили робота-хирурга шутить',
    link: '#',
  },
  {
    id: uuidv4(),
    icon: sloth,
    text: 'Плов из пенопласта спас жизнь члену банды упырей',
    link: '#',
  },
];

export const newTypes = ['Сейчас в СМИ', 'в Екатеринбурге', 'Интересное'];

export const currency = [
  { type: 'USD', value: '71.86', change: '+0.01' },
  { type: 'EUR', value: '82.92', change: '-0.10' },
  { type: 'НЕФТЬ', value: '83.39', change: '-0.28%' },
];

export const ourServices = [
  { image: ourService, title: 'Швейные делишки', description: 'Смотрите на BigApp и запоминайте', link: '#' },
  // ...
];

export const searchTypes = [
  'Маркет',
  'Видео',
  'Картинки',
  'Новости',
  'Карты',
  'Переводчик',
  'Музыка',
  'Программа',
  'Авто.ру',
  'ещё',
];

export const logoImage = logo;

export const searchExamples = [
  'схема метро',
  'чем заняться',
  'концерт онлайн',
  'купить чемодан',
  'steam',
  'детская секция',
  'вакансии',
  'научиться рисовать',
  'как правильно отжиматься',
  'как не сойти с ума',
];

export const weather = {
  morning: '+17',
  afternoon: '+20',
  evening: '+16',
  unit: '\u2103',
  icon: duck,
};

export const services = [
  'Маркет — смартфоны Xiaomi',
  'Авто.ру — пробег до 130 000 км',
  'Видео — мультики для малышей',
];

export const map = {
  location: 'Карта Екатеринбурга',
  schedule: 'Расписания',
};

export const tv = [
  {
    time: '19:30',
    name: '"Мосгаз". "Операция "Сатана" (7-я и 8-я серии)',
    channel: 'Первый',
  },
  {
    time: '19:30',
    name: 'Мужская работа-2',
    channel: 'ТВ Центр',
  },
  {
    time: '19:30',
    name: 'Пятницкий',
    channel: 'НТВ',
  },
];

export const broadcasts = [
  {
    name: 'Терминатор: Тёмные судьбы',
    type: 'премьера',
  },
  {
    name: 'Семейка Аддамс',
    type: 'премьера',
  },
  {
    name: 'Малефисента: Владычица тьмы',
    type: 'фэнтези',
  },
];

export const playIcon = play;
