import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import arrowDown from '/icons/arrow-down.svg'
import reactImg from '/icons/techs/react.svg'
import cssImg from '/icons/techs/css.svg'
import htmlImg from '/icons/techs/html.svg'
import filledReact from '/icons/techs/filled/react.svg'
import filledCss from '/icons/techs/filled/css.svg'
import filledHtml from '/icons/techs/filled/html.svg'
import filledNext from '/icons/techs/filled/nextjs.svg'
import filledNode from '/icons/techs/filled/nodejs-icon.svg'
import filledMongo from '/icons/techs/filled/mongodb.svg'
import filledJS from '/icons/techs/filled/javascript3.svg'

export const developer = [
  {
    name: 'Excel Nwachukwu ',
    logo: 'excel-nwachukwu',
    role: 'Frontend Developer',
    about: [
      {
        'professional-info': {
          title: 'professional-info',
          icon: arrowDown,
          info: [
            {
              experience: {
                title: 'Experience',
                description:
                  'Over the past 5 years, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              hardSkills: {
                title: 'Hard Skills',
                description:
                  'Over the past 5 years, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              softSkills: {
                title: 'Soft Skills',
                description:
                  'Over the past 5 years, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
            },
          ],
        },

        'personal-info': {
          title: 'personal-info',
          icon: arrowDown,
          info: [
            {
              bio: {
                title: 'Bio',
                description:
                  'About me <br> I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit,',
              },
              interests: {
                title: 'Interests',
                description:
                  'I love to play football, watch movies and read books',
              },
              education: {
                title: 'Education',
                description:
                  'I have a BSc in Computer Science from the University of Lagos',
              },
            },
          ],
        },

        'hobbies-info': {
          title: 'hobbies-info',
          icon: arrowDown,
          info: [
            {
              sports: {
                title: 'Sports',
                description:
                  'I love to play football, watch movies and read books',
              },
              favGames: {
                title: 'Favourite Games',
                description:
                  'I love to play football, watch movies and read books',
              },
            },
          ],
        },
      },
    ],

    contact: [
      {
        contacts: {
          title: 'Contacts',
          icon: arrowDown,
          sources: {
            email: 'exceln646@gmail.com',
            phone: '+2349032942903',
          },
        },

        social: [
          {
            github: {
              title: 'Github profile',
              url: ' https://github.com/trillionclues ',
              user: 'trillionclues',
              icon: <BsGithub />,
            },

            twitter: {
              title: 'Twitter profile',
              url: ' https://twitter.com/trillionclues ',
              icon: <BsTwitter />,
              user: 'trillionclues',
            },

            linkedin: {
              title: 'LinkedIn profile',
              url: ' https://www.linkedin.com/in/trillionclues-excel/ ',
              icon: <BsLinkedin />,
            },
          },
        ],

        'find-me-also-in': [
          {
            title: 'Find-me-also-in',
            sources: [
              {
                youtube: {
                  title: 'YouTube channel',
                  url: 'https://www.youtube.com/',
                  user: 'username',
                },
                gurushots: {
                  title: 'GuruShots profile',
                  url: 'https://gurushots.com/',
                  user: 'username',
                },
                instagram: {
                  title: 'Instagram account',
                  url: 'https://instagram.com/',
                  user: 'username',
                },
                twitch: {
                  title: 'Twitch profile',
                  url: 'https://twitch.com/',
                  user: 'username',
                },
              },
            ],
          },
        ],
      },
    ],

    gists: [
      {
        1: '',
        2: '',
      },
    ],

    projects: [
      {
        title: '_notr-note-app',
        description: 'Utility note-taking app using EJS and NodeJS w/GAuth20.',
        img: '/images/projects/notr-note-taking-app.png',
        tech: ['NodeJS', 'all'],
        url: 'https://github.com/trillionclues/NotR-notes-app/',
        icon: reactImg,
        filledIcon: filledNode,
      },
      {
        title: '_bizboom-commerce',
        description: 'NextJS ecommerce app with stripe integration and sanity.',
        img: '/images/projects/ecommerce-wtih-nextjs.png',
        tech: ['NextJS', 'all'],
        url: 'https://github.com/trillionclues/bizboom-commerce',
        icon: cssImg,
        filledIcon: filledNext,
      },
      {
        title: '_web3-scrambler',
        description: 'HTML5 implementation of drag-drop events and auth',
        img: '/images/projects/drag-drop-scramble-crypto-game.png',
        tech: ['JavaScript', 'all'],
        url: 'https://github.com/trillionclues/web3-drag-drop-game',
        icon: htmlImg,
        filledIcon: filledJS,
      },
      {
        title: '_docket-todo-app',
        description:
          'Todo w/CRUD implementation for completed/in-progress todos',
        img: '/images/projects/docket-todo-app.png',
        tech: ['React', 'all'],
        url: 'https://github.com/trillionclues/docket-list/',
        icon: htmlImg,
        filledIcon: filledReact,
      },
      {
        title: '_phonie-isp',
        description:
          'Hackerthon project that detects telecoms carrier for numbers using Nigeria ISP network ',
        img: '/images/projects/Isp-detector.png',
        tech: ['JS', 'Html', 'Css', 'all'],
        url: 'https://github.com/trillionclues/phonie-app',
        icon: htmlImg,
        filledIcon: filledJS,
      },
      {
        title: '_streemit-movies',
        description: 'Movie recommendation website using MovieDB Api.',
        img: '/images/projects/movie-recommendation-website.png',
        tech: ['JS', 'Html', 'Css', 'all'],
        url: 'https://github.com/trillionclues/streamit-movie-app',
        icon: htmlImg,
        filledIcon: filledJS,
      },
      {
        title: '_notefy-note-app',
        description:
          'Note taking app with CRUD functions, text limit and timestamps.',
        img: '/images/projects/note-app-with-text-limit.png',
        tech: ['React', 'all'],
        url: 'https://github.com/trillionclues/notefy-app',
        icon: htmlImg,
        filledIcon: filledReact,
      },
      {
        title: '_travelo-bookings',
        description:
          'Travel booking website landing page using React to filter and map items on request.',
        img: '/images/projects/travel-booking-landing-page.png',
        tech: ['React', 'all'],
        url: 'https://github.com/trillionclues/travelo-landing-page/',
        icon: htmlImg,
        filledIcon: filledReact,
      },
    ],
  },
]
