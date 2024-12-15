export const season1Prizes = [
  {
    name: "Clone Army",
    description: "Is it really that dark on this side?",
    image: "Season 1/Toy Bin - Clone Army.jpg",
  },
  //   {
  //     name: "Dark Beach",
  //     description: "Dolphins, Venom, and Batman #besties",
  //     image: "Season 1/Toy Bin - Dark Beach.jpg",
  //   },
  //   {
  //     name: "Dragon",
  //     description: "Such a pretty girl",
  //     image: "Season 1/Toy Bin - Dragon.jpg",
  //   },
  {
    name: "It Ain't Much",
    description: "But It's Honest Work",
    image: "Season 1/Toy Bin - Grand Prize.jpg",
  },
  {
    name: "Mechs and Shields",
    description: "Royal Bio Mechanical Rumble!",
    image: "Season 1/Toy Bin - Mechs and Shields.jpg",
  },
  {
    name: "Mechz",
    description: "I thought we were getting ice cream?",
    image: "Season 1/Toy Bin - Mechz.jpg",
  },
  {
    name: "Star Ships",
    description: "Zoom zoom, pew pew!",
    image: "Season 1/Toy Bin - Star Ships.jpg",
  },
  {
    name: "Wheels",
    description: "First, or last?",
    image: "Season 1/Toy Bin - Wheels.jpg",
  },
  //   {
  //     name: "Wings",
  //     description: "To the moon!",
  //     image: "Toy Bin - Wings.jpg",
  //   },
];

const season2Prizes = [
  {
    name: "Butthole Shield",
    description: "Don't Let It In!",
    image: "Season 2/Butthole Shield.jpg",
  },
  {
    name: "Check Please",
    description: "When you need to get out like now",
    image: "Season 2/Check Please.jpg",
  },
  {
    name: "Dinner Time",
    description: "Who let Rexie out?",
    image: "Season 2/Dinner Time.jpg",
  },
  {
    name: "Dont Tazz Me Bro",
    description: "It can smell your fear?",
    image: "Season 2/Dont Tazz Me Bro.jpg",
  },
//   {
//     name: "Final Boss",
//     description: "You Win! Skibidi Sigma",
//     image: "Season 2/Final Boss.jpg",
//   },
  {
    name: "Flower Power",
    description: "All the mushrooms he can eat...",
    image: "Season 2/Flower Power.jpg",
  },
  {
    name: "Fried Eggz",
    description: "Get 'em Sanic!",
    image: "Season 2/Fried Eggz.jpg",
  },
  {
    name: "Get In Line",
    description: "Line up for cigarette burns!",
    image: "Season 2/Get In Line.jpg",
  },
  //   {
  //     name: "He Wants To Touch It",
  //     description: "At least it's not a furry",
  //     image: "Season 2/He Wants To Touch It.jpg",
  //   },
  {
    name: "Hulk Smash",
    description: "Hulk Want Mush Mush",
    image: "Season 2/Hulk Smash.jpg",
  },
  {
    name: "Nintendo vs Sega",
    description: "A tale as old as time",
    image: "Season 2/Nintendo vs Sega.jpg",
  },
  {
    name: "Pretty Bird",
    description: "You think she has a girlfriend?",
    image: "Season 2/Pretty Bird.jpg",
  },
  //   {
  //     name: "Save the Child",
  //     description: "Don't play with your nuggies",
  //     image: "Season 2/Save the Child.jpg",
  //   },
  {
    name: "Street Pharmacist",
    description: "First hit is free",
    image: "Season 2/Street Pharmacist.jpg",
  },
  {
    name: "Save the Princess",
    description: "She puts out...",
    image: "Season 2/Save the Princess.jpg",
  },
  {
    name: "Step Step Step",
    description: "Death by Dubstep",
    image: "Season 2/Step Step Step.jpg",
  },
  {
    name: "Storm the Church",
    description: "Why are there children here?",
    image: "Season 2/Storm the Church.jpg",
  },
  {
    name: "The Armory",
    description: "Time to suite up!",
    image: "Season 2/The Armory.jpg",
  },
  {
    name: "The Creator",
    description: "Ten Legos in one?",
    image: "Season 2/The Creator.jpg",
  },
  {
    name: "The Elites",
    description: "Not your average clones",
    image: "Season 2/The Elites.jpg",
  },
  {
    name: "The Hero We Need",
    description: "Molded by the darkness, his parents are dead",
    image: "Season 2/The Hero We Need.jpg",
  },
  {
    name: "Thigh Master",
    description: "This looks like exercise equipment",
    image: "Season 2/Thigh Master.jpg",
  },
  //   {
  //     name: "Wanna Jump It",
  //     description: "WWWwwwweeeeeeEEEEEeeeeee...",
  //     image: "Season 2/Wanna Jump It.jpg",
  //   },
  //   {
  //     name: "Welcome To Potter Park",
  //     description: "Half man, half bird, half car",
  //     image: "Season 2/Welcome To Potter Park.jpg",
  //   },
  {
    name: "What Does the Fox Say",
    description: "Hacki hacki hacki ho",
    image: "Season 2/What Does the Fox Say.jpg",
  },
  {
    name: "Yoda Save Me",
    description: "Don't use the force on my butthole",
    image: "Season 2/Yoda Save Me.jpg",
  },
];

const generateFails = (count: number) => {
  return Array.from({ length: count }, () => ({
    name: "Fail",
    description: "Pet it with your eyes...",
    image: "Toy-Bin - Fail.png",
  }));
};

const fails = generateFails(5);

export const prizes = [...season1Prizes, ...season2Prizes, ...fails];
