export const caloriesCalculator = (weight, calorieDeficit = 0, process = "") => {

    let calories = weight * 33;

    if (process === "loseWeight") calories -= calorieDeficit;
    if (process === "gainingWeight") calories += calorieDeficit;

    const protein = Math.floor(weight * 2.2);

    const proteinCalories = Math.floor(protein * 4);

    const fatCalories = Math.floor(calories * 0.3);

    const fat = Math.floor(fatCalories / 9);

    const carbohydrateCalories = Math.floor(calories - (proteinCalories + fatCalories));

    const carbohydrate = Math.floor(carbohydrateCalories / 4);

    return {
        calories,
        protein,
        proteinCalories,
        fat,
        fatCalories,
        carbohydrate,
        carbohydrateCalories
    }


}
