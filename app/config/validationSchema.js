import * as yup from "yup";
export const adminProfile = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phoneNumber: yup.string().required("Mobile number is required"),
    // password: yup.string().required("Password is required"),
    confirmPassword: yup
        .string()
        .when("password", {
            is: (value) => !!value,
            then: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords must match")
                .required("Confirm password is required")
        })
});