var app = new Vue({
    el: '#griz-app',
    data: {
        skills: [
            {
                name: 'Javascript',
                level: 3,
                information: ''
            },
            {
                name: 'Java',
                level: 2,
                information: ''
            },
            {
                name: 'Agile',
                level: 1,
                information: ''
            },
            {
                name: 'PostgreSQL',
                level: 2,
                information: ''
            },
            {
                name: '.NET',
                level: 1,
                information: ''
            },
            {
                name: 'Bootstrap',
                level: 1,
                information: ''
            },
            {
                name: 'VueJS',
                level: 2,
                information: ''
            },
            {
                name: 'Node',
                level: 1,
                information: ''
            },
            {
                name: 'Lua',
                level: 2,
                information: ''
            },
            {
                name: 'LibGDX',
                level: 2,
                information: ''
            },
            {
                name: 'VS Code',
                level: 1,
                information: ''
            },
            {
                name: 'Visual Studio',
                level: 3,
                information: ''
            },
            {
                name: 'IntelliJ',
                level: 2,
                information: ''
            },
            {
                name: 'Support',
                level: 1,
                information: ''
            },
            {
                name: 'Microsoft Office',
                level: 3,
                information: ''
            },
            {
                name: 'Libre Office',
                level: 2,
                information: ''
            },
            {
                name: 'Entity Framework',
                level: 1,
                information: ''
            },
            {
                name: 'Easy going',
                level: 2,
                information: ''
            },
            {
                name: 'IIS',
                level: 1,
                information: ''
            },
            {
                name: 'Love for Coding',
                level: 3,
                information: ''
            },
            {
                name: 'Drive to Learn',
                level: 2,
                information: ''
            },
            {
                name: 'Communication',
                level: 1,
                information: ''
            },
        ],
        projects: [
            {
                name: 'Bowles Mattress Delivery Tracker',
                lines: [
                    `Built and designed specifically for Bowles Mattress and
                    their four locations in the greater Louisville area.
                    Helps Bowles keep track of their daily mattress deliveries, making
                    sure not to over book their delivery workers; and, keeps ordering
                    from their factories in a timely manner much easier. Also,
                    customer surveys are tracked to help Bowles get a better understanding
                    of their advertising budget.`,
                    'Built in Java 7, JavaFX, and WebSockets.',
                    'Code available on request.'
                ]
            }
        ]
    },
});