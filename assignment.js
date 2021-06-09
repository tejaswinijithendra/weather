const START_LEVEL = 50;
const DISTANCE = 100;
const MILEAGE = 0.5;
let petrolStations = [];
let dist = 0;

function calculateMileage(kms){
    return 2 * kms;
}

function generatePetrolStation(){
    for(let i = 0; i< 6; i++){
        petrolStations.push(Math.round(Math.random() * 100))
    }
}

function step(){
    return Math.floor(Math.random() * 6) + 1;
}
let count = 0;
let remainingPetol = 0;
function steps(){
    const kms = step();
    dist = dist + kms;
    const mil = calculateMileage(kms);
    if(count == 0){
        generatePetrolStation()
        console.log(petrolStations)
        remainingPetol = START_LEVEL - mil;
    } else {
        remainingPetol = remainingPetol - mil;
    }

    if(petrolStations.includes(dist)){
        remainingPetol = remainingPetol + 30;
    }
    console.log(`Step ${count}, remaining petrol ${remainingPetol}, distance ${dist}`)
    count++;
    if(remainingPetol < 0){
        return;
    }else{
        steps();
    }

}

steps()


