import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import isSatSun from "./func.js";

const today = dayjs();
console.log(today.add(30, "day").format("MMMM D"));
console.log(today.subtract(30, "day").format("dddd"));



console.log(isSatSun(today.add(6, "day")));