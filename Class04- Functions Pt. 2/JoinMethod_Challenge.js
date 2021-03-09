let superHeroes = [ ["Batman", "Bruce Wayne"],
                   ["Spiderman", "Peter Parker"],
                   ["The Flash", "Barry Allen"]
                  ];
//the map method does a one-to-one translation over the superHeroes array elements, going through each element and 
//then a callback function that passes a variable to it (because of map method) and subsitutes it into the revealArray.  
let secretIdentity = superHeroes.map(function(revealArray){
// The revealArray will be one array with two string elements that will join/merge the two strings using the keyword method.
  return revealArray.join(" is ");
});
//This makes the array one big string that is seperated by using the /n
console.log(secretIdentity.join("/n"));
//or
//This output will give you 3 string elements as an array of strings
//console.log(secreetIdentity);