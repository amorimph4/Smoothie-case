import { Smoothies } from "./smoothies";

const smoothie = new Smoothies();
const args = process.argv;
console.log(smoothie.buildSmoothie(args[2]));
