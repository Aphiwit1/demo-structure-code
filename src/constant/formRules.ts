import { ErrorMessage } from "./errorMessage";

export const emailRule = {
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: ErrorMessage.invalidEmail,
  },
};

export const phoneNumberRule = {
  pattern: {
    value: /^(?! )[-0-9+() ]+$/,
    message: ErrorMessage.invalidPhoneNumber,
  },
};

export const requiredRule = {
  required: { value: true, message: ErrorMessage.required },
};

export const numberOnlyRule = {
  pattern: {
    value: /^\d*\.?\d*$/,
    message: ErrorMessage.numberOnly,
  },
};

export const validatePassword = (value: any) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!regex.test(value)) {
    return ErrorMessage.passwordFormat;
  }
  return true;
};
export const passwordRule = {
  ...requiredRule,
  minLength: {
    value: 8,
    message: ErrorMessage.passwordMinimumCharacters,
  },
  validate: validatePassword,
};

export const datePickerRequiredRule = {
  validate: (value: any) => {
    if (!value) {
      return ErrorMessage.required;
    }
    return undefined;
  },
};
