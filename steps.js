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
            question: 'Can you see the buttons below?',
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
            question: 'Great! I\'m glad you figured out how those buttons work :)',
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
                message: 'Whatever that means 🙄',
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
                message: 'Ok!',
                continue: 'done_for_today'
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