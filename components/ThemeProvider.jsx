"use client"
// برای روشن وتیره کردن بک گراند

import {ThemeProvider as NextThemeProvider} from "next-themes"
export function ThemeProvider({children, ...props}){
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}