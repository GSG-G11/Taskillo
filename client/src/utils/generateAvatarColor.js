const generateAvatarColor = (name) => {
  const letters = name.split('');
  const redColor = letters[0].charCodeAt(0);
  const greenColor = letters[1].charCodeAt(0);
  const blueColor = letters[2].charCodeAt(0);
  const color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  return color;
}

export default generateAvatarColor;