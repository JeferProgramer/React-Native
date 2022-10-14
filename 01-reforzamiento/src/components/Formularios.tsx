import React from 'react'
import useForm from '../hooks/useForm';

const Formularios = () => {

    const {formulario, MyOnChange, email, password} = useForm({
        email: "test@test.com",
        password: '123456'
    });

    return (
        <div>
            <h3>Formularios</h3>
            <input 
                type="text" 
                className='form-control'
                placeholder='Email'
                value={email}
                onChange={ ({target}) => MyOnChange(target.value,
                    'email')}
            />
            <input 
                type="text" 
                className='form-control mt-2 mb-2'
                placeholder='Password'
                value={password}
                onChange={ ({target}) => MyOnChange(target.value,
                    'password')}
            />
            <code>
                <pre>{JSON.stringify(formulario, null,2)}</pre>
            </code>
        </div>
    )
}

export default Formularios
