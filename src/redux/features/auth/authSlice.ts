import { TFileDocument } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  user_type: string;
  is_change_password: boolean;
  roleBaseUserId: string;
  userId: string;
  userUniqueId: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: TFileDocument;
};

type AuthState = {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    login: (
      state,
      action: PayloadAction<{ userData: AuthUser; accessToken: string }>,
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload.userData;
      state.accessToken = action.payload.accessToken;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { login, logout, setAuthLoading } = authSlice.actions;
export default authSlice.reducer;
