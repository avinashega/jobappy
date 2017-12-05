'use strict'

module.exports = function() {
    return {
        questions: [
            '1/9. Little interest or pleasure in doing things?\n1. Not at All\n2. Several Days\n3. More than half the Days\n4. Nearly every day',
            '2/9. Feeling down, depressed, or hopeless?\n1. Not at All\n2. Several Days\n3. More than half the Days\n4. Nearly every day',
            '3/9. Trouble falling or staying asleep, or sleeping too much?\n1. Not at All\n2. Several Days\n3. More than half the Days\n4. Nearly every day',
            '4/9. Feeling tired or having little energy?\n1. Not at All\n2. Several Days\n3. More than half the Days\n4. Nearly every day',
            '5/9. Poor appetite or overeating?\n1. Not at All\n2. Several Days\n3. More than half the Days\n4. Nearly every day',
            '6/9. Feeling bad about yourself - or that you are a failure or have let yourself or your family down?\n1. Not at All\n2. Several Days\n3. More than half the Days\n4. Nearly every day',
            '7/9. Trouble concentrating on things, such as reading the newspaper or watching television?\n1. Not at All\n2. Several Days\n3. More than half the Days\n4. Nearly every day',
            '8/9. Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?\n1. Not at All\n2. Several Days\n3. More than half the Days\n4. Nearly every day',
            '9/9. Thoughts that you would be better off dead, or of hurting yourself in some way?\n1. Not at All\n2. Several Days\n3. More than half the Days\n4. Nearly every day'
        ],
        options: [
            {title:'1', score:0},
            {title:'2', score:1},
            {title:'3', score:2},
            {title:'4', score:3}
        ]
    }
}