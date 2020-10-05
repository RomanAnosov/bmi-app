import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { Gender, IPerson } from '../types/person';
import { IPersonValidationErrors } from '../types/personValidationErrors';

const MAX_HEIGHT = 280;
const MAX_MASS = 500;
const onlyDigitRegExp = /^[\d]+$/;
const onlyCharactersRegExp = /^[а-яА-Яa-zA-Z]+$/;

const validationMessages = {
    required: 'Обязательное поле',
    invalid: 'Не корректные данные'
};

export const validatePerson = (person: IPerson): IPersonValidationErrors => {
    return pickBy(
        {
            name: validatePersonName(person.name),
            height: validateRange(person.height, 1, MAX_HEIGHT),
            mass: validateRange(person.mass, 1, MAX_MASS),
            gender: validateGender(person.gender)
        },
        identity
    );
};

export const validatePersonName = (name: string) => {
    if (!name) {
        return validationMessages.required;
    }
    const splittedFullName = name.split(' ');
    if (splittedFullName.length !== 2) {
        return validationMessages.invalid;
    }
    const [firstName, secondName] = splittedFullName;

    if (!firstName || !secondName) {
        return validationMessages.invalid;
    }

    if (!onlyCharactersRegExp.test(firstName) || !onlyCharactersRegExp.test(secondName)) {
        return validationMessages.invalid;
    }
};

export const validateRange = (value: string, min: number, max: number) => {
    if (!value) {
        return validationMessages.required;
    }

    if (!onlyDigitRegExp.test(value) || +value < min || +value > max) {
        return validationMessages.invalid;
    }
};

export const validateGender = (gender: Gender) => {
    if (gender !== Gender.Female && gender !== Gender.Male) {
        return validationMessages.required;
    }
};
