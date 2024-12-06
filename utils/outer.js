import { openLink } from "./methods"

const outer = {
    title1:  `Hello!`,
    title2: 'I am Anusha Tomar,',
    decrypTexts: [
        'A Full Stack Developer',
        'A Technical Writer',
        'I build things for the web',
        'A DevOps enthusiast',
        'A Traveler',
    ],
    desciption: `A dedicated and disciplined Full Stack engineer with a passion for creating impactful solutions for the internet. I also have a strong interest in DevOps and computer networking, and I am currently exploring these areas further.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:anushatomar6@gmail.com?subject=Hello')
    }
}

export default outer
