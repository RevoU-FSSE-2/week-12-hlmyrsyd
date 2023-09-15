import React from 'react';
import { Text } from '../../components';
import { Input, Button, Space } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'

interface PersonalInfo {
    name: string;
    email: string;
    dateOfBirth: string;
}

const initialValues = {
    name: '',
    email: '',
    dateOfBirth: ''
}

const validationSchema = yup.object({
    name: yup.string().required('Please Enter Your Full Name'),
    email: yup.string().email('Invalid Email!').required('Please Enter Your Email'),
    dateOfBirth: yup.string().matches(
        /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{2}$/,
        'Invalid date format! (dd-mm-yy)')
    .required('Please enter your Date of Birth (dd-mm-yy)'),
})

const PersonalInformation: React.FC = () => {

    const handleSubmit = (values: PersonalInfo) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
})

    return (
        <>
            <form onSubmit={formMik.handleSubmit} style={{ maxWidth: 600 }}>
            <div>
            <Text content="Full Name" />
            <Input name="name" placeholder="Please Input Your Name" autoComplete="name" 
            value={formMik.values.name} 
            onChange={formMik.handleChange('name')}
            status={formMik.errors.name && 'error'}/>

            {formMik.errors.name && (
                <>
                    <Text content='error:'/>{formMik.errors.name}
                </>
            )}

            </div>
            <div>
            <Text content="Email" />
            <Input name="email" placeholder="Please Input Your Email.." autoComplete="email" 
            value={formMik.values.email} 
            onChange={formMik.handleChange('email')}
            status={formMik.errors.email && 'error'} />

            {formMik.errors.email && (
                <>
                    <Text content='error:'/>{formMik.errors.email}
                </>
            )}
            </div>
            <div>
            <Text content="Date of Birth" />
            <Input name="dateOfBirth" placeholder="Please Input Your Birthdate.." value={formMik.values.dateOfBirth} 
            onChange={formMik.handleChange('dateOfBirth')}
            status={formMik.errors.dateOfBirth && 'error'} />

            {formMik.errors.dateOfBirth && (
                <>
                    <Text content='error:'/> {formMik.errors.dateOfBirth}
                </>
                )}
            </div>
            <Space direction="vertical">
                <Space wrap>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
                </Space>
            </Space>
        
        </form>
        </>
    )
}

export default PersonalInformation