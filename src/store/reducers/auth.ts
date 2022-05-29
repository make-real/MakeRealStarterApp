import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userData: {},
  sessionId: null,
  phoneNumber: '',
  isIntroDone: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStore: (state, action: PayloadAction<typeof initialState>) => {
      Object.entries(action.payload).map(([key, value]) => {
        (state as any)[key] = value;
      });
    },
  },
});

export const {setAuthStore} = authSlice.actions;

export default authSlice.reducer;
