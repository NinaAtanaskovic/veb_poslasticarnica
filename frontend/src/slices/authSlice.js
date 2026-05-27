import { createSlice } from '@reduxjs/toolkit';

const initialState = {      //kada se app otvori gleda da li je neko ostao prijavljen (ako da vraca ga)
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')) //samo string pa je zato json
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { 
    setCredentials: (state, action) => {  //nakon uspesne prijave i reg cuva user info
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {          //da ga sklonimo iz localstoriga kad se odjavi
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;