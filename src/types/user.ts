import { TFileDocument } from "./global";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  id: string;
  userUniqueId: string;
  email: string;
  user_type: string;
  username: string;
  is_deleted: boolean;
  is_email_verified: boolean;
  is_online: boolean;
  is_change_password: boolean;
  is_main_account: boolean;
  verification_status: string;
  status: string;
  account_type: string;
  secret_key: any;
  createdAt: string;
  updatedAt: string;
  last_login: any;
  author_id: any;
  agency_id: any;
  role_id: any;
  admin: any;
  b2b: any;
  b2c: B2c;
}

export interface B2c {
  id: string;
  user_id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: any;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  is_deleted: boolean;
  image: TFileDocument;
}
