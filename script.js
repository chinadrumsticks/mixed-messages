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
