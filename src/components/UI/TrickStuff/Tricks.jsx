import TrickCard from "./TrickCard"

const tricks = [
    {
        id: 1,
        title: "Sit",
        level: "novice",
        notes:"",
        howTo:""
    },
    {
        id: 2,
        title: "Catch",
        level: "novice",
        notes:"",
        howTo:"throw a toy or treat at her"
    },
    {
        id: 3,
        title: "Crawl",
        level: "novice",
        notes:"",
        howTo:"ask for a down on somethign soft, then drag your finger from her to you across the surface"
    },
    {
        id: 4,
        title: "Chin Rest",
        level: "novice",
        notes:"",
        howTo:`hold out your hand near her head and say "rest"`
    },

    {
        id: 5,
        title: "Down",
        level: "novice",
        notes:"",
        howTo:""
    },
    {
        id: 6,
        title: "Front",
        level: "novice",
        notes:"she sits in front of ur knees while ur standing",
        howTo:"as if you're going to make her do a chin rest next to your knees"
    },
    {
        id: 7,
        title: "Hoop Jump",
        level: "novice",
        notes:"hoops are behind white cart. sometimes she is Not in the Mood",
        howTo:""
    },
    {
        id: 8,
        title: "Jump for Joy",
        level: "novice",
        notes:"jumps straight up in the air on 2 paws",
        howTo:"point to the ceiling and then move ur hand up"
    },
    {
        id: 9,
        title: "Kisses",
        level: "novice",
        notes:"gibe u a kis",
        howTo:"make kissy noise with your face close to her face. watch out!"
    },
    {
        id: 10,
        title: "Roll Out (the carpet)",
        level: "novice",
        notes:"rolls out ur yoga mat",
        howTo:""
    },
    {
        id: 11,
        title: "Spin/Twist",
        level: "novice",
        notes:"spin is counter clockwise, twist is clockwise",
        howTo:"like youre drawing a circle in the direction you want her to go with ur finger"
    },
    {
        id: 12,
        title: "Touch",
        level: "novice",
        notes:"touches her nose to your hand, or foot now",
        howTo:""
    },
    {
        id: 13,
        title: "Assisted Upright Walking",
        level: "intermediate",
        notes:"puts her paws on your forarm and walks towards you",
        howTo:" tap your arm and say paws up. some days she doesnt want to"
    },
    {
        id: 14,
        title: "Figure 8s Through Legs",
        level: "intermediate",
        notes:"",
        howTo:"stand with your legs kind of apart and her on your left side. say through!"
    },
    {
        id: 15,
        title: "Jump Through Arms",
        level: "intermediate",
        notes:"",
        howTo:"make your arms a circle and say hoop"
    },
    {
        id: 16,
        title: "Leg Weave",
        level: "intermediate",
        notes:"you know how to do this one",
        howTo:""
    },
    {
        id: 17,
        title: "Pick a Card",
        level: "intermediate",
        notes:"her cards are in the treat bin in the closet",
        howTo:""
    },
    {
        id: 18,
        title: "Roll Over",
        level: "intermediate",
        notes:"truly only works on bed/couch or at daycare",
        howTo:"whip (from whip ney ney) motion with right hand"
    },
    {
        id: 19,
        title: "Selfie",
        level: "intermediate",
        notes:"",
        howTo:"if shes on the couch/bed kneel in front of it with your back to her and tap your shoulder"
    },
    {
        id: 20,
        title: "Shake",
        level: "intermediate",
        notes:"",
        howTo:""
    },
    {
        id: 21,
        title: "Sit Pretty",
        level: "intermediate",
        notes:"",
        howTo:"right hand in a fist flat out/fingers down, then move your wrist so that your fingers are towards her but still in a fist"
    },
    {
        id: 22,
        title: "Back Stall",
        level: "advanced",
        notes:"",
        howTo:`kneel/go on all fours and tap your should while saying "upup"`
    },
    {
        id: 23,
        title: "Footsies",
        level: "advanced",
        notes:"its the walk on your feet one",
        howTo:`feet slightly apart say middle`
    },
    {
        id: 24,
        title: "Place",
        level: "advanced",
        notes:"gets her to go to the left side (to start weave or 8s or something)",
        howTo:`make a around your body motions with your index and middle fingers, say "around"`
    },
    {
        id: 25,
        title: "Play Piano",
        level: "advanced",
        notes:"shell basically play it as soon as you put it down. can also be ukulele",
        howTo:``
    },
    {
        id: 26,
        title: "Skateboard (front paws)",
        level: "advanced",
        notes:"all i usually have to do is say paws up, then move backwards so she can come towards me on it",
        howTo:``
    },
    {
        id: 27,
        title: "Tap Light",
        level: "advanced",
        notes:"light is in her white food cart somewhere",
        howTo:`point at it and say tap or hit it`
    },
    {
        id: 28,
        title: "Back Up",
        level: "advanced",
        notes:"",
        howTo:`wave your hand at her like you're shooing her an say "back back back"`
    },
    {
        id: 29,
        title: "Airplane",
        level: "expert",
        notes:"she expects to go around twice",
        howTo:`kneel on floor with her in front of you. put your arms out to your sides with elbows slightly bent. say jump! lower your arm slightly as shes jumping`
    },
    {
        id: 30,
        title: "Orbit",
        level: "expert",
        notes:"backwards around legs",
        howTo:`start with her at your left side, move your left arm towards her nose, then when she gets behind you switch to your right arm`
    },
    {
        id: 31,
        title: "Jump Through Knees",
        level: "expert",
        notes:"",
        howTo:`Stand with one foot making a hoop against the other leg and say jump`
    },

]

function TrickCards() {
    return <TrickCard tricks={tricks} />
}

export default TrickCards;