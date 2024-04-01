
export function isNameValid(name) {
    if (typeof name != 'string') return false;
    return name.length > 0;
}

export function isRepsValid(reps) {
    return reps > 0;
}

export function isWeightValid(weight) {
    return weight > 0;
}

export function isUnitValid(unit) {
    return unit === 'kgs' || unit === 'lbs';
}

export function isDateValid(date) {
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}
