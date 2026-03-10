import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { Nav } from "./components/Nav";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StoreProvider } from "./StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <section className={styles.container}>
              <Nav />
              <main className={styles.main}>{children}</main>
              <footer className={styles.footer}>SPA Project by Turning</footer>
            </section>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
