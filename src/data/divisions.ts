export interface DivisionItem {
    id: number
    title: string
    description: string
    img: string
    icon: string
    color: 'green' | 'blue' | 'pink' | 'yellow' | 'purple' | 'red' | 'orange' | 'cyan'
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
        color: 'cyan'
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
        title: 'Copywriter',
        description: 'The Copywriter Division focuses on crafting written content that informs, persuades, or entertains the audience. Members work on creating compelling copy for social media posts, scripts, promotional materials, and other written formats to effectively deliver the intended message.',
        img: '/icons/cw-thumbnail.png',
        icon: '/icons/cw-icon.png',
        color: 'red'
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
    },
    {
        id: 3,
        title: 'Illustrator',
        description: 'The Illustrator Division is responsible for creating visual illustrations that complement and enhance various content needs. Members produce original artwork that help communicate ideas in a visually engaging and creative way.',
        img: '/icons/il-thumbnail.png',
        icon: '/icons/il-icon.png',
        color: 'blue'
    },
    {
        id: 4,
        title: 'Content Planner',
        description: 'The Content Planner Division is in charge of ideating and organizing content strategies. Members develop content calendars, brainstorm campaign ideas, and coordinate with other divisions to ensure cohesive and timely content delivery that aligns with overall communication goals.',
        img: '/icons/pk-thumbnail.png',
        icon: '/icons/pk-icon.png',
        color: 'orange'
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
        color: 'cyan'
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
    },
    {
        id: 6,
        title: 'Copywriter',
        description: 'The Videography Division focuses on producing video content such as event documentation,  and  probably some creative projects. Members work on shooting, and editing videos to engage the audience and convey messages effectively through moving images.',
        img: '/icons/cw-thumbnail.png',
        icon: '/icons/cw-icon.png',
        color: 'red'
    },
    {
        id: 7,
        title: 'Illustrator',
        description: 'The Videography Division focuses on producing video content such as event documentation,  and  probably some creative projects. Members work on shooting, and editing videos to engage the audience and convey messages effectively through moving images.',
        img: '/icons/il-thumbnail.png',
        icon: '/icons/il-icon.png',
        color: 'blue'
    },
    {
        id: 8,
        title: 'Content Planner',
        description: 'The Videography Division focuses on producing video content such as event documentation,  and  probably some creative projects. Members work on shooting, and editing videos to engage the audience and convey messages effectively through moving images.',
        img: '/icons/pk-thumbnail.png',
        icon: '/icons/pk-icon.png',
        color: 'orange'
    }
]

export {
    group1,
    group2,
    accordionMobile
}