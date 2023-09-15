import React from 'react';
import { Address, ZipCode, State, Text } from '../../components';
import { Input, Space, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'
interface AddressInfo {
    address: string,
    state: string,
    city: string,
    zipcode: number
}

const initialValues = {
    address: '',
    state: '',
    city: '',
    zipcode: 0
}

const validationSchema = yup.object({
    address: yup.string().required('Please Enter Your Street Address'),
    state: yup.string().required('Please Select Your State'),
    city: yup.string().required('Please Select Your City'),
    zipcode: yup.number().required('Please Enter your Zip Code'),
})


const AddressInformation: React.FC = () => {

    const handleSubmit = (values: AddressInfo) => {
        console.log(values)
    }

    const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema
})

    return (
        <form onSubmit={formMik.handleSubmit} style={{ maxWidth: 600 }}>
            <div>  
            <Text content="Address" />
            <Address placeholder="Please Input Your Address" autoComplete='street-address'
            value={formMik.values.address} 
            onChange={formMik.handleChange('address')}
            status={formMik.errors.address && 'error'} />

            {formMik.errors.address && (
                <>
                    <Text content='error:'/> {formMik.errors.address}
                </>
            )}
            </div>

            <div>
            <Text content="State" />
            <State 
            value={formMik.values.state} 
            onChange={formMik.handleChange('state')}
            status={formMik.errors.state && 'error'} />

            {formMik.errors.state && (
                <>
                    <Text content='error:'/> {formMik.errors.state}
                </>
            )}
            </div>

            <div>
                <Text content="City" />
                <Input name="city" placeholder="Please Input Your City" autoComplete='address-level2'
                value={formMik.values.city} 
                onChange={formMik.handleChange('city')}
                status={formMik.errors.city && 'error'}/>

                {formMik.errors.city && (
                <>
                    <Text content='error:'/> {formMik.errors.city}
                </>
            )}
            </div>  
            <div>
            <Text content="Zip Code" />
            <ZipCode placeholder="Zip Code.." autoComplete='postal-code'
            value={formMik.values.zipcode}
            onChange={(value) => {
                formMik.handleChange('zipcode')(String(value));
            }}
            status={formMik.errors.zipcode && 'error'}/>

                {formMik.errors.zipcode && (
                <>
                    <Text content='error:'/> {formMik.errors.zipcode}
                </>
                )}
            </div>

        <Space wrap>
            <Button type={'primary'} htmlType={"submit"}>Submit</Button>
        </Space>
            
        </form>
    )
}

export default AddressInformation