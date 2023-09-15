import React from 'react';
import { Password, Text, SubmitButton } from '../../components'
import { Input } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'

interface AccountInfo {
    username: string;
    password: string;
}

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object({
    username: yup.string().required('Please Enter Your Username'),
    password: yup.string().required('Please Select Your Password'),
})


const AccountInformation: React.FC = () => {

    const handleSubmit = (values: AccountInfo) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
    <form style={{ maxWidth: 600 }} onSubmit={formMik.handleSubmit}> 
    <div>
        <Text content="Username" />
        <Input name="username" placeholder="Username.." autoComplete='username'            
        value={formMik.values.username} 
        onChange={formMik.handleChange('username')}
        status={formMik.errors.username && 'error'}/>

        {formMik.errors.username && (
            <>
            <Text content='error:'/>{formMik.errors.username}
            </>
        )}
    </div>

    <div>
        <Text content="password" />
        <Password 
        value={formMik.values.password} 
        onChange={formMik.handleChange('password')}
        status={formMik.errors.password && 'error'}/>

        {formMik.errors.password && (
            <>
                <Text content='error:'/> {formMik.errors.password}
            </>
        )}
    </div>

    <SubmitButton />
    </form>
    )

};

export default AccountInformation;