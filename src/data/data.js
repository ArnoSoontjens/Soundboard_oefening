import pigSound from "../assets/sounds/pig.mp3";
import lionSound from "../assets/sounds/lion.mp3";
import lion from "../assets/images/lion.jpg"
import beaver from "../assets/images/beaver.jpg"
import chicken from "../assets/images/chicken.jpg"
import cow from "../assets/images/cow.jpg"
import donkey from "../assets/images/donkey.jpg"
import pig from "../assets/images/pig.jpg"
import zebra from "../assets/images/zebra.jpg"

const data = [{
    name: "Dieren",
    items: [{
        name: "Varken",
        img: pig,
        sound: pigSound,
    },
    {
        name: "Leeuw",
        img: lion,
        //img: "https://hetafdrukhuis.nl/wp-content/uploads/Leeuw-2.jpg",
        sound: lionSound,
    },
    {
        name: "Bever",
        img: beaver,
        sound: pigSound,
    },
    {
        name: "Kip",
        img: chicken,
        sound: lionSound,
    },
    {
        name: "Ezel",
        img: donkey,
        sound: pigSound,
    },
    {
        name: "Koe",
        img: cow,
        sound: lionSound,
    },
    {
        name: "Zebra",
        img: zebra,
        sound: lionSound,
    }],
}, {
    name: "soundboard2",
    items: [{
        name: "Varken2",
        img: pig,
        sound: pigSound,
    },
    {
        name: "Leeuw2",
        img: lion,
        //img: "https://hetafdrukhuis.nl/wp-content/uploads/Leeuw-2.jpg",
        sound: lionSound,
    },
    {
        name: "Bever2",
        img: beaver,
        sound: pigSound,
    },
    {
        name: "Kip2",
        img: chicken,
        sound: lionSound,
    },
    {
        name: "Ezel2",
        img: donkey,
        sound: pigSound,
    },
    {
        name: "Koe2",
        img: cow,
        sound: lionSound,
    },
    {
        name: "Zebra2",
        img: zebra,
        sound: lionSound,
    }]
}];

export default data;