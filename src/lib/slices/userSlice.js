import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    name: "",
    email: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.name = action.payload.name;
        },
        logoutUser: (state) => {
            state.email = "",
                state.username = "",
                state.name = ""
        }
    }
}
);

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;