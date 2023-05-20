export const getRandomAnswer = (length: number) => {
    let min = 1
    let max = 9
    if (length === 2) {
        min = parseInt(min + '0')
        max = parseInt(max + '9')
    } else if (length === 3) {
        min = parseInt(min + '00')
        max = parseInt(max + '99')
    } else if (length === 4) {
        min = parseInt(min + '000')
        max = parseInt(max + '999')
    } 
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}
  