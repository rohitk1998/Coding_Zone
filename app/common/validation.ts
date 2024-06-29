import * as yup from "yup";
import { REGEX_PATTERN,VALIDATION_MESSAGE } from "./constants";

export const contactFormValidation = yup.object().shape({
  email: yup
    .string()
    .required(VALIDATION_MESSAGE.contactForm.emailRequired)
    .matches(
       REGEX_PATTERN.email ,
      VALIDATION_MESSAGE.contactForm.isEmailValid
    ),
  name : yup
    .string()
    .required(VALIDATION_MESSAGE.contactForm.nameRequired)
    .matches(REGEX_PATTERN.stringWithSpecifiedLength,
     VALIDATION_MESSAGE.contactForm.isNameValidLength
    ),
    phoneNumber : yup
    .string()
    .required(VALIDATION_MESSAGE.contactForm.phoneNumberRequired)
    .matches(REGEX_PATTERN.numberRegex , "Please enter numbers")
    .min(REGEX_PATTERN.minPhoneLength,
      VALIDATION_MESSAGE.contactForm.isPhoneNumberValid
    )
    .max(REGEX_PATTERN.maxPhoneLength,
      VALIDATION_MESSAGE.contactForm.isPhoneNumberValid
    )
    ,
    message : yup
    .string()
    .required(VALIDATION_MESSAGE.contactForm.messageRequired)
    ,
});
