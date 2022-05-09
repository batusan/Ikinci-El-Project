import Home from "../src/pages/index";
import Navbar from "@/components/Common/Navbar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProductProvider } from "@/contexts/ProductContext";
import { UserProvider } from "@/contexts/UserContext";

describe("Index", () => {
  it("render a index", () => {
    render(
      <UserProvider>
        <ProductProvider>
          <Home />
        </ProductProvider>
      </UserProvider>
    );
  });

  it("render a banner", () => {
    const { container } = render(
      <UserProvider>
        <ProductProvider>
          <Home />
        </ProductProvider>
      </UserProvider>
    );
    expect(container.getElementsByClassName("Navbar").length).toBe(1);
  });

  it("render guest button", () => {
    render(
      <UserProvider>
        <ProductProvider>
          <Home />
        </ProductProvider>
      </UserProvider>
    );
    const button = screen.getByRole("button", {
      name: /Üye Girişi/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("render hesabim button", () => {
    render(
      <Navbar
        isAuth={{
          email: "test@gmail.com",
        }}
      />
    );

    const button = screen.getByRole("button", {
      name: /Hesabım/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("render logo", () => {
    const { container } = render(
      <UserProvider>
        <ProductProvider>
          <Home />
        </ProductProvider>
      </UserProvider>
    );
    expect(container.getElementsByClassName("Navbar_logo").length).toBe(1);
  });
});
