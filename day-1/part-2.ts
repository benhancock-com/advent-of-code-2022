const input = await Deno.readTextFile("./input.txt");

const foodByElf = input
  .split("\n\n")
  .map((allFoodStr) => allFoodStr.split("\n").map((foodStr) => +foodStr));

const totalCaloriesByElf = foodByElf.map((allFood) => {
  let totalCalories = 0;
  allFood.forEach((food) => (totalCalories += food));
  return totalCalories;
});

const totalCaloriesByElfOrdered = totalCaloriesByElf
  .sort((a, b) => a - b)
  .reverse();

const topThreeElvesTotal = totalCaloriesByElfOrdered
  .slice(0, 3)
  .reduce((a, b) => a + b, 0);

console.log(
  `The top 3 elves are carrying a total of ${topThreeElvesTotal} calories`
);
