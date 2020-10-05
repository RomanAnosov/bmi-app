import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { createCn } from 'bem-react-classname';
import { getBMI } from '../../../../lib/bmi';
import { selectPeople } from '../../redux/peopleSlice';

const PeopleTable: FC = () => {
    const { list } = useSelector(selectPeople);

    const cn = createCn('people-table');

    return (
        <table className={cn()}>
            <thead>
                <tr>
                    <th className={cn('cell', { name: true })}>Имя</th>
                    <th>Пол</th>
                    <th>Рост (см)</th>
                    <th>Вес (кг)</th>
                    <th>BMI</th>
                </tr>
            </thead>
            <tbody>
                {list.map((person) => (
                    <tr key={person.key}>
                        <td className={cn('cell', { name: true })}>{person.name}</td>
                        <td>{person.gender}</td>
                        <td>{person.height}</td>
                        <td>{person.mass}</td>
                        <td>{getBMI(person)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PeopleTable;
