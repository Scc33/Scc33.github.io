import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { formatLighthouseResults } from "./index";

describe("formatLighthouseResults", () => {
  const MOCK_VERCEL_PREVIEW_URL = "https://some.vercel.preview.url";

  const MOCK_LIGHTHOUSE_RESULT = `[
     {
       "url": "${MOCK_VERCEL_PREVIEW_URL}/en",
       "isRepresentativeRun": true,
       "summary": { "performance": 0.99, "accessibility": 0.98, "best-practices": 1, "seo": 0.96, "pwa": 0.71 }
     },
     {
       "url": "${MOCK_VERCEL_PREVIEW_URL}/en/download",
       "isRepresentativeRun": true,
       "summary": { "performance": 0.49, "accessibility": 0.75, "best-practices": 1, "seo": 0.90, "pwa": 0.71 }
     }
   ]`;

  const MOCK_LIGHTHOUSE_LINKS = `{
     "${MOCK_VERCEL_PREVIEW_URL}/en": "fake.url/to/result/1",
     "${MOCK_VERCEL_PREVIEW_URL}/en/download" : "fake.url/to/result/2"
   }`;

  let mockCore, originalEnv;

  beforeEach(() => {
    mockCore = { setOutput: vi.fn() };
    originalEnv = process.env;
    process.env = {
      ...process.env,
      LIGHTHOUSE_RESULT: MOCK_LIGHTHOUSE_RESULT,
      LIGHTHOUSE_LINKS: MOCK_LIGHTHOUSE_LINKS
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("formats stoplight colors correctly", () => {
    formatLighthouseResults({ core: mockCore });

    const expectations = [
      expect.stringContaining("🟢 90"),
      expect.stringContaining("🟠 75"),
      expect.stringContaining("🔴 49")
    ];

    expectations.forEach((expectation) => {
      expect(mockCore.setOutput).toBeCalledWith("comment", expectation);
    });
  });
});
