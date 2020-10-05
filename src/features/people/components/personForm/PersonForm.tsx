import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { createCn } from 'bem-react-classname';
import { getPerson } from '../../../../lib/personFactory';
import { validatePerson } from '../../../../lib/validation';
import { Gender, IPerson } from '../../../../types/person';
import { add } from '../../redux/peopleSlice';
import './PersonForm.css';

export interface PersonFormProps {
    person?: IPerson;
}

const PersonForm: FC<PersonFormProps> = ({ person = getPerson() }) => {
    const cn = createCn('person-form');

    const dispatch = useDispatch();

    const handleSubmit = (person: IPerson, { resetForm }: FormikHelpers<IPerson>) => {
        dispatch(add(getPerson(person)));
        resetForm();
    };

    return (
        <div className={cn()}>
            <Formik<IPerson> initialValues={person} validate={validatePerson} onSubmit={handleSubmit}>
                {({ isValid, dirty }) => (
                    <Form className={cn('form')}>
                        <div className={cn('form-field')}>
                            <span>Имя Фамилия</span>
                            <Field name='name' />
                            <ErrorMessage name='name' component='div' />
                        </div>
                        <div className={cn('form-field')}>
                            <span>Пол</span>
                            <Field as='select' name='gender'>
                                <option value={Gender.unknown}>Не задан</option>
                                <option value={Gender.Male}>Мужской</option>
                                <option value={Gender.Female}>Женский</option>
                            </Field>
                            <ErrorMessage name='gender' component='div' />
                        </div>
                        <div className={cn('form-field')}>
                            <span>Рост (см)</span>
                            <Field name='height' />
                            <ErrorMessage name='height' component='div' />
                        </div>
                        <div className={cn('form-field')}>
                            <span>Вес (кг)</span>
                            <Field name='mass' />
                            <ErrorMessage name='mass' component='div' />
                        </div>
                        <div className={cn('form-field', { btn: true })}>
                            <button type='submit' disabled={!dirty || !isValid}>
                                Добавить
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PersonForm;
