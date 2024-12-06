import { openLink } from "./methods"

const contact = {
    label: `Get in touch`,
    heading: `Let’s Work Together`,
    description: `I’m open for new opportunities – especially to work with remote startups. Whether you have an opportunity, a question, or just want to say hi, I’ll try my best to get back to you!.`,
    button: {
        label: 'Say Hello',
        onClick: () => openLink('mailto:anushatomar6@gmail.com?subject=Hello')
    },
    designAndBuiltBy: '',
    handleBuiltByClick: () => openLink('')
}

export default contact
