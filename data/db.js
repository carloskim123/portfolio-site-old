// @ts-ignore
import tiktok from './icons/tiktok.svg';
// @ts-ignore
import instagram from './icons/instagram.svg';
// @ts-ignore
import twitter from './icons/twitter.svg';
// @ts-ignore
import github from './icons/github.svg';
// @ts-ignore
import waving_hand_url from './icons/waving_hand.svg';

/**
 * URL for the profile picture.
 * @type {string}
 */
export const profile_pic = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

/**
 * URL for the waving hand icon.
 * @type {string}
 */
export const waving_hand = waving_hand_url;

/**
 * Email address for the developer.
 * @type {string}
 */
export const dev_email = "kimaccess123@gmail.com";

/**
 * URL for the developer's portfolio.
 * @type {string}
 */
export const portfolio_url = "https://kimk.vercel.app/";

/**
 * Array of social media links.
 * @type {Array<{ url: string, title: string, icon: string }>}
 */
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
];

/**
 * Class representing direct links.
 */
class DirectLinks {
    /**
     * URL for the Github profile.
     * @type {string}
     */
    github = "https://github.com/carloskim123";

    /**
     * URL for the Twitter profile.
     * @type {string}
     */
    twitter = "https://twitter.com/KimKimkirui7";

    /**
     * URL for the Tiktok profile.
     * @type {string}
     */
    tiktok = "https://www.tiktok.com/@carloskim456";

    /**
     * URL for the Instagram profile.
     * @type {string}
     */
    instagram = "https://www.instagram.com/carloskirui541/";
}

/**
 * Instance of the DirectLinks class.
 * @type {DirectLinks}
 */
export const dr = new DirectLinks();

/**
 * Array of page links.
 * @type {Array<{ url: string, pathname: string }>}
 */
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
];

/**
 * Array of routes.
 * @type {Array<{ path: string, pathname: string }>}
 */
export const routes = [
    { path: "/", pathname: "Home" },
    { path: "/projects", pathname: "Projects" },
    { path: "/about", pathname: "About" },
    { path: "/contact", pathname: "Contact" },
];

/**
 * Array of accordion content.
 * @type {Array<{ title: string, content: string }>}
 */
export const accordionContent = [
    {
        title: "Why I chose to program over everything else!",
        content: "I chose to program because it combines my love of problem-solving and creativity. There's something so satisfying about taking a complex problem and breaking it down into manageable pieces. And with programming, the possibilities are endless - I can create anything I can imagine."
    },
    {
        title: "Did I make the right decision?",
        content: "I think that programming is an excellent choice for many reasons. First and foremost, it's a field that's constantly evolving and growing, so there's always something new to learn. It's also a field that requires a lot of creativity and problem-solving skills, which are great skills to have in any profession. And of course, it can be incredibly rewarding to see your code come to life and solve real-world problems."
    },
    {
        title: "My favorite programming languages",
        content: "My favorite programming languages are Java, Golang, Javascript, and Python. I like JavaScript because it's a versatile language that can be used for both front-end and back-end development. I also like Python because it's a relatively easy language to learn and use, and it has a large community of developers who create and maintain a wide range of libraries and tools."
    },
    {
        title: "The biggest challenge I've faced as a programmer",
        content: "The biggest challenge I've faced as a programmer is debugging code. When code doesn't work as expected, it can be difficult to track down and fix the bugs. This can be a frustrating process, especially for complex codebases. However, over time I've learned some tips for debugging code more effectively, such as using good coding practices, using a debugger, and asking for help from other programmers."
    }
];

/**
 * Array of colors.
 * @type {string[]}
 */
export const colorsArray = ["#fefae0", "#e9ecef", "#edf6f9", "#fdffb6", "#f4f1de", "#f0f3bd"];


export const bannerImage = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG8lMjBzb21ldGhpbmclMjBncmVhdHxlbnwwfHwwfHx8MA%3D%3D"


export const aboutMes = [
    {
        param: "Greetings! 👋🏾 I'm Carlos Kirui, an enthusiastic problem solver in the world of software development. With a passion for coding and a hunger for challenges, I'm ready to create solutions that make a difference. 💻🚀",
    },
    {
        param: "Hey there! 👋🏾 Carlos Kirui here, a web development maestro on a mission to turn ideas into digital reality. With a keen eye for detail and a love for clean code, I'm set to make the web a better place. 🌐✨",
    },
    {
        param: "Salut! 👋🏾 I'm Carlos Kirui, a tech aficionado and coding virtuoso. Armed with a love for innovation and a knack for efficiency, I'm geared up to elevate the web development game to new heights. 💡💻",
    },
    {
        param: "Hi, I'm Carlos Kirui! 👋🏾 A dedicated developer with a penchant for elegant solutions and a love for learning. Join me on this journey of continuous improvement and let's create something extraordinary together. 🌟🚀",
    },
    {
        param: "Hola! 👋🏾 Carlos Kirui checking in—a passionate web developer with an insatiable curiosity for emerging technologies. Let's embark on a coding adventure and build digital wonders that leave a lasting impact. 💻✨",
    }
];
