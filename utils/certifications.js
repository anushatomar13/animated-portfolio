import { openLink } from "./methods"

const certifications = {
    heading:  `My Technical Blogs`,
    list: [
        {
            size: 1,
            title: <a href="https://difference-between-cjs-and-esm.hashnode.dev/javascript-modules-explained-commonjs-vs-esm-a-beginners-guide" target="_blank" rel="noopener noreferrer">JavaScript Modules Explained: CommonJS vs ESM</a>,
            platform: <a href="https://difference-between-cjs-and-esm.hashnode.dev/javascript-modules-explained-commonjs-vs-esm-a-beginners-guide" target="_blank" rel="noopener noreferrer">Read more</a>,
            link: '',
            date: '',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: <a href="https://difference-between-cjs-and-esm.hashnode.dev/cookies-and-sessions-everything-you-need-to-know">Cookies and Sessions: Everything You Need to Know!</a>,
            platform: <a href="https://difference-between-cjs-and-esm.hashnode.dev/cookies-and-sessions-everything-you-need-to-know" target="_blank" rel="noopener noreferrer">Read more</a>,
            link: '',
            date: '',
            logo: '/assets/docker.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: <a href="https://difference-between-cjs-and-esm.hashnode.dev/promises-asyncawait-and-other-ways-to-lose-your-mind">Promises, Async/Await, and Other Ways to Lose Your Mind</a>,
            platform: <a href="https://difference-between-cjs-and-esm.hashnode.dev/promises-asyncawait-and-other-ways-to-lose-your-mind" target="_blank" rel="noopener noreferrer">Read more</a>,
            link: '',
            date: '',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        }
    ],
    handleIconClick: openLink
}

export default certifications;
