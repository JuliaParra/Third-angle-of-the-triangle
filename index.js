export function calculateThirdAngle(angle1, angle2) {
    return 180 - (angle1 + angle2);
  }

  const angle1 = 30;
const angle2 = 60;
const thirdAngle = calculateThirdAngle(angle1, angle2);
console.log(`Para los ángulos ${angle1} y ${angle2}, el tercer ángulo es: ${thirdAngle}`)