function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointIncrement = 5;
  
    if (isNaN(speed)) {
      return "Please enter a valid number.";
    } else if (speed < speedLimit) {
      return "Ok";
    } else {
      const excessSpeed = speed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / demeritPointIncrement);
  
      if (demeritPoints > 12) {
        return "License suspended!";
      } else {
        return `Demerit points: ${demeritPoints}`;
      }
    }
  }
  
  // Example usage:
  const speed = 80;
  const result = checkSpeed(speed);
  console.log(result); // You can also display the result on a web page if needed
  