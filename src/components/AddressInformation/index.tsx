import React from "react";
import { Form, Input, Button } from "antd";

interface AddressFormProps {
    onFinish: (values: AddressFormData) => void;
    initialValues: AddressFormData;
}

interface AddressFormData {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
}

const AddressInformation: React.FC<AddressFormProps> = ({
    onFinish,
    initialValues,
}) => {
    return (
        <Form<AddressFormData> onFinish={onFinish} initialValues={initialValues}>
        <Form.Item
            label="Street Address"
            name="streetAddress"
            rules={[
            { required: true, message: "Please enter your street address" },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="City"
            name="city"
            rules={[
            {
                required: true,
                message: "Please enter your city",
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="State"
            name="state"
            rules={[
            {
                required: true,
                message: "Please enter your state",
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Zip Code"
            name="zipCode"
            rules={[
            {
                required: true,
                message: "Please enter your zip code",
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
            Continue
        </Button>
        </Form>
    );
};

export default AddressInformation;