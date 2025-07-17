import * as Yup from "yup";
import {
  MOBILE_NUMBER_REGEX,
  NAME_REGEX,
  WHITE_SPACES_REGEX_PASSWORD,
  USERNAME_REGEX,
} from "../../Constants/RegexConstant";

export const userCreateSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .matches(WHITE_SPACES_REGEX_PASSWORD, "Please enter valid first name")
    .matches(NAME_REGEX, "First name is invalid")
    .min(2, "First name should be 2 to 40 characters long")
    .max(40, "First name should be 2 to 40 characters long"),
  last_name: Yup.string()
    .required("Last name is required")
    .matches(WHITE_SPACES_REGEX_PASSWORD, "Please enter valid last name")
    .matches(NAME_REGEX, "Last name is invalid")
    .min(2, "Last name should be 2 to 40 characters long")
    .max(40, "Last name should be 2 to 40 characters long"),
  email: Yup.string()
    .required("Email Id is required")
    .email("Email id is invalid"),
  phone: Yup.string()
    .required("Phone number is required")
    .test("check_all_zero", "Phone number is invalid", (val) => +val > 0)
    .matches(MOBILE_NUMBER_REGEX, "Phone number is invalid")
    .max(10, "Phone number should not exceed 10 digits"),
  username: Yup.string()
    .required("User name is required")
    .matches(USERNAME_REGEX, "Please enter valid username")
    .min(6, "Username should be 6 to 100 characters long")
    .max(100, "Username should be 6 to 100 characters long"),
});
