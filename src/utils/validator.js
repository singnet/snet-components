import validate from "validate.js";

const validator = validate;

const hasLowerCase = (value, options) => {
    if (/[a-z]/.test(value)) {
        return;
    }
    return options.message || "must contain a lowercase character";
};

const hasUpperCase = (value, options) => {
    if (/[A-Z]/.test(value)) {
        return;
    }
    return options.message || "must contain an uppercase character";
};

const hasNumber = (value, options) => {
    if (/[0-9]/.test(value)) {
        return;
    }
    return options.message || "must contain a number";
};

const hasAWSPasswordSplChar = (value, options) => {
    // eslint-disable-next-line no-useless-escape
    if (/[\^\$\*\.\[\]\{\}\(\)\?\-\"\!\@\#\%\&\/\,\>\<\'\:\;\|\_\~\`]/.test(value)) {
        return;
    }
    return options.message || "must contain a special character";
};

const array = (arrayItems, itemConstraints, key) => {
    if (!validate.isArray(arrayItems)) {
        return `${key} is not a valid array`;
    }
    const arrayItemErrors = arrayItems.reduce((errors, item) => {
        const error = validate(item, itemConstraints, { format: "grouped" });
        if (!!error) errors.push(error);
        return errors;
    }, []);
    return validate.isEmpty(arrayItemErrors) ? null : `^${JSON.stringify(arrayItemErrors)}`;
};

const validURL = (str, options) => {
    const httpPattern = new RegExp(
        /* eslint-disable-next-line */
        /https?:\/\/(www\.)?[-a-zA-ZА-Яа-я0-9@:%._\+~#=]{1,256}\.[a-zA-ZА-Яа-я0-9]{1,6}\b([-a-zA-ZА-Яа-я0-9!@:%_\+.~#?&\/\/=]*)$/gm
    );
    const worldWebPattern = new RegExp(
        /* eslint-disable-next-line */
        /(www\.)[-a-zA-ZА-Яа-я0-9@:%._\+~#=]{1,256}\.[a-zA-ZА-Яа-я0-9]{1,6}\b([-a-zA-ZА-Яа-я0-9!@:%_\+.~#?&\/\/=]*)$/gm
    );
    if (httpPattern.test(str) || worldWebPattern.test(str)) {
        return;
    }
    return options.message || `${str} is not a valid URL.`;
};

const validEmail = (value, options) => {
    const regexEmail = new RegExp(
        /* eslint-disable-next-line */
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (regexEmail.test(value)) {
        return;
    }
    return options.message || `${value}  is not valid email`;
};

const validPhone = (value, options) => {
    /* eslint-disable-next-line */
  const regexPhone = new RegExp(/^[\+]?[0-9]{10,15}$/gm);

    if (regexPhone.test(value)) {
        return;
    }
    return (
        options.message ||
        `${value} is not a valid phone number. Phone number should include plus sign, country code and area code.`
    );
};

const validDUNS = (value, options) => {
    /* eslint-disable-next-line */
  const regexDUNS = new RegExp(/^[0-9]{9}$/gm);

    if (regexDUNS.test(value)) {
        return;
    }
    return (
        options.message ||
        `${value} is not a valid DUNS number. DUNS number should include nine digits.`
    );
};

const validName = (value, options) => {
    /* eslint-disable-next-line */
  const regexOrganizationName = new RegExp(/^[-.a-zA-Z0-9_ ]*$/);

    if (regexOrganizationName.test(value)) {
        return;
    }
    return options.message || `${value} is not a valid.`;
};

validator.validators = {
    ...validate.validators,
    // custom validators
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasAWSPasswordSplChar,
    array,
    validURL,
    validEmail,
    validPhone,
    validName,
    validDUNS,
};

validator.options = { format: "flat" };
export default validator;
