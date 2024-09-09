import ListCard from "./ListCard"

const thingsToTry = [
    {
        id: 1,
        title: "Go Outside",
        notes:["maybe she just needs to poop!"],
    },
    {
        id: 2,
        title: "Fill Water(s)",
        notes:["Thirsty girsty"],
    },
    {
        id: 3,
        title: "Try Feeding Kibble",
        notes:["In a Treat Ball","In a Puzzle", "In a Cardboard Box (kibble rolled in newspapers", "In a Towel or Blanket","In one of her skinned and gutted toys!"],

    },
    {
        id: 4,
        title: "Training",
        notes:["This always at least tires her out a bit and gives you some time to figure out what else she might need"],
        link: "/tricks",
        linkText:"List of Current Tricks"
    },
    {
        id: 5,
        title: "Give her a Bone",
        notes:["chomp chomp"],
        link: "#bones",
        linkText:"List of Bones",
    },
    {
        id: 6,
        title: "Give her Peanut Butter",
        notes:["In the Green Thing","On the Licky Mat"],

    },
    {
        id: 7,
        title: "Try to Play",
        notes:["tuggy tuggy squeaky squeaky","if you run out of toys: feel free to got to dollarama and buy them for cheap, she loves to skin them"],

    },
    {
        id: 8,
        title: "New Toy",
        notes:["They're in the treat box in the closet"],

    },
    {
        id: 9,
        title: "Give Treats for Calmness",
        notes:["Get treats and sit where you’re trying to work/chill","tell her to lay down beside you", "give her treats for doing this ever like 30 seconds"," gradually increase time between treats until she’s asleep"],

    },
    {
        id: 10,
        title: "Bones in a Sock",
        notes:["put her old bones in an old sock!","or one of her most skinned toys"],
    },
]

function ListCards() {
    return <ListCard thingsToTry={thingsToTry} />
}

export default ListCards;