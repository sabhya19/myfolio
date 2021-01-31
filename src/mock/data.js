import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sabhya Sood', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sabhya Sood',
  subtitle: 'I am a Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_temp.jpg',
  paragraphOne: 'I am a software developer, passionate about working on innovative solutions aided with machine learning and artificial intelligence.',
  paragraphTwo: 'Studying Computer Science Engineering at NIT Hamirpur, I am an avid learner, diligently looking for new ideas and methods to transform technologies and norms for the better. I have experience in building and optimizing tools with deep neural networks. I am proficient in data structures, algorithms, and database management systems.',
  paragraphThree: 'I believe learning, innovation, and failures go hand in hand. Great ideas and teamwork bridge the gap between creativity and innovation.',
  resume: 'https://drive.google.com/file/d/1RAIGwUUB-ZG5z15v2M6ZZKDFjCqlxNfG/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cipher_forge.png',
    title: 'Cipher Forge',
    info: 'Cipher Forge is structured on a unique algorithm that uses graph data structures to generate ciphertext from plain text containing capital and minuscule letters/words, and special symbols, separated by spaces.A reverse algorithm is employed to decode the cipher from files. The algorithms show commendable efficiency even on large data, with extended functionality to interact with file systems.',
    info2: '',
    url: 'https://github.com/sabhya19/Cipher-Forge/releases/tag/v1.0',
    repo: 'https://github.com/sabhya19/Cipher-Forge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid_salvager.png',
    title: 'Covid Salvager',
    info: 'A tool based on Convolutional Neural Networks and Computer Vision that aims to reduce the spread of Covid-19 virus. It recognizes and alerts the absence/improper use of face masks in public places, and thus aid control and monitoring of the spread of the deadly virus by the authorities.',
    info2: '',
    url: 'https://www.kaggle.com/sabhyasood/covid-salvager',
    repo: 'https://www.kaggle.com/sabhyasood/covid-salvager', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'digit_rec.png',
    title: 'Handwritten Digit Recognition',
    info: 'A Machine Learning tool built from scratch using just NumPy and a few other basic libraries, employed to recognize hand-written digits.  ',
    info2: '',
    url: 'https://colab.research.google.com/drive/1ycYBAj3PWLvicIi0GXsc1SaafQc628el?usp=sharing',
    repo: 'https://colab.research.google.com/drive/1ycYBAj3PWLvicIi0GXsc1SaafQc628el?usp=sharing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sabhyasood3@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    //{
      //id: nanoid(),
      //name: 'twitter',
      //url: '',
    //},
   // {
     // id: nanoid(),
      //name: 'gmail',
      //url: '',
    //},
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sabhya19/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sabhya19',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
