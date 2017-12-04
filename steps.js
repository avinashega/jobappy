'use strict';

module.exports = function() {
    return {
        'greeting': {
            type: 'text',
            message: `Hey, {{username}}!`,
            continue: 'button_test'
        },

        'button_test': {
            type: 'quick_reply',
            question: 'Can you see the button below?',
            options: [
                {
                    title: 'Yes',
                    payload: {
                        step: 'button_test_success'
                    }
                }
            ]
        },

        'button_test_fail': {
            type: 'text',
            message: 'I\'m afraid we can not communicate properly without the buttons. My hoomans are on it.'
        },

        'button_test_success': {
            type: 'quick_reply',
            question: 'Great! I\'m glad you figured out how those buttons work, they\'ll come in handy.',
            options: [
                {
                    title: 'Thanks!',
                    payload: {
                        step: 'house_keeping'
                    }
                }
            ]
        },
        'house_keeping': [
            {
                type: 'text',
                message: 'So, let\'s get started.',
            },
            {
                type: 'text',
                message: 'We\'ll just go over some housekeeping stuff first.',
            },
            {
                type: 'quick_reply',
                question: 'I know this might be hard to believe, but I\'m a robot.',
                options: [
                    {
                        title: 'OK',
                        payload: {
                            step: 'continue_house_keeping'
                        }
                    }
                ]
            }
        ],
        'continue_house_keeping': [
            {
                type: 'text',
                message: 'The folks who created me did so to help me come across more "human".'
            },
            {
                type: 'text',
                message: 'Whatever that means \u{1F644}',
            },
            {
                type: 'text',
                message: 'As we get to know one another, I\'ll learn more about you.'
            },
            {
                type: 'text',
                message: 'And when I learn more about you, I\'ll be able to give you more personalised advice and support',
            },
            {
                type: 'quick_reply',
                question: 'Sound okay?',
                options: [
                    {
                        title: 'Sure!',
                        payload: {
                            step: 'cool'
                        }
                    }
                ]
            }
        ],

        'cool': {
            type: 'text',
            message: 'Cool!',
            continue: 'intro'
        },

        'intro': [
            {
                type: 'text',
                message: 'Each time we talk, I\'ll ask you two questions.'
            },
            {
                type: 'text',
                message: 'The first is to understand how energetic you feel.'
            },
            {
                type: 'quick_reply',
                question: 'And the second to understand your mood.',
                options: [
                    {
                        title: 'OK',
                        payload: {
                            step: 'find_energy'
                        }
                    }
                ]
            }
        ],
        'find_energy': [
            {
                type: 'text',
                message: 'On a scale from 1 to 5, what\'s your energy level right now?'
            },
            {
                type: 'text',
                message: '1 as very tired and 5 as full of energy'
            },
            {
                type: 'quick_reply',
                question: '3 being about average',
                options: [
                    {
                        title: '1',
                        payload: {
                            step: 'energy_tired'
                        }
                    },
                    {
                        title: '2',
                        payload: {
                            step: 'energy_tired'
                        }
                    },
                    {
                        title: '3',
                        payload: {
                            step: 'energy_tired'
                        }
                    },
                    {
                        title: '4',
                        payload: {
                            step: 'energy_full'
                        }
                    },
                    {
                        title: '5',
                        payload: {
                            step: 'energy_full'
                        }
                    }
                ]
            }
        ],
        'energy_tired': [
            {
                type: 'action',
                name: 'mood_stats'
            },
            {
                type: 'text',
                message: 'Appreciate sharing that.'
            },
            {
                type: 'text',
                message: 'A few things can contribute to tiredness.'
            },
            {
                type: 'text',
                message: 'If you\'re constantly tired, then maybe you should check in with your doctor?'
            },
            {
                type: 'quick_reply',
                question: 'Do you want me to help you find a local doctor?',
                options: [
                    {
                        title: 'Yes',
                        payload: {
                            step: 'find_doctor'
                        }
                    },
                    {
                        title: 'No',
                        payload: {
                            step: 'energy_full'
                        }
                    }
                ]
            }
        ],
        'mood_stats': [
            {
                type: 'text',
                message: 'Did you know you can get an historic summary of your energy and mood levels?'
            },
            {
                type: 'text',
                message: 'Yeah, just type "mood last week" for a mood summary.'
            },
            {
                type: 'text',
                message: 'And "energy last week" for an energy summary, any time.'
            }
        ],
        'mood_last_week':[
            {
                type: 'image',
                url: 'https://gm1.ggpht.com/vsw97N0RZtZC3rSfT6ktvvKca5z4Bfoj-KaGdbNRRgH6pKf2GDSTHdikRrrifk7s7w5rPfoYOYqPvXeaQbK_IOXtbrHhi00p8HVdcS_Qm7cIp1A8Fw5je9SQBhLR4XUWtIuTOGP6MAxRPF5tmnPZrAgzLfVL5FENc1jqwoBwf3Ukzn9m1N8BRWK4O3fEr6hnN10PtH-iPJtgATvQ_Jswkojfhfem27nLdt7POlGQOe691qTNUQxpRloxLEFpuLhTf_lyV5WT6qyEo_zVhlYh-wIPzuj_2IAtCQVjh81QusDPxSrWHwc2XkJK-KGtm13-86MKAu48I5OEuz2R_Ojp6fgmnLrJhLAU3d0YfmKJOeOfKm5-wvnFdU_PEzXysWnsjJ08AVWNDA-JmGPl45W7mtEXkh5CNB5J-5NUu-dYEiq8asnWIHaKnhauEuekBc3ZNQI8Fc4rzwQT2n-eB5e8Y5rTgxUY2toZEWAv72dMvJ_OoGmBuVP6PD7-uNssUB37vQdDlvaVon_iWq7seqQZO1lQ9EjDN27BlQD9BXTV8dafZjZveDbhGJOuNu6Z8rA-wGCICEFNCqOUbWPzE8srjxa7Tk2WS-KaP-EzLGCDy2N3IYvboom851TSALy4RHE2ONxoEb9Si2H8xPg05LddazNc6WhMDZijC9gie9gn4_Y8J6GS9wDn07eGaWUM8g=w626-h502-l75-ft'
            },
            {
                type: 'image',
                url: 'https://gm1.ggpht.com/YWrgIvamfj4rVSSls0WK6rJNoEeNHUpi8OqJ6NubieicV1KcpbRe7YHmGJKXgueh0UxDcSIJ6_Hq16sqV6aIN9-z_r582q8JmzzEKokzqKIYV5t4qwDq6yek7n5gHK8KIT75IcQGfpCi8j5L7f4pL4SZ2czTjHUI397R_nMV9KP2oS6dm-HdaLVxWGmXdyRmxJ9tnNce8_RToOA_a4kpTtZSMAIyYaiKXOEFYCFsAL3lCPrY8gQ-ki0JrisOWhhnnzWnzF7EuUhRnSm1EhBtxU2MhM_KRPFSsndiRjDu3hOFKozcHgpqSIfnnfhSQg-5EyP0S8eQHqJaOzq4XVA3omLZMb5ueA8nE9MLR4FzZU72G_1KBtg8G72FQ0OYiIrViEp8gJ-FS_FvZa8thmC0zxjBCHBh1SLWcLXwMl3MsK_e7sE-dE4rANF2vFLyzBMnA3x_nPQ5s_tYeTxQL3oyTc7pUyaPSDqkb6ziMTR4Jk8rOehHBOjBcv4y7acEjBqk8nJbl2RKaFlQjCFKRpKECh2wqzr5lYXMx2jvje7TfYXVQ3f5PDfofU0C0BsTyiWheCcrXrM5SlkpL3hV45KYwVlXVqsMLyQdqDWO7rHY57AbcYj_TQ7_Kc-4FseGAs_H5uDeRTQRH2K-f4uu7Jq4fv2sOXzbFtXFraenFNEx8Rrnxut1haUKwfklE5asiGA=w446-h230-l75-ft'
            }
        ],
        'energy_last_week':[
            {
                type: 'image',
                url: 'https://gm1.ggpht.com/dbNa8qRAQNysc2-4ickQ2OrjJvWnKbMRgC749jt8jefYI2O4GLDKt7Xb8bsUBg8h3bJvKkyB1vIJuJCPp-Ag9VdP5Nq_nxlhBHV36VqpklmpVRVLh8kPAxCrrIhhZoFDiXb4SrJwAq8eomTzFaDONwi9kgRYD65uk-eOnbGUfP_ae8ccSXPlGhT3sbkh-dBOPNQhjxfJA9MCOhHh7hgocojuGmsfltJY6FihrT9t673sF8uUWCX9qXflAbv3M245RkvnK6Db1zV20ho7yhfQsOIZop1Ag0zBRhqODPxNSVV4LpyPkDU0isvSdVZS1MwubWfzbxPQj8nChcO6n9Chf5ZWhnahad1FJbA0-HRqGCUTV5tDBMThVPooYuLSjRzWAFTLamncRQKDw0DzSplob_orA5e6ZbqE9-oa2qnO5cP7M6TQUo1tv0-aJBToERHoUwFxEvNzJKVJVpxbfQ2KlK2uKvItpPaL82obeeBsS85oG1s4-98OUK-GlCtq2wA9iu1jocrzqSlG_e1aLVFi7Nz8VzUwdk9AlsfEXac2iQER0i85SBGsxnpK3iaimTHGDa0o2WW864q8nIp4hil2a9zgv-DWkF-BSHUCCKbPCJzluUcvK8LhbI3FHfx8rhenpQJ9teeVPFCgUqW-RqWd8fGVusa91cPHF0OY943y1NFulvX3tctUPrmMWGxDxR8=w760-h578-l75-ft'
            },
            {
                type: 'image',
                url: 'https://gm1.ggpht.com/_h1AkjUzsNHB_E8LUKBkLihUPoZojK5gdgwqJdJp03Kk6Uf6e21gmEVYrKRy6NCdNaANSqL7ETfFmLIS-ucw_cWH-alJmxDJfwp6sH3tLfesOUPkzcYHYHm5pINi1ovt314-x7GRVWnrLeZRylkIMbqJM1g2JNEBUoykwyWKPXk0wEr73P1LKoSJrEXnHXacImh3VkPdk9qZD2wwtCPtCDNWHOhRsv872aWCRx7UNbZbNTk6M0mQ28yRCNRz1O_u_0E3Q0NVgmU3LNDrS4sWKCwUh8tInWvn9lpY2YJ0hxVqbRRndJO2gTDuOiNKO4WTd_-tzit6VW3XYupUNlUkUjAo2Bm_lIUXhN9zmA4-SRKkM1NgBetw9gs-tM0eSZl_xwZ5bcgIKo0kYyQe8AxQkcYUR3Jma9yo9wuc-h0c5DphZ0MbEaX8QUjN0raIVZI_oJs3CSsvSPUyKJ-i9aoE_k2tWERqqMR_Sx9tMhJqqcGAPS_E91W6yqNVlK672034w00tnD5YHNBLR-gMVFsr5Y6d4-iBTCwySgVty3qRoDEzp84KMfObwS8gIGvZhbmcMh46nvJJa-xDC5pHBejBdXSEK-4kq-ftmDTKXzEtpmHkjcM_6wntLIZV6XJm_NdeUFpDEe9PRRq5iueFcen56fUJxrLPwOfFDjlOpkPGclse8SCaR3VN4rsvr89jPw=w540-h340-l75-ft'
            }
        ],
        'find_doctor': [
            {
                type: 'text',
                message: 'My hoomans are still working on this.',
                continue: 'done_for_today'
            }
        ],
        'energy_full': [
            {
                type: 'text',
                message: 'Glad to hear that!'
            },
            {
                type: 'text',
                message: 'Let\'s move on to understanding your mood.',
                continue: 'find_mood'
            }
        ],
        'find_mood': [
            {
                type: 'text',
                message: 'On a scale of 1 to 3, how are you feeling right now?'
            },
            {
                type: 'text',
                message: '1 means you\'re feeling low, sad, not really happy.'
            },
            {
                type: 'text',
                message: '2 means you\'re feeling okay, faily average.'
            },
            {
                type: 'quick_reply',
                question: '3 means you\'re happy, like you could feel like this forever!',
                options: [
                    {
                        title: '1',
                        payload: {
                            step: 'mood_sad'
                        }
                    },
                    {
                        title: '2',
                        payload: {
                            step: 'mood_ok'
                        }
                    },
                    {
                        title: '3',
                        payload: {
                            step: 'mood_ok'
                        }
                    }
                ]
            }
        ],
        'mood_sad':[
            {
                type: 'text',
                message: 'Appreciate sharing that.'
            },
            {
                type: 'text',
                message: 'If it\'s okay, I\'d like to ask you a few questions.'
            },
            {
                type: 'text',
                message: 'They\'re not designed to be difficult, but just to help me understand a bit more about your wellbeing.'
            },
            {
                type: 'quick_reply',
                question: 'Does that sound okay?',
                options: [
                    {
                        title: 'Yes',
                        payload: {
                            step: 'launch_phq9',
                            action: 'phq9',
                            seq: 0,
                            score: 0
                        }
                    },
                    {
                        title: 'No',
                        payload: {
                            step: 'phq_4'
                        }
                    }
                ]
            }
        ],
        'mood_ok': [
            {
                type: 'text',
                message: 'OK',
                continue: 'phq_4'
            }
        ],
        'phq_4': [
            {
                type: 'text',
                message: 'Ok. I\'d like to finish up with a short clinical questionnaire, it\'s just four questions.'
            },
            {
                type: 'text',
                message: 'There are no awkward or difficult questions.'
            },
            {
                type: 'text',
                message: 'It\'s just designed to help me understand your current wellbeing.'
            },
            {
                type: 'quick_reply',
                question: 'We\'ll do this questionnaire from time to time, so it should get faster each time 🙂',
                options: [
                    {
                        title: 'Sure',
                        payload: {step: 'phq4_1'}
                    }
                ]
            }
        ],
        'phq4_1':[
            {
                type: 'text',
                message: '1/4. How often over the last two weeks were you bothered by feeling anxious, nervous or on edge?'
            },
            {
                type: 'text',
                message: '1. not at all'
            },
            {
                type: 'text',
                message: '2. several days'
            },
            {
                type: 'text',
                message: '3. more than half the days'
            },
            {
                type: 'quick_reply',
                question: '4. nearly every day',
                options: [
                    {
                        title: '1',
                        payload: {
                            step: 'phq4_2',
                            score: 0
                        }
                    },
                    {
                        title: '2',
                        payload: {
                            step: 'phq4_2',
                            score: 1
                        }
                    },
                    {
                        title: '3',
                        payload: {
                            step: 'phq4_2',
                            score: 2
                        }
                    },
                    {
                        title: '4',
                        payload: {
                            step: 'phq4_2',
                            score: 3
                        }
                    }
                ]
            },
        ],
        'phq4_2':[
            {
                type: 'text',
                message: '2/4. How often of the last two weeks were you bothered by not being able to stop or control worry?'
            },
            {
                type: 'text',
                message: '1. not at all'
            },
            {
                type: 'text',
                message: '2. several days'
            },
            {
                type: 'text',
                message: '3. more than half the days'
            },
            {
                type: 'quick_reply',
                question: '4. nearly every day',
                options: [
                    {
                        title: '1',
                        payload: {
                            step: 'phq4_3',
                            score: 0
                        }
                    },
                    {
                        title: '2',
                        payload: {
                            step: 'phq4_3',
                            score: 1
                        }
                    },
                    {
                        title: '3',
                        payload: {
                            step: 'phq4_3',
                            score: 2
                        }
                    },
                    {
                        title: '4',
                        payload: {
                            step: 'phq4_3',
                            score: 3
                        }
                    }
                ]
            },
        ],
        'phq4_3':[
            {
                type: 'text',
                message: 'Just two more to go'
            },
            {
                type: 'text',
                message: '3/4. How often over the last two weeks were you bothered by little interest or pleasure in doing things?'
            },
            {
                type: 'text',
                message: '1. not at all'
            },
            {
                type: 'text',
                message: '2. several days'
            },
            {
                type: 'text',
                message: '3. more than half the days'
            },
            {
                type: 'quick_reply',
                question: '4. nearly every day',
                options: [
                    {
                        title: '1',
                        payload: {
                            step: 'phq4_4',
                            score: 0
                        }
                    },
                    {
                        title: '2',
                        payload: {
                            step: 'phq4_4',
                            score: 1
                        }
                    },
                    {
                        title: '3',
                        payload: {
                            step: 'phq4_4',
                            score: 2
                        }
                    },
                    {
                        title: '4',
                        payload: {
                            step: 'phq4_4',
                            score: 3
                        }
                    }
                ]
            },
        ],
        'phq4_4':[
            {
                type: 'text',
                message: '4/4. How often over the last two weeks were you bothered by feeling down, depressed, or hopeless?'
            },
            {
                type: 'text',
                message: '1. not at all'
            },
            {
                type: 'text',
                message: '2. several days'
            },
            {
                type: 'text',
                message: '3. more than half the days'
            },
            {
                type: 'quick_reply',
                question: '4. nearly every day',
                options: [
                    {
                        title: '1',
                        payload: {
                            step: 'phq4_finished',
                            score: 0
                        }
                    },
                    {
                        title: '2',
                        payload: {
                            step: 'phq4_finished',
                            score: 1
                        }
                    },
                    {
                        title: '3',
                        payload: {
                            step: 'phq4_finished',
                            score: 2
                        }
                    },
                    {
                        title: '4',
                        payload: {
                            step: 'phq4_finished',
                            score: 3
                        }
                    }
                ]
            },
        ],
        'phq4_finished': [
            {
                type: 'text',
                message: 'All done! Great work 🙂'
            },
            {
                type : 'text',
                message: 'Thanks for going through those questions with me.',
                continue: 'done_for_today'
            }
        ],
        'done_for_today': [
            {
                type: 'text',
                message: 'I think we\'re done for the day 🙂'
            },
            {
                type: 'text',
                message: 'Before I go, I wanted to leave you with my go-to dance moves whenever I party!'
            },
            {
                type: 'gif',
                url: 'http://bestanimations.com/Music/Dancers/guys-dancing/funny-dance-3.gif'
            },
            {
                type: 'text',
                message: 'You\'ve gotta love a bit of Carlton!'
            },
            {
                type: 'text',
                message: 'Bye for now. 👋'
            }
        ]
    }
}