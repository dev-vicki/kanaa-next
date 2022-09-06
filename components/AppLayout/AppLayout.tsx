import { ReactElement } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export function AppLayout({ children }: {children: ReactElement }) {
    return (
        <main className="page-wrapper">
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}