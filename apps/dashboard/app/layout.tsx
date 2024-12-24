import type { Metadata } from "next";
import { ThemeProvider } from "./providers";
import "@repo/ui/globals.css";

export const metadata: Metadata = {
  title: "Supabase Turborepo Boilerplate",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
