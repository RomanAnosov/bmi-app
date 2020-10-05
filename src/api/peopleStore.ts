import axios from 'axios';
import config from '../config';
import { getPerson } from '../lib/personFactory';
import { IPerson } from '../types/person';

interface SwapiPeopleResponse {
    results: IPerson[];
}

export const read = () => {
    return axios.get<SwapiPeopleResponse>(config.swapi.people.read.url).then(({ data }) => data.results.map(getPerson));
};
