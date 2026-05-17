import { Outlet } from "react-router-dom";
import { AnimatedBackground } from "./AnimatedBackground";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PublicLayout() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
