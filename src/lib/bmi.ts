import { IPerson } from '../types/person';

export const getBMI = (person: IPerson) => {
    return (+person.mass / Math.pow(+person.height / 100, 2)).toFixed(2);
};
