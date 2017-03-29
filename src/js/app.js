angular.module('colland', [])

    .controller('mainCtrl', mainCtrl)

    function mainCtrl ($scope) {
        const stockQuestions = [
            {
                "Name": "What is you client's federal bracket?",
                "Type": "Long answer",
                "plugins": ["RightBridge", "FireLight"],
                "timestamp": "2012-04-23T18:25:43.511Z"
            },

            {
                "Name": "What is you client's risk tolerance?",
                "Type": "Multiple choice",
                "plugins": ["RightBridge", "FireLight"],
                "timestamp": "2012-04-23T18:25:43.511Z"
            },

            {
                "Name": "What is your martial status?",
                "Type": "Multiple choice",
                "plugins": ["RightBridge"],
                "timestamp": "2012-04-23T18:25:43.511Z"
            },

            {
                "Name": "What are your financial objectives?",
                "Type": "Multiple select",
                "plugins": ["FireLight"],
                "timestamp": "2012-04-23T18:25:43.511Z"
            },

            {
                "Name": "How long do you intend to keep this purchase?",
                "Type": "Short Answer",
                "plugins": ["RightBridge", "FireLight"],
                "timestamp": "2012-04-23T18:25:43.511Z"
            }

        ];

        console.debug('stockQuestions: ', stockQuestions);
    }