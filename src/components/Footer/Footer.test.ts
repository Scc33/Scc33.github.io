import { render } from "@testing-library/svelte";
import Footer from "./Footer.svelte";

describe("footer Component", () => {
  it("renders email text", () => {
    const { getByText } = render(Footer);
    expect(getByText("Email")).toBeTruthy();
  });

  it("has the correct email address", () => {
    const { container } = render(Footer);
    const link = container.querySelector(
      'a[href="mailto:coughlinscc33@gmail.com"]'
    );
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("has correct link to GitHub", () => {
    const { container } = render(Footer);
    const link = container.querySelector('a[href="https://github.com/Scc33"]');
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("has correct link to LinkedIn", () => {
    const { container } = render(Footer);
    const link = container.querySelector(
      'a[href="https://www.linkedin.com/in/sean-m-coughlin"]'
    );
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("has correct link to technical blog", () => {
    const { container } = render(Footer);
    const link = container.querySelector(
      'a[href="https://blog.seancoughlin.me"]'
    );
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("has correct link to personal blog", () => {
    const { container } = render(Footer);
    const link = container.querySelector('a[href="https://explores.world"]');
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("has correct link to Resume", () => {
    const { container } = render(Footer);
    const link = container.querySelector('a[href="Resume.pdf"]');
    expect(link).toBeTruthy();
    expect(link.getAttribute("target")).toBe("_blank");
  });
});
