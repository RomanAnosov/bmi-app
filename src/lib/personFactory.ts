import uniqueId from 'lodash/uniqueId';
import { Gender, IPerson } from '../types/person';

export const getPerson = (dto?: IPerson): IPerson => ({
    name: dto?.name || '',
    gender: dto?.gender || Gender.unknown,
    height: dto?.height || '',
    mass: dto?.mass || '',
    key: uniqueId()
});
