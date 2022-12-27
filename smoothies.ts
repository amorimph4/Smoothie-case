export class Smoothies {
  private smoothiesType = {
    Classic: [
      "strawberry",
      "banana",
      "pineapple",
      "mango",
      "peach",
      "honey",
      "ice",
      "yogurt",
    ],
    "Forest Berry": [
      "strawberry",
      "raspberry",
      "blueberry",
      "honey",
      "ice",
      "yogurt",
    ],
    Freezie: [
      "blackberry",
      "blueberry",
      "black currant",
      "grape juice",
      "frozen yogurt",
    ],
    Greenie: [
      "green apple",
      "kiwi",
      "lime",
      "avocado",
      "spinach",
      "ice",
      "apple juice",
    ],
    "Vegan Delite": [
      "strawberry",
      "passion fruit",
      "pineapple",
      "mango",
      "peach",
      "ice",
      "soy milk",
    ],
    "Just Desserts": ["banana", "ice cream", "chocolate", "peanut", "cherry"],
  };

  public buildSmoothie(request: string): string[] {
    const requestArray = request.split(",");
    const smoothieType = requestArray.shift();

    const additionals: string[] = [];
    const subtracteds: string[] = [];

    for (let index = 0; index < requestArray.length; index++) {
      const item = requestArray[index];
      item.startsWith("+")
        ? additionals.push(item.substring(1, item.length))
        : subtracteds.push(item.substring(1, item.length));
    }

    if (!this.smoothiesType.hasOwnProperty(smoothieType)) {
      return [];
    }

    const ingredients = this.smoothiesType[smoothieType].concat(additionals);
    return this.subtractItens(ingredients, subtracteds).sort();
  }

  private subtractItens(ingredients: string[], subtracts: string[]): string[] {
    for (let index = 0; index < subtracts.length; index++) {
      const element = subtracts[index];
      if (ingredients.indexOf(element) >= 0) {
        ingredients.splice(ingredients.indexOf(element), 1);
      }
    }

    return ingredients;
  }
}
