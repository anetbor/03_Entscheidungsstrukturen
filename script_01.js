"use strict";

// Entscheidungsstrukturen | control flow

// const ageJohn = 29;
// const ageMark = 29;

// //Deklaration
// let isJohnOlder, isJohnEqual;

// //Test Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);


// //Ausgabe
// console.log("ageJohn:" + ageJohn);
// console.log("ageMark:" + ageMark);

// console.log("isJohnOLder:" + isJohnOlder);
// console.log("isJohnEqual:" + isJohnEqual);
// console.log("------------------");
// // -----------------------IF---------------------                 IF



// // if(false)
// // if(true)
// // if(isJohnOlder)
// if(isJohnOlder)
// {
//     console.log("John ist älter")
//     // console.log("John und Mark sind gleichaltrig")
// }
// if(isJohnEqual)

// {
//     console.log("John und Mark sind gleichaltrig")
//     console.log("---------------------")
// }

// //--------------------------------------------------
// if (isJohnOlder) {
//     console.log("John ist älter.");
// }
//  else {
//    console.log("John ist jünger.");
// } 

// // console.log( (isJohnOlder) ? "John is older" : "Mark is older");

// console.log("----------------------------------")
// //****************************************** */


// if (isJohnOlder)
//  {
//     console.log("John ist älter.");
// } 
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt.");
// }
// else
//  {
//    console.log("John ist jünger.");
// } 

//****************************************** */

// const firstName = "Jane";
// let job;
// job = "driver";
// job = "diver";
// job = "artist";
// job = "pilot";
// job = "teacher";

// switch (job) {
//     case "driver": //test auf ==
//         console.log(firstName + " fährt Taxi!");
//         break;

//     case "diver": //test auf ==
//         console.log(firstName + " taucht im Rhein! ");
//         break;

//     case "artist": //test auf ==
//         console.log(firstName + "  malt ein Bild! ");
//         break;

//     case "teacher": //test auf ==
//         console.log(firstName + "  unterrichtet! ");
//         break;

    
//     default:
//         console.log(firstName + " macht was anderes! ");
//         break;
// }


//********************************* */

const cond = true;
const a = 2;


switch (cond) {
    case (a == 1):
        console.log("a ist gleich 1!")
        break;

        case (a == 2):
            console.log("a ist gleich 2!")
            break;

            case (a == 3):
                console.log("a ist gleich 3!")
                break;
    
    

    default:
        console.log("a hat einen anderen Wert!")
        break;
}




