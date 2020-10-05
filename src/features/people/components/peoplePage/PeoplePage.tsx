import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCn } from 'bem-react-classname';
import { selectPeople, fetch as fetchPeople } from '../../redux/peopleSlice';
import PeopleTable from '../peopleTable';
import PersonForm from '../personForm';

const msgs = {
    fetchError: 'Ошибка получения данных!',
    fetching: 'Загрузка...'
};

const PeoplePage: FC = () => {
    const dispatch = useDispatch();

    const cn = createCn('people-page');

    const { isFetchError, isFetchSuccess, isFetching } = useSelector(selectPeople);

    useEffect(() => {
        if (isFetching || isFetchSuccess || isFetchError) {
            return;
        }
        dispatch(fetchPeople());
    }, [dispatch, isFetchError, isFetchSuccess, isFetching]);

    const message = isFetching ? msgs.fetching : isFetchError ? msgs.fetchError : '';

    return (
        <div className={cn()}>
            <div className={cn('person-form')}>
                <PersonForm />
            </div>
            <PeopleTable />
            {!!message && <div>{message}</div>}
        </div>
    );
};

export default PeoplePage;
