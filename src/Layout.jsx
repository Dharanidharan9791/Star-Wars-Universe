import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<p>Loading Header...</p>}>
        <Header />
      </Suspense>
      <main className="flex-grow p-4">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Suspense fallback={<p>Loading Footer...</p>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;