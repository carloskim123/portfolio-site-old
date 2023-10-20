// imports
import tiktok from './icons/tiktok.svg'
import instagram from './icons/instagram.svg'
import twitter from './icons/twitter.svg'
import github from './icons/github.svg'
import waving_hand_url from './icons/waving_hand.svg'





// exports
export const profile_pic = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
export const waving_hand = waving_hand_url;
export const dev_email = "kimaccess123@gmail.com"
export const portfolio_url = "https://kimk.vercel.app/"

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



class DirectLinks {
    constructor() {
        this.github = "https://github.com/carloskim123"
        this.twitter = "https://twitter.com/KimKimkirui7"
        this.tiktok = "https://www.tiktok.com/@carloskim456"
        this.instagram = "https://www.instagram.com/carloskirui541/"

    }
}

export const dr = new DirectLinks();

export const pg_lk = [
    {
        url: portfolio_url,
        pathname: "Carlos Kirui"
    },
    {
        url: dr.github,
        pathname: "Github"
    },
    {
        url: dr.twitter,
        pathname: "Twitter"
    }, {
        url: dr.tiktok,
        pathname: "Tiktok"
    }, {
        url: dr.instagram,
        pathname: "Instagram"
    },

]
export const routes = [
    { path: "/", pathname: "Home" },
    { path: "/projects", pathname: "Projects" },
    { path: "/about", pathname: "About" },
    { path: "/contact", pathname: "Contact" },


]

export const accordionContent = [
    {
        title: "Why I chose to program over everything else!",
        content: "I chose to program because it combines my love of problem- solving and creativity.There's something so satisfying about taking a complex problem and breaking it down into manageable pieces. And with programming, the possibilities are endless - I can create anything I can imagine."
    },
    {
        title: "Did I make the right decision?",
        content: "I think that programming is an excellent choice for many reasons.First and foremost, it's a field that's constantly evolving and growing, so there's always something new to learn. It's also a field that requires a lot of creativity and problem- solving skills, which are great skills to have in any profession.And of course, it can be incredibly rewarding to see your code come to life and solve real - world problems."
    },
    {
        title: "My favorite programming languages",
        content: "My favorite programming languages are Java, Golang, Javascript, and Python. I like JavaScript because it's a versatile language that can be used for both front-end and back-end development. I also like Python because it's a relatively easy language to learn and use, and it has a large community of developers who create and maintain a wide range of libraries and tools."
    },
    {
        title: "The biggest challenge I've faced as a programmer",
        content: "The biggest challenge I've faced as a programmer is debugging code. When code doesn't work as expected, it can be difficult to track down and fix the bugs. This can be a frustrating process, especially for complex codebases. However, over time I've learned some tips for debugging code more effectively, such as using good coding practices, using a debugger, and asking for help from other programmers."
    }

]

export const colorsArray = ["#fefae0", "#e9ecef", "#edf6f9", "#fdffb6", "#f4f1de", "#f0f3bd"];
export const newImages = [
    {
        param: "https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        param: "https://images.pexels.com/photos/12174293/pexels-photo-12174293.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        param: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        param: "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]

