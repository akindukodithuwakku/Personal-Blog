import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default MainLayout;

// This layout component uses the `Outlet` component from React Router to render child routes.
// This allows you to create a layout that can be shared across multiple routes.
// The `Header` component is included in the layout, so it will be displayed on all pages that use this layout.
// The `Outlet` component will render the child routes defined in your routing configuration.