import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      <h1>HEADER</h1>
      <Outlet />
    </div>
  );
}

export default AppLayout;
