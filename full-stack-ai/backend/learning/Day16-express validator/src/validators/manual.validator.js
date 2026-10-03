const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
const INDIA_PHONE_REGEX = /^\+91[6-9]\d{9}$/;
const LOCAL_PHONE_REGEX = /^[6-9]\d{9}$/;

const isString = (v) => typeof v === "string";

export const validateRegister = (body = {}) => {
  const errors = [];

  // Email
  if (!isString(body.email) || !body.email.trim()) {
    errors.push({ field: "email", message: "Email is required!" });
  } else if (!EMAIL_REGEX.test(body.email.trim())) {
    errors.push({ field: "email", message: "Invalid email address!" });
  }

  // Phone
  if (!isString(body.phone) || !body.phone.trim()) {
    errors.push({ field: "phone", message: "Phone number is required!" });
  } else {
    const phone = body.phone.replace(/[\s-]/g, "");
    if (!INDIA_PHONE_REGEX.test(phone) && !LOCAL_PHONE_REGEX.test(phone)) {
      errors.push({ field: "phone", message: "Invalid phone number!" });
    }
  }

  // Password
  if (!isString(body.password) || !body.password) {
    errors.push({ field: "password", message: "Password is required!" });
  } else if (body.password.length < 8) {
    errors.push({ field: "password", message: "Password must be at least 8 characters!" });
  } else if (Buffer.byteLength(body.password, "utf8") > 72) {
    errors.push({ field: "password", message: "Password is too long!" });
  }

  return errors;
};

// Validation pass hone ke baad hi call hota hai
export const sanitizeRegister = ({ email, phone, password }) => {
  const cleanPhone = phone.replace(/[\s-]/g, "");
  return {
    email: email.trim().toLowerCase(),
    phone: LOCAL_PHONE_REGEX.test(cleanPhone) ? `+91${cleanPhone}` : cleanPhone,
    password,
  };
};
