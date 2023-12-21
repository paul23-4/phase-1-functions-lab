function distanceFromHqInBlocks(street){
    const headquarters = 42;
    return Math.abs(headquarters - street);
}
function distanceFromHqInFeet(street){
    const feetInBlock = 264; // Assuming 1 block = 264 feet
    const headquarters = 42;
    return Math.abs(headquarters - street) * feetInBlock;
}
function distanceTravelledInFeet(start, destination) {
    const feetInBlock = 264; // Assuming 1 block = 264 feet
    const distance = Math.abs(destination - start) * feetInBlock;
    return distance;
}
function calculatesFarePrice(start, destination) {
    const feetInBlock = 264;
    const distance = Math.abs(destination - start) * feetInBlock;

    if (distance <= 400) {
        return 0; // Free sample for distances up to 400 feet
    } else if (distance > 400 && distance <= 2000) {
        // Charges 2 cents per foot after the first 400 feet
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Charges $25 for distances over 2000 feet
    } else {
        return 'Cannot travel more than 2500 feet'; // Rides over 2500 feet not allowed
    }
}
function calculatesFarePrice(start, destination) {
    const feetInBlock = 264;
    const distance = Math.abs(destination - start) * feetInBlock;

    if (distance <= 400) {
        return 0; // Free sample for distances up to 400 feet
    } else if (distance > 400 && distance <= 2000) {
        // Charges 2 cents per foot after the first 400 feet
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Charges $25 for distances over 2000 feet
    } else {
        return 'cannot travel that far'; // Rides over 2500 feet not allowed
    }
} 
