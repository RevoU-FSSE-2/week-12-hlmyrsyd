import { useState } from "react";
import { Steps } from "antd";
import {
    UserOutlined,
    FormOutlined,
    LoginOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";
import {
    PersonalInformation,
    AddressInformation,
    AccountInformation,
    FinishButton,
} from "../../components";

interface PersonalFormDetails {
    fullName: string;
    emailAddress: string;
    date: string;
}

interface AddressFormDetails {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
}

interface AccountFormDetails {
    username: string;
    password: string;
}

interface MultiPageFormProps {}

const MultiPageForm: React.FC<MultiPageFormProps> = () => {
    const [current, setCurrent] = useState<number>(0);

    // To store data form for each steps
    const [personalDetails, setPersonalDetails] = useState<PersonalFormDetails>({
        fullName: "",
        emailAddress: "",
        date: "",
    });
    const [addressDetails, setAddressDetails] = useState<AddressFormDetails>({
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
    });
    const [accountDetails, setAccountDetails] = useState<AccountFormDetails>({
        username: "",
        password: "",
    });

    const personalDetailsHandle = (values: PersonalFormDetails) => {
        setPersonalDetails(values);
        setCurrent(1);
    };

    const addressDetailsHandle = (values: AddressFormDetails) => {
        setAddressDetails(values);
        setCurrent(2);
    };

    const accountDetailsHandle = (values: AccountFormDetails) => {
        setAccountDetails(values);
        setCurrent(3);
    };

    const forms = [
        <PersonalInformation
        onFinish={personalDetailsHandle}
        initialValues={personalDetails}
        />,
        <AddressInformation
        onFinish={addressDetailsHandle}
        initialValues={addressDetails}
        />,
        <AccountInformation
        onFinish={accountDetailsHandle}
        initialValues={accountDetails}
        />,
        <FinishButton />,
    ];

    const isStepDisable = (stepNumber: number) => {
        if (stepNumber === 0) {
        return false;
        }
        if (stepNumber === 1) {
        return (
            personalDetails.fullName === "" || personalDetails.emailAddress === ""
        );
        }
        if (stepNumber === 2) {
        return (
            addressDetails.streetAddress === "" ||
            addressDetails.city === "" ||
            addressDetails.state === "" ||
            addressDetails.zipCode === ""
        );
        }
        if (stepNumber === 3) {
        return accountDetails.username === "" || accountDetails.password === "";
        }
    };

    return (
        <div className="App">
        <Steps
            style={{ padding: "32px 16px" }}
            onChange={setCurrent}
            current={current}
        >
            <Steps.Step
            disabled={isStepDisable(0)}
            title="Personal Information"
            icon={<UserOutlined />}
            />
            <Steps.Step
            disabled={isStepDisable(1)}
            title="Address Information"
            icon={<FormOutlined />}
            />
            <Steps.Step
            disabled={isStepDisable(2)}
            title="Account Information"
            icon={<LoginOutlined />}
            />
            <Steps.Step
            disabled={isStepDisable(3)}
            title="Finish"
            icon={<CheckCircleOutlined />}
            />
        </Steps>
        {forms[current]}
        </div>
    );
};

export default MultiPageForm;