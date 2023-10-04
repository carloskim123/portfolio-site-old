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
    { path: "/contact", pathname: "Contact" },
    { path: "/about", pathname: "About" },
    { path: "/projects", pathname: "Projects" },

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


export const loadingQuotes = [
    {
        text: "Live with passion and purpose. 😃"
    },
    {
        text: "Dream big, achieve bigger. 🌟"
    },
    {
        text: "Love deeply, laugh daily, live fully. ❤️"
    },
    {
        text: "Kindness is a gift that keeps giving. 🌼"
    },
    {
        text: "Find joy in life's simple moments. 😊"
    },
    {
        text: "Stay positive, keep moving forward. 🚀"
    },
    {
        text: "Believe in yourself, defy limitations. 🌈"
    },
    {
        text: "Cherish moments, not things. 🕰️"
    },
    {
        text: "Life is short; embrace it fully. 🌞"
    },
    {
        text: "Smile often, worry less, live more. 😄"
    },
    {
        text: "Make each day a masterpiece. 🎨"
    },
    {
        text: "Dare to dream; dare to achieve. ✨"
    },
    {
        text: "Live with purpose; make it count. 🎯"
    },
    {
        text: "Create your own path in life. 🚶‍♂️"
    },
    {
        text: "Success starts with self-belief. 🌟"
    },
    {
        text: "Inhale confidence; exhale doubt. 🌬️"
    },
    {
        text: "Be the change you seek. 🌍"
    },
    {
        text: "Embrace your uniqueness; it's your power. 🌟"
    },
    {
        text: "Stay curious, keep learning always. 📚"
    },
    {
        text: "Inspire others through your actions. 🌟"
    },
    {
        text: "Radiate positivity wherever you go. 🌞"
    },
    {
        text: "Find strength in adversity's challenges. 💪"
    },
    {
        text: "Your journey defines your destination. 🚗"
    },
    {
        text: "Live fully, love deeply, laugh daily. 😊"
    },
    {
        text: "Success is a journey, not a destination. 🚀"
    },
    {
        text: "Make your life a work of art. 🎨"
    },
    {
        text: "Small steps lead to big achievements. 👣"
    },
    {
        text: "Dream, believe, achieve; repeat daily. 🌟"
    },
    {
        text: "Life is a gift; cherish it. 🎁"
    },
    {
        text: "Your potential is limitless; embrace it. 🚀"
    },
    {
        text: "Every moment is a fresh beginning. 🌅"
    },
    {
        text: "Dwell in possibility and limitless potential. 🌌"
    },
    {
        text: "Find magic in the ordinary moments. ✨"
    },
    {
        text: "See beauty in every day. 🌼"
    },
    {
        text: "Live with gratitude, love abundantly. ❤️"
    },
    {
        text: "Life's a journey; enjoy the ride. 🚴‍♀️"
    },
    {
        text: "Savor life's sweetest moments always. 🍭"
    },
    {
        text: "Stay true to yourself; be authentic. 🌟"
    },
    {
        text: "Create happiness with your own hands. 🌞"
    },
    {
        text: "Live intentionally; embrace the present moment. 🎁"
    },
    {
        text: "Sparkle with positivity and kindness daily. ✨"
    },
    {
        text: "Be the reason someone smiles today. 😊"
    },
    {
        text: "Find joy in the journey of life. 🌄"
    },
    {
        text: "Celebrate the beauty of every day. 🎉"
    },
    {
        text: "Do more of what makes you happy. 😃"
    },
    {
        text: "Love unconditionally; it's the purest form. ❤️"
    },
    {
        text: "Inspire others by being your authentic self. 🌟"
    },
    {
        text: "Create a life that feels good inside. 🌈"
    },
    {
        text: "Laugh at yourself; it's liberating. 😂"
    },
    {
        text: "Life is a precious gift; cherish it. 🎁"
    }
    // Add more quotes as needed
];



export  const loadNewWindow = (url) => {
    return window.open(url, "_blank");
}


