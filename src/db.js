import { v4 as uuidv4 } from 'uuid';
import Card1 from './img/card1.jpg';
import Card2 from './img/card2.jpg';
import Card3 from './img/card3.jpg';

let data = [
    {
        src: { Card1 },
        title: "Solimo Coffee Beans 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        country: "Brazil",
        price: "10.73",
        id: uuidv4(),
        favorites: true
    },
    {
        src: { Card2 },
        title: "Presto Coffee Beans 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        country: "Kenia",
        price: "15.99",
        id: uuidv4(),
        favorites: true
    },
    {
        src: { Card3 },
        title: "Chock Full o' Nuts 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        country: "Columbia",
        price: "6.99",
        id: uuidv4(),
        favorites: true
    },
    {
        src: { Card3 },
        title: "AROMISTICO Coffee 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        country: "Brazil",
        price: "20.99",
        id: uuidv4(),
        favorites: false
    },
    {
        src: { Card2 },
        title: "Seattle's Best 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        country: "Kenia",
        price: "15.99",
        id: uuidv4(),
        favorites: false
    },
    {
        src: { Card1 },
        title: "Whole Foods 365 Everyday Value 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        country: "Columbia",
        price: "30.99",
        id: uuidv4(),
        favorites: false
    },

];

export default data;