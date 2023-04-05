const { default: mongoose } = require("mongoose");

let schema = mongoose.Schema({
    Revid: { type: String, required: true, unique: true },
    Thumbnail: { type: String, required: true },
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Date: { type: Array, default: [], required: true },
    Author: { type: Array, default: [], required: true },
    Type: { type: Array, default: [], required: true }
})

const ReviewsPage = new mongoose.model("ReviewsPage", schema)

// saveDoc1 = () => {
//     let P1 = new ReviewsPage({

//         Revid: "R1",
//         Thumbnail: "Images/review1.jpg",
//         Title: "NBA 2K23 Review",
//         Description: "Simultaneously a love letter to basketball fans and a microtransaction-infested disappointment.",
//         Date: [
//             "Images/Icons/cal.png",
//             "Sep 6, 2022"
//         ],
//         Author: [
//             "Images/Icons/auth.png",
//             "Aryaman Sital"
//         ],
//         Type: [
//             "Images/Icons/game.png",
//             "Games"
//         ]
//     })

//     P1.save()
// }

module.exports = ReviewsPage

// module.exports = Reviews