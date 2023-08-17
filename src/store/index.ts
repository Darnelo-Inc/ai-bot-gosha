import { configureStore } from "@reduxjs/toolkit"
import { chatApi } from "./Api/chatApi"
import { useDispatch } from "react-redux"

const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (gdm) => gdm().concat(chatApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
