var cities = [
  "Denver",
  "Boulder",
  "Black Hawk",
  "Aurora"
];

const list = document.querySelector('ul.list-cities');

let listItem;

for (let i = 0; i < cities.length; i++) {
  listItem = document.createElement("li");
  listItem.innerText = cities[i];
  list.append(listItem);
}
