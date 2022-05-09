import Login from "../src/pages/auth/login";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProductProvider } from "@/contexts/ProductContext";
import { UserProvider } from "@/contexts/UserContext";

describe("Login", () => {
  it("render logo on sign", () => {
    const { container } = render(
      <UserProvider>
        <ProductProvider>
          <Login />
        </ProductProvider>
      </UserProvider>
    );
    expect(container.getElementsByClassName("logo").length).toBe(1);
  });
});
