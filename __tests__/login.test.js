import Login from "../src/pages/auth/login";
import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { ProductProvider } from "@/contexts/ProductContext";
import { UserProvider } from "@/contexts/UserContext";

describe("Login", () => {
  it("render logo on sign", () => {
    render(
      <UserProvider>
        <ProductProvider>
          <Login />
        </ProductProvider>
      </UserProvider>
    );
    const logo = screen.getByRole("logo");
    expect(logo).toHaveClass("logo");
  });

  it("test validate inputs", async () => {
    const { debug, container } = render(
      <UserProvider>
        <ProductProvider>
          <Login />
        </ProductProvider>
      </UserProvider>
    );

    const emailInput = container.querySelector("#identifier");
    const passwordInput = container.querySelector("#password");
    const registerButton = container.querySelector("#registerButton");

    fireEvent.change(emailInput, {
      target: { value: "" },
    });

    fireEvent.change(passwordInput, {
      target: { value: "" },
    });

    fireEvent.submit(registerButton);
    await waitFor(() => {
      expect(screen.getByText(/Şifre alanı zorunludur./i)).toBeTruthy();
    });
  });
});
