import { render } from "@testing-library/svelte";
import Header from "./Header.svelte";

describe("Header Component", () => {
  it("renders without crashing", () => {
    const { container } = render(Header, { y: 0 });
    expect(container).toBeTruthy();
  });

  it("renders all tabs with correct text and links", () => {
    const { getByText } = render(Header, { y: 0 });
    expect(getByText("About me")).toBeVisible();
    expect(getByText("GitHub")).toBeVisible();
    expect(getByText("LinkedIn")).toBeVisible();
    expect(getByText("Blog")).toBeVisible();
  });

  it("renders the Resume button with correct link", () => {
    const { getByText } = render(Header, { y: 0 });
    const resumeButton = getByText("Resume");
    expect(resumeButton.closest("a")).toHaveAttribute(
      "href",
      "assets/Resume.pdf",
    );
  });
});
