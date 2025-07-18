export interface DivisionItem {
    id: number
    title: string
    description: string
    img: string
    icon: string
    color: 'green' | 'blue' | 'pink' | 'yellow' | 'purple'
}

const group1: DivisionItem[] = [
    {
        id: 1,
        title: 'Graphic Designer',
        description: 'The Graphic Design Division is responsible for creating visual content that represents the identity. This includes designing posters, social media posts, and other. Members of this division must be creative and skilled in design software to effectively communicate through visuals.',
        img: '/icons/dg-thumbnail.png',
        icon: '/icons/dg-icon.png',
        color: 'green'
    },
    {
        id: 2,
        title: 'Photographer',
        description: 'The Photography Division captures important moments from campus events and activities through compelling photographs. Members are expected to master camera equipment and basic editing techniques to produce high-quality visual documentation that will become a need for publication.',
        img: '/icons/fg-thumbnail.png',
        icon: '/icons/fg-icon.png',
        color: 'blue'
    },
    {
        id: 3,
        title: 'Web Master',
        description: 'The Webmaster Division is in charge of managing and maintaining the organization’s website. This includes uploading content, ensuring smooth navigation, and handling technical aspects. Members should have basic knowledge of web development.',
        img: '/icons/wm-thumbnail.png',
        icon: '/icons/wm-icon.png',
        color: 'pink'
    }
]

const group2: DivisionItem[] = [
    {
        id: 1,
        title: 'Reporter',
        description: "The Reporter Division is responsible for gathering, writing, and editing news or articles related to campus. Members conduct interviews, write reports, and help maintain the credibility and journalistic integrity of the organization’s media publications.",
        img: '/icons/rp-thumbnail.png',
        icon: '/icons/rp-icon.png',
        color: 'purple'
    },
    {
        id: 2,
        title: 'Videographer',
        description: 'The Videography Division focuses on producing video content such as event documentation,  and  probably some creative projects. Members work on shooting, and editing videos to engage the audience and convey messages effectively through moving images.',
        img: '/icons/vg-thumbnail.png',
        icon: '/icons/vg-icon.png',
        color: 'yellow'
    }
]

const accordionMobile: DivisionItem[] = [
    {
        id: 1,
        title: 'Graphic Designer',
        description: 'The Graphic Design Division is responsible for creating visual content that represents the identity. This includes designing posters, social media posts, and other. Members of this division must be creative and skilled in design software to effectively communicate through visuals.',
        img: '/icons/dg-thumbnail.png',
        icon: '/icons/dg-icon.png',
        color: 'green'
    },
    {
        id: 2,
        title: 'Photographer',
        description: 'The Photography Division captures important moments from campus events and activities through compelling photographs. Members are expected to master camera equipment and basic editing techniques to produce high-quality visual documentation that will become a need for publication.',
        img: '/icons/fg-thumbnail.png',
        icon: '/icons/fg-icon.png',
        color: 'blue'
    },
    {
        id: 3,
        title: 'Web Master',
        description: 'The Webmaster Division is in charge of managing and maintaining the organization’s website. This includes uploading content, ensuring smooth navigation, and handling technical aspects. Members should have basic knowledge of web development.',
        img: '/icons/wm-thumbnail.png',
        icon: '/icons/wm-icon.png',
        color: 'pink'
    },
        {
        id: 4,
        title: 'Reporter',
        description: "The Reporter Division is responsible for gathering, writing, and editing news or articles related to campus. Members conduct interviews, write reports, and help maintain the credibility and journalistic integrity of the organization’s media publications.",
        img: '/icons/rp-thumbnail.png',
        icon: '/icons/rp-icon.png',
        color: 'purple'
    },
    {
        id: 5,
        title: 'Videographer',
        description: 'The Videography Division focuses on producing video content such as event documentation,  and  probably some creative projects. Members work on shooting, and editing videos to engage the audience and convey messages effectively through moving images.',
        img: '/icons/vg-thumbnail.png',
        icon: '/icons/vg-icon.png',
        color: 'yellow'
    }
]

export {
    group1,
    group2,
    accordionMobile
}