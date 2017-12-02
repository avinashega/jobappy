'use strict'

module.exports = function() {
    return {
        questions: [
            '1/9 Little interest or pleasure in doing things?',
            '2/9 Feeling down, depressed, or hopeless?',
            '3/9 Trouble falling or staying asleep, or sleeping too much?',
            '4/9 Feeling tired or having little energy?',
            '5/9 Poor appetite or overeating?',
            '6/9 Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
            '7/9 Trouble concentrating on things, such as reading the newspaper or watching television?',
            '8/9 Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
            '9/9 Thoughts that you would be better off dead, or of hurting yourself in some way?'
        ],
        options: [
            {title:'Not at All', score:0},
            {title:'Several Days', score:1},
            {title:'More than half the Days', score:2},
            {title:'Nearly every day', score:3}
        ]
    }
}