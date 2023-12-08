import { render } from "@testing-library/svelte";
import Header from "./Header.svelte";

describe("header Component", () => {
  it("renders at y=0 without crashing", () => {
    const { container } = render(Header, { y: 0 });
    expect(container).toBeTruthy();
  });

  it("renders past y=0 without crashing", () => {
    const { container } = render(Header, { y: 10 });
    expect(container).toBeTruthy();
  });

  it("renders all header text with correct text", () => {
    const { getByText } = render(Header, { y: 0 });
    expect(getByText("About me")).toBeVisible();
    expect(getByText("GitHub")).toBeVisible();
    expect(getByText("LinkedIn")).toBeVisible();
    expect(getByText("Technical Blog")).toBeVisible();
    expect(getByText("Personal Blog")).toBeVisible();
  });

  it("renders all header text with correct links", () => {
    const { getByText } = render(Header, { y: 0 });
    expect(getByText("About me").closest("a")).toHaveAttribute(
      "href",
      "#about",
    );
    expect(getByText("GitHub").closest("a")).toHaveAttribute(
      "href",
      "https://github.com/Scc33",
    );
    expect(getByText("LinkedIn").closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/sean-m-coughlin/",
    );
    expect(getByText("Technical Blog").closest("a")).toHaveAttribute(
      "href",
      "https://blog.seancoughlin.me",
    );
    expect(getByText("Personal Blog").closest("a")).toHaveAttribute(
      "href",
      "https://explores.world",
    );
  });

  it("renders the Resume button with correct link", () => {
    const { getByText } = render(Header, { y: 0 });
    const resumeButton = getByText("Resume");
    expect(resumeButton.closest("a")).toHaveAttribute("href", "Resume.pdf");
  });
});
