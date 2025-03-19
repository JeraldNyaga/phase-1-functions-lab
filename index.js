function distanceFromHqInBlocks(val){
    return Math.abs(parseInt(val,10) - 42)
}

function distanceFromHqInFeet(val){
    return parseInt(distanceFromHqInBlocks(val) * 264)
}

function distanceTravelledInFeet(start, end){
    return parseInt(Math.abs(end - start) * 264, 10)
}

function calculatesFarePrice(start, destination){
    const distanceFeet  = distanceTravelledInFeet(start, destination);

    if(distanceFeet <= 400){
        return 0
    } else if(distanceFeet > 400 && distanceFeet <= 2000){
        return (distanceFeet - 400) * 0.02
    } else if(distanceFeet > 2000 && distanceFeet <=2500){
        return 25
    } else{
        return `cannot travel that far`
    }
}