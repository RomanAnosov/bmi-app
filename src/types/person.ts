export enum Gender {
    Male = 'Male',
    Female = 'Female',
    unknown = 'unknown',
    NA = 'n/a'
}

export interface IPerson {
    /** The name of this person. */
    name: string;
    /** The height of the person in centimeters. */
    height: string;
    /**
     * The gender of this person. Either "Male", "Female"
     * or "unknown", "n/a" if the person does not have a gender.
     * */
    gender: Gender;
    /** The mass of the person in kilograms. */
    mass: string;
    key?: string;
}
