// Greeting Message

const generateGreeting = () => {
  const hours = new Date().getHours();
  let greeting = '';
  const greetingTypes = [ 'Good Morning', 'Good Afternoon', 'Good Evening' ];
  if (hours >= 0 && hours < 12) {
    greeting = greetingTypes[0];
  } else if (hours >= 12 && hours < 18) {
    greeting = greetingTypes[1];
  } else if (hours >= 18 && hours < 24) {
    greeting = greetingTypes[2];
  }
  return greeting;
}

export default generateGreeting;