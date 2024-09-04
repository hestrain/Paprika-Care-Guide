import BoneCard from "./BoneCard"

const bones = [
    {
        id: 1,
        title: "Meat Bone",
        storedIn:"freezer",
        notes: "check in after 20-30 mins to make sure she doesnt eat the bone once she gets the meat off",
        perPack:6,
        price:11.99,
        quantity: 11
    },
    {
        id: 2,
        title: "Trachea",
        storedIn:"freezer",
        notes: "has frozen wet food in it, so should last a WHILE. Give in place of a meal",
        perPack:1,
        price:4.99,
        quantity: 3
    },
    {
        id: 3,
        title: "Gristle Bone",
        storedIn:"closet",
        notes: "messy",
        perPack:1,
        price:3.49,
        quantity: 1
    },
    {
        id: 4,
        title: "Collagen Stick",
        storedIn:"closet",
        notes: "usually gets bored before she fully finishes them",
        perPack:6,
        price:30,
        quantity: 0
    },
    {
        id: 5,
        title: "Bully Stick",
        storedIn:"closet",
        notes: "you know this one",
        perPack:1,
        price:11.99,
        quantity: 0
    },
];

function BoneCards() {
    return <BoneCard bones={bones} />
}

export default BoneCards;