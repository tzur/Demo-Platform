export function capitalize(string){
    return (string.charAt(0).toUpperCase() + string.slice(1));
}
export function positionConstantToPosition(string){
    if (string === CONSTANTS.FULL_TIME){
        return "Full Time"
    }else if(string === CONSTANTS.PARTIAL_TIME){
        return "Partial Time"
    }else{
        return "Limited Full Time"
    }
}
export const CONSTANTS = {
    FULL_TIME: "fullTime",
    PARTIAL_TIME: "partialTime",
    LIMITED_FULL_TIME: "limitedFullTime"
};