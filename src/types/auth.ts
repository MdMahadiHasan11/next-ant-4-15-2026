export type SigninCredentials = {
  email: string;
  password: string;
};
export interface OtpVerifyValues {
  token_id: string;
  otp: string;
}

export interface SignupFormValues {
  authData: {
    email: string;
    password: string;
    user_type: string;
    username: string;
    tempUser: {
      tempUserId: string;
      otp: string;
    };
  };
  b2c: {
    firstName: string;
    lastName: string;
    phone: string;
  };
}
