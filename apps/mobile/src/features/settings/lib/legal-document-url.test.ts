import { describe, expect, it } from "vite-plus/test";

import { isLegalDocumentUrl } from "./legal-document-url";

describe("isLegalDocumentUrl", () => {
  it.each([
    "https://www.lxobsidianportal.co.za/legal",
    "https://www.lxobsidianportal.co.za/legal/",
    "https://www.lxobsidianportal.co.za/privacy-policy?source=app",
    "https://www.lxobsidianportal.co.za/terms-of-service#updates",
    "https://www.lxobsidianportal.co.za/security-policy",
  ])("allows a configured legal document: %s", (url) => {
    expect(isLegalDocumentUrl(url)).toBe(true);
  });

  it.each([
    "https://www.lxobsidianportal.co.za/download",
    "https://example.com/legal",
    "javascript:alert(1)",
    "not-a-url",
  ])("rejects a URL outside the legal-document allowlist: %s", (url) => {
    expect(isLegalDocumentUrl(url)).toBe(false);
  });
});
