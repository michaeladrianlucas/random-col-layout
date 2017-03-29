angular.module('colland', [])

    .controller('mainCtrl', mainCtrl)

    function mainCtrl ($scope) {
        $scope.stockQuestions = [
            {
                "Name": "What is you client's federal bracket?",
                "Type": "Long answer",
                "Plugins": ["RightBridge", "FireLight"],
                "TimeStamp": "2012-04-23T18:25:43.511Z"
            },

            {
                "Name": "What is you client's risk tolerance?",
                "Type": "Multiple choice",
                "Plugins": ["RightBridge", "FireLight"],
                "TimeStamp": "2012-04-23T18:25:43.511Z"
            },

            {
                "Name": "What is your martial status?",
                "Type": "Multiple choice",
                "Plugins": ["RightBridge"],
                "TimeStamp": "2012-04-23T18:25:43.511Z"
            },

            {
                "Name": "What are your financial objectives?",
                "Type": "Multiple select",
                "Plugins": ["FireLight"],
                "TimeStamp": "2012-04-23T18:25:43.511Z"
            },

            {
                "Name": "How long do you intend to keep this purchase?",
                "Type": "Short Answer",
                "Plugins": ["RightBridge", "FireLight"],
                "TimeStamp": "2012-04-23T18:25:43.511Z"
            }

        ];

        console.debug('stockQuestions: ', $scope.stockQuestions);
    }