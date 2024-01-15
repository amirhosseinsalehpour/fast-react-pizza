import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        {/* parent route elements to render their child route elements  */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
