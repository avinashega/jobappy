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
                message: 'Whatever that means right?',
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
                        title: 'Sure',
                        payload: {
                            step: 'cool'
                        }
                    }
                ]
            }
        ],

        'cool': {
            type: 'text',
            message: 'Cool',
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
                message: 'Hey, thanks for that.'
            },
            {
                type: 'text',
                message: 'A few things can contribute to tiredness.'
            },
            {
                type: 'text',
                message: 'If you\'re constantly tired, I mean for at least a month, then maybe you should check in with your doctor?'
            },
            {
                type: 'step',
                name:'find_doctor_query'
            }
        ],
        'find_doctor_query':[
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
                            step: 'find_mood'
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
                url: 'mood_chart.png'
            },
            {
                type: 'image',
                url: 'mood_table.png'
            }
        ],
        'energy_last_week':[
            {
                type: 'image',
                url: 'energy_chart.png'
            },
            {
                type: 'image',
                url: 'energy_table.png'
            }
        ],
        'find_doctor': [
            {
                type: 'text',
                message: 'What\'s your location?',
            }
        ],
        'energy_full': [
            {
                type: 'text',
                message: 'Glad to hear you\'re feeling energetic!',
                continue: 'find_mood'
            }
        ],
        'find_mood': [
            {
                type: 'text',
                message: 'Now, lets move on to understanding your mood.'
            },
            {
                type: 'text',
                message: 'How are you feeling?'
            },
            {
                type: 'text',
                message: 'To help, I have another scale, but this time from 1 to 3.'
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
                type: 'quick_reply',
                question: 'How long have you felt this way?',
                options: [
                    {
                        title: 'Only in recent days',
                        payload: {
                            step: 'phq_4',
                        }
                    },
                    {
                        title: 'More than 2 weeks',
                        payload: {
                            step: 'phq_9_query'
                        }
                    }
                ]
            }
        ],
        'mood_ok': [
            {
                type: 'text',
                message: 'Hey, thanks for sharing that.'
            },
            {
                type: 'text',
                message:'Did you know you can get an historic summary of your energy and mood levels?'
            },
            {
                type: 'text',
                message: 'Yeah, just type "mood last week" for a mood summary.'
            },
            {
                type: 'quick_reply',
                question: 'And "energy last week" for an energy summary, any time.',
                options: [
                    {
                        title: 'OK',
                        payload: {
                            step: 'phq_4'
                        }
                    }
                ]
            }
        ],
        'phq_4': [
            {
                type: 'text',
                message: 'I\'d like to finish up with a short clinical questionnaire, it\'s just four questions.'
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
                continue: 'journal'
            }
        ],
        'journal':[
            {
                type:'text',
                message:'Hey, the smart people over at the University of Rochester Medical Center suggest is keeping a daily journal of your mood.'
            },
            {
                type: 'text',
                message:'It helps you keep a track of your feelings.'
            },
            {
                type: 'quick_reply',
                question: 'Do you want to read what they have to say?',
                options:[
                    {
                        title:'Yes',
                        payload:{
                            step:'journal_link'
                        }
                    },
                    {
                        title:'No',
                        payload:{
                            step:'write_feelings'
                        }
                    }
                ]
            }
        ],
        'journal_link':{
            type:'text',
            message:'Here\'s the link: https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentID=4552&ContentTypeID=1'
        },
        'write_feelings':[
            {
                type:'text',
                message:'Ok. Let\'s go ahead and write our first entry.'
            },
            {
                type:'quick_reply',
                question:'Sound okay?',
                options:[
                    {
                        title:'Yes',
                        payload:{
                            step:'please_write'
                        }
                    },
                    {
                        title:'No',
                        payload:{
                            step:'done_for_today'
                        }
                    }
                ]
            }
        ],
        'please_write':{
            type:'text',
            message:'Please write how you feel at this moment in time...'
        },
        'ok_fine':{
            type:'text',
            message:'Okay, that\'s fine.',
            continue:'done_for_today'
        },
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
        ],
        'phq_9_query':[
            {
                type: 'text',
                message: 'OK.'
            },
            {
                type: 'text',
                message:'If it\'s okay, I\'ld like to ask you a few questions.'
            },
            {
                type: 'text',
                message: 'They\'re not designed to be difficult, but just to help me understand a bit more about your wellbeing.'
            },
            {
                type: 'quick_reply',
                question: 'Does that sound okay?',
                options:[
                    {
                        title:'Yes',
                        payload: {
                            step: 'begin_phq9',
                        }
                    },
                    {
                        title:'No',
                        payload: {
                            step: 'phq_4',
                        }
                    }
                ]
            },
        ],
        'begin_phq9':[
            {
                type: 'text',
                message: 'OK'
            },
            {
                type :'text',
                message: 'Thanks for that.'
            },
            {
                type:'text',
                message:'Over the last 2 weeks, how often have you been bothered by any of the following:'
            },
            {
                type : 'action',
                name: 'phq9'
            }
        ],
        'depression_level':{
            type: 'text',
            message:'Here\'s how you compare against a normalised scale for this test.'
        },
        'phq9_finished_0':[
            {
                type: 'text',
                message:'Great! Everything looks to be okay.'
            },
            {
                type: 'step',
                name:'depression_level'
            },
            {
                type: 'image',
                url: 'phq9_0.png'
            },
            {
                type: 'text',
                name: '👍🏻'
            }
        ],
        'phq9_finished_1':[
            {
                type:'text',
                message:'Hey'
            },
            {
                type:'text',
                message:'So, it\'s a mix of good and bad news.'
            },
            {
                type:'text',
                message:'Good news? You\'ve passed!'
            },
            {
                type:'text',
                message:'You seem to be relatively okay.'
            },
            {
                type: 'step',
                name:'depression_level'
            },
            {
                type: 'image',
                url: 'phq9_1.png'
            }
        ],
        'phq9_finished_2':[
            {
                type:'text',
                message:'Hey'
            },
            {
                type:'text',
                message:'It looks as though you\'re not quite feeling up to your normal self.'
            },
            {
                type: 'step',
                name:'depression_level'
            },
            {
                type: 'image',
                url: 'phq9_2.png'
            },
            {
                type:'text',
                message:'I\'d recommend that you check in with a doctor'
            },
            {
                type: 'step',
                name: 'find_doctor_query'
            }
        ],
        'phq9_finished_3':[
            {
                type: 'text',
                message: 'Hey'
            },
            {
                type:'text',
                message:'So, it\'s not great news.'
            },
            {
                type:'text',
                message:'Unfortunately.I\'d like for you to see a doctor about how you feel.'
            },
            {
                type: 'step',
                name: 'find_doctor'
            }
        ],
        'phq9_finished_4':[
            {
                type: 'text',
                message:'The test you\'ve just carried out has resulted in some difficult news to share.'
            },
            {
                type: 'step',
                name:'depression_level'
            },
            {
                type: 'image',
                url: 'phq9_4.png'
            },
            {
                type: 'text',
                message:'I\'d recommend that you seek medical advice right away.'
            },
            {
                type: 'step',
                name: 'find_doctor'
            }
        ],
        'do_not_understand':[{
            type:'text',
            message:'Sorry, I do not understand that. Let\'s try that again.'
        }]
    }
}