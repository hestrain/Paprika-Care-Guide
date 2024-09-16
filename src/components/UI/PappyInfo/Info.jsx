import InfoCard from "./InfoCard"

const information = [
    {
        id:1,
        dogName: "Paprika",
        birthday: "December 17 2021",
        photo:"/images/paprika Sept portrait.jpg",
        neutered:"yes",
        weight:"21lbs",
        notes:["very fearful, especially of new people and loud sounds", "flight risk if in new environment","takes pills 2x daily","wearing airtag","if she has too many of her drugs don't worry about it unless its like 10x more than she should have."],
        contacts:[
            {
                name:"HeatherEllen Strain",
                relationship:"Mom",
                phone:"(438) 838-9324",
                email:"hestrain@gmail.com"
            },
            {
                name:"Ella Kohlmann",
                relationship:"Mom",
                phone:"(438) 867-4101",
                email:"ellakohlmann@gmail.com"
            },
            {
                name:"Aurora Torok",
                relationship:"Auntie",
                phone:"(438) 531 8393",
                email:"borealis.torok@gmail.com"
            },
        ],
        microchip:{
            number:"987000008690550",
            company:"IDTag",
            website:"httsp://www.idtag.com",
            phone:"(866) 603-6863"
        },
        insurance:{
            number:"TC0002025190",
            company:"Trupanion",
            website:"https://members.trupanion.com",
            phone:"(855) 404-3901"
        },
        vets:[
            {
                id:1,
            reason:"General",
            clinic:"Hopital Veterinaire General MB",
            address:"3400 Rue Saint-Antoine O, Montréal, QC H4C 1A8",
            phone:"(514) 935 1888",
            notes:"go here for minor things"
        },
        {
            id:2,
            reason:"Behaviorist",
            clinic:"Clinique vétérinaire Dollard inc",
            address:"1551 Dollard Ave, Lasalle, Quebec H8N 1T3",
            phone:"(514) 365-3555",
            notes:"get her drugs from here etc"
        },
        {
            id:3,
            reason:"EMERGENCY",
            clinic:"CENTRE DMVet",
            address:"2300 54e Avenue, Lachine, QC H8T 3R2",
            phone:"1 800-463-8555",
            notes:"open 24/7 go here for emergency only, $250 for consultation"
        }
        ]

    },
]

function InfoCards() {
    return <InfoCard information={information} />
}

export default InfoCards;