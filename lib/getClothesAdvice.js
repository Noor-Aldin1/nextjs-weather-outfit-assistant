export function getClothesAdvice(temperature, condition, description) {
  const advice = [];
  const temp = temperature;
  const cond = condition.toLowerCase();
  const desc = description.toLowerCase();

  // Base temperature recommendations
  if (temp < 10) {
    advice.push("Wear a heavy winter jacket");
    advice.push("Wear a scarf");
    advice.push("Wear gloves");
  } else if (temp >= 10 && temp < 18) {
    advice.push("Wear a hoodie or light jacket");
  } else if (temp >= 18 && temp < 24) {
    advice.push("Regular clothing is fine");
  } else if (temp >= 24 && temp < 32) {
    advice.push("Wear light clothing like a T-shirt");
  } else if (temp >= 32) {
    advice.push("Very hot! Wear ultra-light clothes");
    advice.push("Stay hydrated");
  }

  // Weather condition modifiers
  if (desc.includes("rain") || cond.includes("rain")) {
    advice.push("Bring an umbrella");
    advice.push("Wear waterproof shoes");
  }

  if (desc.includes("snow") || cond.includes("snow")) {
    advice.push("Wear thermal gloves");
    advice.push("Wear a thick jacket");
  }

  if (desc.includes("wind") || cond.includes("wind")) {
    advice.push("Wear a windproof jacket");
  }

  if (desc.includes("sun") || cond.includes("clear") || cond.includes("sunny")) {
    advice.push("Wear sunglasses");
    advice.push("Wear a hat");
  }

  return advice;
}

