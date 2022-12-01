const input = await Deno.readTextFile("./input.txt");

const foodByElf = input
  .split("\n\n")
  .map((allFoodStr) => allFoodStr.split("\n").map((foodStr) => +foodStr));

const totalCaloriesByElf = foodByElf.map((allFood) => {
  let totalCalories = 0;
  allFood.forEach((food) => (totalCalories += food));
  return totalCalories;
});

let highestCalorieElfIndex = 0;
let highestCalorieElfCalories = 0;

totalCaloriesByElf.forEach((calories, i) => {
  if (calories > highestCalorieElfCalories) {
    highestCalorieElfCalories = calories;
    highestCalorieElfIndex = i;
  }
});

console.log(`The highest calorie elf is ${highestCalorieElfIndex + 1}`);

console.log(
  `The highest calorie elf has ${highestCalorieElfCalories} calories`
);
