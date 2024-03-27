import { render } from "@testing-library/svelte";
import Footer from "./Footer.svelte";

describe("footer Component", () => {
  it("renders email text", () => {
    expect.assertions(1);
    const { getByText } = render(Footer);
    expect(getByText("Email")).toBeTruthy();
  });

  it("has the correct email address", () => {
    expect.assertions(2);
    const { container } = render(Footer);
    const link = container.querySelector(
      'a[href="mailto:coughlinscc33@gmail.com"]'
    );
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("has correct link to GitHub", () => {
    expect.assertions(2);
    const { container } = render(Footer);
    const link = container.querySelector('a[href="https://github.com/Scc33"]');
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("has correct link to LinkedIn", () => {
    expect.assertions(2);
    const { container } = render(Footer);
    const link = container.querySelector(
      'a[href="https://www.linkedin.com/in/sean-m-coughlin"]'
    );
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("has correct link to technical blog", () => {
    expect.assertions(2);
    const { container } = render(Footer);
    const link = container.querySelector(
      'a[href="https://blog.seancoughlin.me"]'
    );
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("has correct link to Resume", () => {
    expect.assertions(2);
    const { container } = render(Footer);
    const link = container.querySelector('a[href="Resume.pdf"]');
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });
});
