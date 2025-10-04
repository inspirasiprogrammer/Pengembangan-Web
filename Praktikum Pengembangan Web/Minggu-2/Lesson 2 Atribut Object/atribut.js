let cat = {
  sound: 'meow',
  color: 'Black',
  species: 'Domestic cat',
  numPaws: 4
}; // cat is an object

cat.color = "Orange"
cat.eyeColor = "Blue"

console.log(cat.color) //Orange

delete cat.color; // Remove the color property

console.log(cat.color) //undefined