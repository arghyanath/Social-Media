"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import {
    isServer,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
    if (isServer) {

        return makeQueryClient()
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient()
        return browserQueryClient
    }
}


export function Provider({ children }: { children: ReactNode }) {
    const queryClient = getQueryClient()
    return <SessionProvider refetchOnWindowFocus={false}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </SessionProvider>
}

