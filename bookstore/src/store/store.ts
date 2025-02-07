import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer , persistStore, FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER } from "redux-persist";
import userReducer from "./slice/userSlice";

// Persist configuration for user .
const userPersistConfig = { key : 'user', storage, whitelist:  ['user', 'isLoggedIn', 'isEmailVerified'] };
