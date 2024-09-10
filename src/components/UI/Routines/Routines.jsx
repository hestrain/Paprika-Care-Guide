import RoutineCard from "./RoutineCard"

const routines = [
    {
        title: "drugs",
        time: "AM",
        notes:["1 x 100mg Gabapentin", "1/4 80mg ClomiCalm", "inside half a pill pocket"],
        id:1,
        order:1
    },
    {
        title: "Outside for a Pee",
        time: "AM",
        notes:["she will def have to pee before you leave, but its ok if no poop"],
        id:2,
        order:2,
    },
    {
        title:"feed the beast",
        time:"AM",
        notes:["one green scoop of kibble","a sprinkle of treat dust","one or two of the relaxation treats crumpled on top","depending how you're feeding it to her, add water"],
        id:3,
        order:3
    },
    {
        title: "drugs",
        time: "PM",
        notes:["1 x 100mg Gabapentin", "1/4 80mg ClomiCalm", "inside half a pill pocket"],
        id:5,
        order:1
    },
    {
        title: "Outside for a Pee",
        time: "PM",
        notes:["before bed she should pee AND poop ideally, otherwise she might wake you up at night"],
        id:4,
        order:2
    },
    {
        title:"feed the BEASTS",
        time:"PM",
        notes:["TOMMY: 1/2 a can of wet food with a lil water","PAPRIKA: Same as AM, but with a little bit of Tommy food on top, OR if shes already eaten, she can just have a lil bit of Tommy food :)"],
        id:6,
        order:3
    },
    {
        title:"Refill Drugs",
        time: "weekend",
        notes: ["Take out the pill cutter, pill case, Colmicalm container, and Gabapentin container", "set yourself up on a solid surface","remove the lids from her pill case (open all the days at once and pull up gently from each end","open the gabapentin bottle and put one pill in every slot on the pill case","open the clomicalm and take out 7 half pills or 4 whole pills","if needed break the whole pills in half alog the middle line","cut the half pills in an additional half using the pill cutter","put one 1/4 pill into each slot on the pill case","carefully replace the lids and close them all tightly","wow you did it"],
        id:7
    },
    {
        title:"Restock Cat Wet Food",
        time: "weekend",
        notes: ["Take down 4 cans of cat food from on top of the kitchen shelves","put them in the salad bowl shelf"],
        id:8
    }
]

function RoutineCards() {
    return <RoutineCard routines={routines} />
}

export default RoutineCards;