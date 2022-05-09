import Account from "../src/pages/account";
import "@testing-library/jest-dom";
import { waitFor, render, screen } from "@testing-library/react";
import { ProductProvider } from "@/contexts/ProductContext";
import { UserProvider } from "@/contexts/UserContext";

const props = {
  isAuth: {
    email: "test@gmail.com",
  },
};

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>;
    },
  };
});

describe("Account", () => {
  it("check title for guest users redirected main page", async () => {
    render(
      <UserProvider>
        <ProductProvider>
          <Account {...props} />
        </ProductProvider>
      </UserProvider>,
      { container: document.head }
    );

    expect(document.title).toBe("Hesabım | İkinci El Project");
  });

  it("check email displaying on header", () => {
    render(
      <UserProvider>
        <ProductProvider>
          <Account {...props} />
        </ProductProvider>
      </UserProvider>
    );

    expect(screen.getByText(`test@gmail.com`)).toBeInTheDocument();
  });
});
