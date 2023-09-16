import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const chatApi = createApi({
  reducerPath: "chat",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://185.46.8.130/api/v1/",
  }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (message) => ({
        url: "chat/send-message",
        method: "POST",
        body: { message },
      }),

      transformResponse: (response: ArrayBuffer) => {
        const chunks: Uint8Array[] = [new Uint8Array(response)]
        let result = ""
        for (const chunk of chunks) {
          const decodedChunk = new TextDecoder().decode(chunk)
          const parsedChunk = JSON.parse(decodedChunk)
          if (parsedChunk.status === "done") {
            break
          }
          result += parsedChunk.value
        }
        return result
      },
    }),
  }),
})

export const { useSendMessageMutation } = chatApi
