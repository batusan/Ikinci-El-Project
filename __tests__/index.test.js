import Home from "../src/pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProductProvider } from "@/contexts/ProductContext";
import { UserProvider } from "@/contexts/UserContext";

describe("Index", () => {
  beforeEach(() => {
    render(
      <UserProvider>
        <ProductProvider>
          <Home />
        </ProductProvider>
      </UserProvider>
    );
  });

  it("renders a index", () => {});

  it("renders a banner", () => {
    const banner = screen.getByRole("img");
    expect(banner).toHaveAttribute("alt", "Banner Image");
  });

  it("render guest button", () => {
    const button = screen.getByRole("button", {
      name: /Üye Girişi/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("render logo", () => {
    const logo = screen.getByRole("logo");
    expect(logo).toHaveClass("Navbar_logo");
  });
});
