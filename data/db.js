export const profile_pic = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
import tiktok from './icons/tiktok.svg'
import instagram from './icons/instagram.svg'
import twitter from './icons/twitter.svg'
import github from './icons/github.svg'
import waving_hand_url from './icons/waving_hand.svg'
export const waving_hand = waving_hand_url;

export const links = [
    {
        url: "https://github.com/carloskim123",
        title: "Github",
        icon: github

    },
    {
        url: "https://twitter.com/KimKimkirui7",
        title: "Twitter",
        icon: twitter
    },
    {
        url: "https://www.instagram.com/carloskirui541/",
        title: "Instagram",
        icon: instagram
    },
    {
        url: "https://www.tiktok.com/@carloskim456",
        title: "Tiktok",
        icon: tiktok
    },
]

export const routes = [
    { path: "/", pathname: "Home" },
    { path: "/contact", pathname: "Contact" },
    { path: "/about", pathname: "About" },
    { path: "/projects", pathname: "Projects" },

]