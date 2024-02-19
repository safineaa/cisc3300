const cats = [
  { name: 'Charlie', adoptionStatus: 'available' },
  { name: 'Lily', adoptionStatus: 'not-available' },
  { name: 'Coco', adoptionStatus: 'available' },
  { name: 'Oreo', adoptionStatus: 'not-available' },
  { name: 'Luna', adoptionStatus: 'available' },
  { name: 'Milo', adoptionStatus: 'available' },
  { name: 'Lola', adoptionStatus: 'not-available' },
  { name: 'Leo', adoptionStatus: 'available' },
  { name: 'Willow', adoptionStatus: 'available' },
  { name: 'Bella', adoptionStatus: 'not-available' },
  { name: 'Max', adoptionStatus: 'available' },
  { name: 'Cleo', adoptionStatus: 'available' },
  { name: 'Lucy', adoptionStatus: 'not-available' },
  { name: 'Daisy', adoptionStatus: 'available' },
];


let availableCats = [];

cats.forEach(cat => {
  if (cat.adoptionStatus === 'available') 
  {
      
      availableCats.push(cat.name);
  }
});

let adoptionSentence = `The cats currently available for adoption are: ${availableCats.join(', ')}.`;

console.log(adoptionSentence);

