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
        description: 'The Graphic Design Division is responsible for creating visual content that reflects and strengthens the identity of the student activity unit. This includes designing posters, social media posts, and various other visual materials. Members are expected to be creative and proficient in design software to communicate messages effectively through strong and cohesive visuals.',
        img: '/icons/dg-thumbnail.png',
        icon: '/icons/dg-icon.png',
        color: 'green'
    },
    {
        id: 2,
        title: 'Photographer',
        description: 'The Photography Division is responsible for capturing meaningful moments from events and activities held by the student activity unit through compelling visual storytelling. Members are expected to be proficient with camera equipment and possess basic photo editing skills to produce high-quality visual documentation. Their work serves as a vital resource for the publication and archival needs of the unit.',
        img: '/icons/fg-thumbnail.png',
        icon: '/icons/fg-icon.png',
        color: 'cyan'
    },
    {
        id: 3,
        title: 'Webmaster',
        description: 'The Webmaster Division is responsible for overseeing and maintaining the organization’s official website. This includes curating and uploading content, optimizing user navigation, and managing technical functionalities. Prospective members are expected to possess a foundational understanding of web development and a willingness to continuously adapt to evolving digital technologies.',
        img: '/icons/wm-thumbnail.png',
        icon: '/icons/wm-icon.png',
        color: 'pink'
    },
    {
        id: 4,
        title: 'Copywriter',
        description: 'The Copywriter Division is dedicated to producing impactful written content that informs, persuades, and engages the audience. Members are responsible for developing compelling copy across various platforms, such as social media captions, promotional scripts, campaign materials, and other textual formats. This division ensures clear, creative, and effective message delivery. Strong language skills and a keen sense of tone, audience, and purpose are essential in this role.',
        img: '/icons/cw-thumbnail.png',
        icon: '/icons/cw-icon.png',
        color: 'red'
    }
]

const group2: DivisionItem[] = [
    {
        id: 1,
        title: 'Reporter',
        description: "The Reporter Division is responsible for gathering, writing, and editing news or articles related to campus life and activities. Members conduct interviews, craft informative reports, and contribute to maintaining the credibility and journalistic integrity of the student activity unit’s media platforms. Strong writing skills, curiosity, and attention to factual accuracy are essential in this role.",
        img: '/icons/rp-thumbnail.png',
        icon: '/icons/rp-icon.png',
        color: 'purple'
    },
    {
        id: 2,
        title: 'Videographer',
        description: 'The Videography Division focuses on producing video content, including event documentation and creative projects. Members are responsible for shooting and editing videos that engage the audience and effectively convey messages through visual storytelling. A good sense of timing, composition, and basic editing skills are essential in this role to ensure high-quality and impactful results.',
        img: '/icons/vg-thumbnail.png',
        icon: '/icons/vg-icon.png',
        color: 'yellow'
    },
    {
        id: 3,
        title: 'Illustrator',
        description: 'The Illustrator Division is responsible for creating visual illustrations that complement and enhance the content produced by the student activity unit. Members develop original artwork that communicates ideas in a visually engaging, creative, and cohesive manner. A strong sense of design, creativity, and attention to detail are essential in this role.',
        img: '/icons/il-thumbnail.png',
        icon: '/icons/il-icon.png',
        color: 'blue'
    },
    {
        id: 4,
        title: 'Content Planner',
        description: 'The Content Planner Division is responsible for developing and organizing content strategies that align with the communication goals of the student activity unit. Members create content calendars, brainstorm campaign concepts, and collaborate with other divisions to ensure cohesive, consistent, and timely content delivery. Strategic thinking, creativity, and strong coordination skills are essential in this role.',
        img: '/icons/pk-thumbnail.png',
        icon: '/icons/pk-icon.png',
        color: 'orange'
    }
]

const accordionMobile: DivisionItem[] = [
    {
        id: 1,
        title: 'Graphic Designer',
        description: 'The Graphic Design Division is responsible for creating visual content that reflects and strengthens the identity of the student activity unit. This includes designing posters, social media posts, and various other visual materials. Members are expected to be creative and proficient in design software to communicate messages effectively through strong and cohesive visuals.',
        img: '/icons/dg-thumbnail.png',
        icon: '/icons/dg-icon.png',
        color: 'green'
    },
    {
        id: 2,
        title: 'Photographer',
        description: 'The Photography Division is responsible for capturing meaningful moments from events and activities held by the student activity unit through compelling visual storytelling. Members are expected to be proficient with camera equipment and possess basic photo editing skills to produce high-quality visual documentation. Their work serves as a vital resource for the publication and archival needs of the unit.',
        img: '/icons/fg-thumbnail.png',
        icon: '/icons/fg-icon.png',
        color: 'cyan'
    },
    {
        id: 3,
        title: 'Webmaster',
        description: 'The Webmaster Division is responsible for overseeing and maintaining the organization’s official website. This includes curating and uploading content, optimizing user navigation, and managing technical functionalities. Prospective members are expected to possess a foundational understanding of web development and a willingness to continuously adapt to evolving digital technologies.',
        img: '/icons/wm-thumbnail.png',
        icon: '/icons/wm-icon.png',
        color: 'pink'
    },
        {
        id: 4,
        title: 'Reporter',
        description: "The Reporter Division is responsible for gathering, writing, and editing news or articles related to campus life and activities. Members conduct interviews, craft informative reports, and contribute to maintaining the credibility and journalistic integrity of the student activity unit’s media platforms. Strong writing skills, curiosity, and attention to factual accuracy are essential in this role.",
        img: '/icons/rp-thumbnail.png',
        icon: '/icons/rp-icon.png',
        color: 'purple'
    },
    {
        id: 5,
        title: 'Videographer',
        description: 'The Videography Division focuses on producing video content, including event documentation and creative projects. Members are responsible for shooting and editing videos that engage the audience and effectively convey messages through visual storytelling. A good sense of timing, composition, and basic editing skills are essential in this role to ensure high-quality and impactful results.',
        img: '/icons/vg-thumbnail.png',
        icon: '/icons/vg-icon.png',
        color: 'yellow'
    },
    {
        id: 6,
        title: 'Copywriter',
        description: 'The Copywriter Division is dedicated to producing impactful written content that informs, persuades, and engages the audience. Members are responsible for developing compelling copy across various platforms, such as social media captions, promotional scripts, campaign materials, and other textual formats. This division ensures clear, creative, and effective message delivery. Strong language skills and a keen sense of tone, audience, and purpose are essential in this role.',
        img: '/icons/cw-thumbnail.png',
        icon: '/icons/cw-icon.png',
        color: 'red'
    },
    {
        id: 7,
        title: 'Illustrator',
        description: 'The Illustrator Division is responsible for creating visual illustrations that complement and enhance the content produced by the student activity unit. Members develop original artwork that communicates ideas in a visually engaging, creative, and cohesive manner. A strong sense of design, creativity, and attention to detail are essential in this role.',
        img: '/icons/il-thumbnail.png',
        icon: '/icons/il-icon.png',
        color: 'blue'
    },
    {
        id: 8,
        title: 'Content Planner',
        description: 'The Content Planner Division is responsible for developing and organizing content strategies that align with the communication goals of the student activity unit. Members create content calendars, brainstorm campaign concepts, and collaborate with other divisions to ensure cohesive, consistent, and timely content delivery. Strategic thinking, creativity, and strong coordination skills are essential in this role.',
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