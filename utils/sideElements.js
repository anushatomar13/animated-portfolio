import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/anushatomar13',
        'instagram': 'https://www.instagram.com/anushaaaaa21/',
        'linkedin': 'https://www.linkedin.com/in/anushatomar/',
        'twitter': 'https://x.com/lowkeydev21?t=HGxzq9-XmSmVDp-stWCDpw&s=09',
        
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'anushatomar6@gmail.com',
        onClick: () => openLink('mailto:anushatomar6@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements