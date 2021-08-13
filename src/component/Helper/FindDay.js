export default function Day(val) {
  let day;
  if (val === 0) {
    day = "Sunday";
  } else if (val === 1) {
    day = "Monday";
  } else if (val === 2) {
    day = "Tuesday";
  } else if (val === 3) {
    day = "Wednesday";
  } else if (val === 4) {
    day = "Thursday";
  } else if (val === 5) {
    day = "Friday";
  } else {
    day = "Saturday";
  }
  return day;
}
