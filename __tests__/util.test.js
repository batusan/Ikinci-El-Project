import "@testing-library/jest-dom";
import { parseCookie } from "../src/utils/cookieParser";

const Auth_Token =
  "Auth_Token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjUyMDYwOTI3LCJleHAiOjE2NTQ2NTI5Mjd9.vX9SoEuoWx7247Vs8sOqFedHR3ZUyevPhQWCYIgr0EQ";

describe("Utils", () => {
  it("test cookie parse", () => {
    expect(parseCookie(Auth_Token)).toStrictEqual({
      Auth_Token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjUyMDYwOTI3LCJleHAiOjE2NTQ2NTI5Mjd9.vX9SoEuoWx7247Vs8sOqFedHR3ZUyevPhQWCYIgr0EQ",
    });
  });
});
