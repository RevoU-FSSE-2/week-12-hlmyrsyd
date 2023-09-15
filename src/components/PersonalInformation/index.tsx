import React from "react";
import { Form, Input, DatePicker, Button } from "antd";

interface PersonalFormProps {
    onFinish: (values: PersonalFormData) => void;
    initialValues: PersonalFormData;
}

interface PersonalFormData {
    fullName: string;
    emailAddress: string;
    date: string;
}

const PersonalInformation: React.FC<PersonalFormProps> = ({
    onFinish,
    initialValues,
}) => {
    return (
        <Form<PersonalFormData> onFinish={onFinish} initialValues={initialValues}>
        <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name" }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Email"
            name="emailAddress"
            rules={[
            {
                required: true,
                type: "email",
                message: "Please enter your email address",
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Date of Birth"
            name="date"
            rules={[
            {
                required: true,
                type: "date",
                message: "Please enter your date of birth",
            },
            ]}
        >
            <DatePicker />
        </Form.Item>
        <Button type="primary" htmlType="submit">
            Continue
        </Button>
        </Form>
    );
};

export default PersonalInformation;