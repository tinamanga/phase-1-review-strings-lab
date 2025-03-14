// Write your code in this file!
// declare variables and concatinate and  string interpolation
const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook,  ${currentUser}!`;

// uppercasing the String
const excitedWelcomeMessage =`${welcomeMessage.toUpperCase()}`+"!";
// shortening greeting using .slice and extract the first initial of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
