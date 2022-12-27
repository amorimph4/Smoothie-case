import { Smoothies } from "./smoothies";

describe("Smoothies test", () => {
  it("create `Classic` smoothie", () => {
    const smoothie = new Smoothies();
    const result = smoothie.buildSmoothie("Clasic");

    expect(smoothie).toBeInstanceOf(Smoothies);
    expect(result).toEqual([]);
  });

  it("create `Clasic` smoothie", () => {
    const smoothie = new Smoothies();
    const result = smoothie.buildSmoothie("Classic");

    expect(smoothie).toBeInstanceOf(Smoothies);
    expect(result).toEqual([
      "banana",
      "honey",
      "ice",
      "mango",
      "peach",
      "pineapple",
      "strawberry",
      "yogurt",
    ]);
  });

  it("create `Classic` plus `chocolate`", () => {
    const smoothie = new Smoothies();
    const result = smoothie.buildSmoothie("Classic,+chocolate");

    expect(smoothie).toBeInstanceOf(Smoothies);
    expect(result).toEqual([
      "banana",
      "chocolate",
      "honey",
      "ice",
      "mango",
      "peach",
      "pineapple",
      "strawberry",
      "yogurt",
    ]);
  });

  it("create `Classic` minus `strawberry`", () => {
    const smoothie = new Smoothies();
    const result = smoothie.buildSmoothie("Classic,-strawberry");

    expect(smoothie).toBeInstanceOf(Smoothies);
    expect(result).toEqual([
      "banana",
      "honey",
      "ice",
      "mango",
      "peach",
      "pineapple",
      "yogurt",
    ]);
  });

  it("create `Classic` plus `chocolate` minus `strawberry`", () => {
    const smoothie = new Smoothies();
    const result = smoothie.buildSmoothie("Classic,+chocolate,-strawberry");

    expect(smoothie).toBeInstanceOf(Smoothies);
    expect(result).toEqual([
      "banana",
      "chocolate",
      "honey",
      "ice",
      "mango",
      "peach",
      "pineapple",
      "yogurt",
    ]);
  });

  it("create `Just Desserts` smoothie without `ice cream` and `peanut`", () => {
    const smoothie = new Smoothies();
    const result = smoothie.buildSmoothie("Just Desserts,-ice cream,-peanut");

    expect(smoothie).toBeInstanceOf(Smoothies);
    expect(result).toEqual(["banana", "cherry", "chocolate"]);
  });

  it("create a smoothie without ingredients", () => {
    const smoothie = new Smoothies();
    const result = smoothie.buildSmoothie(
      "Just Desserts,-banana,-cherry,-chocolate,-ice cream,-peanut"
    );

    expect(smoothie).toBeInstanceOf(Smoothies);
    expect(result).toEqual([]);
  });

  it("exclude unused ingredients", () => {
    const smoothie = new Smoothies();
    const result = smoothie.buildSmoothie("Classic,-banana,-mango,-peanut");

    expect(smoothie).toBeInstanceOf(Smoothies);
    expect(result).toEqual([
      "honey",
      "ice",
      "peach",
      "pineapple",
      "strawberry",
      "yogurt",
    ]);
  });
});
