import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, video, video2, video3, video4, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import LobbyScreen from "../screens/Lobby";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "https://www.helpguide.org/find-help.htm", label: "Helpline" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];


export const products = [
    {
        imgURL: video,
        name: "One on One Video Call",
        link: "http://localhost:3000/lobby",
    },
    {
        imgURL: video2,
        name: "Vent It Out",
        link: "http://localhost:3000/vent",
    },
    {
        imgURL: video3,
        name: "Educate Yourself",
        link: "http://localhost:3000/education",
    },
    {
        imgURL: video4,
        name: "Seek Help",
        link: "https://www.helpguide.org/find-help.htm",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "Empathear has been a lifeline for me, offering a supportive community and valuable resources that have truly helped me navigate my mental health journey."
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "Thanks to Empathear, I've found a sense of belonging and understanding that I never thought possible. This platform has given me the courage to seek help and embrace self-care like never before."
    }
];


export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "One on one video call", link: "/" },
            { name: "Discord Peer Groups", link: "/" },
            { name: "Music Therapy", link: "/" },
            { name: "HelpLine Numbers", link: "/" },
            { name: "Inspiring Stories", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@empathear.com", link: "mailto:customer@empathear.com" },
            { name: "+1234567890", link: "tel:+1234567890" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
