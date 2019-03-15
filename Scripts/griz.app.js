const programming = {name: 'Programming', color: 'secondary'};
const game = {name: 'Game Dev', color: 'secondary'};
const libraries = {name: 'Libraries', color: 'secondary'};
const personal = {name: 'Personal', color: 'secondary'};
const app = {name: 'Applications', color: 'secondary'};
const other = {name: 'Other', color: 'secondary'};

const levels = [
    {name: 'Beginner', level: 0},
    {name: 'Intermediate', level: 1},
    {name: 'Advanced', level: 2}
]

const tags = [
    programming,
    game,
    personal,
    app,
    libraries,
    other
];

const skills = [
    {
        name: 'Javascript',
        level: levels[2],
        tag: programming.name
    },
    {
        name: 'Java',
        level: levels[1],
        tag: programming.name
    },
    {
        name: 'Agile',
        level: levels[1],
        tag: other.name
    },
    {
        name: 'PostgreSQL',
        level: levels[2],
        tag: programming.name
    },
    {
        name: '.NET',
        level: levels[1],
        tag: [programming.name, libraries.name]
    },
    {
        name: 'Bootstrap',
        level: levels[2],
        tag: [programming.name, libraries.name]
    },
    {
        name: 'VueJS',
        level: levels[1],
        tag: [programming.name, libraries.name]
    },
    {
        name: 'Node/Express',
        level: levels[1],
        tag: [programming.name, libraries.name]
    },
    {
        name: 'Lua',
        level: levels[0],
        tag: [programming.name, game.name]
    },
    {
        name: 'LibGDX',
        level: levels[2],
        tag: [programming.name, game.name]
    },
    {
        name: 'VS Code',
        level: levels[2],
        tag: app.name
    },
    {
        name: 'Visual Studio',
        level: levels[2],
        tag: app.name
    },
    {
        name: 'IntelliJ',
        level: levels[2],
        tag: app.name
    },
    {
        name: 'Support',
        level: levels[2],
        tag: other.name
    },
    {
        name: 'Microsoft Office',
        level: levels[2],
        tag: app.name
    },
    {
        name: 'Libre Office',
        level: levels[1],
        tag: app.name
    },
    {
        name: 'Entity Framework',
        level: levels[2],
        tag: [programming.name, libraries.name]
    },
    {
        name: 'Easy going',
        level: levels[2],
        tag: personal.name
    },
    {
        name: 'IIS',
        level: levels[1],
        tag: programming.name
    },
    {
        name: 'Love for Coding',
        level: levels[2],
        tag: personal.name
    },
    {
        name: 'Drive to Learn',
        level: levels[2],
        tag: personal.name
    },
    {
        name: 'Communication',
        level: levels[2],
        tag: personal.name
    },
    {
        name: 'Monogame/XNA',
        level: levels[2],
        tag: [programming.name, game.name]
    },
    {
        name: 'Data Structures',
        level: levels[2],
        tag: [programming.name, game.name]
    },
    {
        name: 'Algorithms',
        level: levels[2],
        tag: [programming.name, game.name]
    },
    {
        name: 'Angular 1.x',
        level: levels[2],
        tag: [programming.name]
    },
    {
        name: 'Angular',
        level: levels[0],
        tag: [programming.name]
    },
    {
        name: 'C#',
        level: levels[2],
        tag: [programming.name, game.name]
    },
    {
        name: 'Unity',
        level: levels[0],
        tag: [game.name]
    }
];

const projects = [
    {
        name: 'Bowles Mattress Delivery Tracker',
        lines: [
            'Code available on request.',
            `Built and designed specifically for Bowles Mattress and
            their four locations in the greater Louisville area.
            Helps Bowles keep track of their daily mattress deliveries, making
            sure not to over book their delivery workers; and, keeps ordering
            from their factories in a timely manner much easier. Also,
            customer surveys are tracked to help Bowles get a better understanding
            of their advertising budget.`,
            'Built in Java 7, JavaFX, and WebSockets.'
        ]
    },
    {
        name: 'Project Space',
        links: [
            {
                href: 'https://github.com/GrizzlyEnglish/project-space',
                name: 'View Code on Github'
            },
            {
                href: '/project-space',
                name: 'View Project Space'
            },
        ],
        lines: [
            'Canvas project to simulate space',
            'Plan to implement gravity',
            'Built in Canvas and vanilla OOP Javascript'
        ]
    },
    {
        name: 'ngEventScheduler',
        links: [
            {
                href: 'https://github.com/GrizzlyEnglish/ng-event-schedule',
                name: 'View Code on Github'
            },
            {
                href: 'https://grizzlyenglish.github.io/ng-event-schedule/',
                name: 'View Scheduler'
            }
        ],
        lines: [
            'An daily event scheduler to keep track of all your daily tasks',
            'Built in Angular 1.x'
        ]
    },
    {
        name: 'Project Omnihex',
        lines: [
            `My passion project. Project Pearl is a rogue-like tactical role playing game. 
            Every hundred years, Thayne is awoken, and the leader of the Warriors Guild is tasked
            to return him to his slumber. Gather a party and embark on the quest to return Thayne
            to his slumber.`,
            'Features Permadeath',
            'Learn from your past Captains failuers',
            'Huge map to explore',
            'Innovative tactical approach',
            'Built in Monogame/XNA - C#'
        ]
    },
    {
        name: 'University of Louisville E-Commerce',
        links: [
            {
                href: 'https://github.com/GrizzlyEnglish/cis-420-ecommerce',
                name: 'View Code on Github'
            }
        ],
        lines: [
            'Bakery E-Commerce built for Sweet Karoline Cakes',
            'Features Gallery, Product Page, Customer Portal, and Admin Portal',
            'VueJS, ExpressJS, SQLServer Stack'
        ]
    },
    {
        name: 'University of Louisville Degree Work Collection',
        links: [
            {
                href: 'https://github.com/GrizzlyEnglish/uofl-cis-collection',
                name: 'View Code Collection'
            }
        ],
        lines: [
            'A collection of all the code projects built for the University of Louisville CIS Major',
            'Expresses knowledge of OOP principles',
            'Expresses knowledge in LINQ',
            'Expresses knowlege in application development',
            'Built in C#'
        ]
    },
    {
        name: 'Grizzly English Website (This Website!)',
        links: [
            {
                href: 'https://github.com/GrizzlyEnglish/project-griz',
                name: 'View Code on Github'
            }
        ],
        lines: [
            'Built in .NET Core with VueJS',
        ]
    }
]

var griz_app = new Vue({
    el: '#griz-app',
    data: {
        tags: tags,
        levels: levels,
        skills: skills,
        projects: projects
    },
});