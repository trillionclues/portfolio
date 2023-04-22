import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import arrowDown from '/icons/arrow-down.svg'
import reactImg from '/icons/techs/react.svg'
import cssImg from '/icons/techs/css.svg'
import htmlImg from '/icons/techs/html.svg'

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
        first: {
          title: '_ui-animations',
          description: 'Duis aute irure dolor in velit esse cillum dolore.',
          img: '/images/projects/ui-animations2.png',
          tech: ['React', 'all'],
          url: 'https://github.com/',
          icon: reactImg,
        },
        second: {
          title: '_ai-resources',
          description: 'Duis aute irure dolor in velit esse cillum dolore.',
          img: '/images/projects/ai-resources.png',
          tech: ['CSS', 'all'],
          url: 'https://github.com/',
          icon: cssImg,
        },
        third: {
          title: '_tetris-game',
          description: 'Duis aute irure dolor in velit esse cillum dolore.',
          img: '/images/projects/tetris-game.png',
          tech: ['Html', 'all'],
          url: 'https://github.com/',
          icon: htmlImg,
        },
      },
    ],
  },
]
