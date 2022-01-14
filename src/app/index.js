import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/users/UserSlice";

export default configureStore({
    reducer: {
        user: UserSlice
    }
})