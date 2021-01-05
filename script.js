// Generate random messages for Git commits

const objOutputMessage = {
    actionType: [
        'Adding', 
        'Refactoring', 
        'Removing'
    ],

    actionAct: [
        'variables for input', 
        'classes for API', 
        'factory function'
    ],

    actionModifier: [
        'to implement grid', 
        'for loading DB', 
        'as a workaround', 
        'as a last resort'
    ]

};

// Funtion for getting a random index number
const randomIndex = num => {
    return Math.floor(Math.random() * num);
};

// Define random messages to combine
const string1 = objOutputMessage.actionType[randomIndex(objOutputMessage.actionType.length)];
const string2 = objOutputMessage.actionAct[randomIndex(objOutputMessage.actionAct.length)];
const string3 = objOutputMessage.actionModifier[randomIndex(objOutputMessage.actionModifier.length)];

// Log the complete random message to the console
console.log(string1, string2, string3)