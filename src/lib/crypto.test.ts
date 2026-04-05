import { describe, it, expect } from "vitest";
import { encrypt, decrypt } from "./crypto";

describe("crypto", () => {
  const testData = JSON.stringify({
    accessToken: "test-access-token",
    refreshToken: "test-refresh-token",
  });

  describe("encrypt/decrypt", () => {
    it("should encrypt and decrypt data correctly", () => {
      const encrypted = encrypt(testData);
      const decrypted = decrypt(encrypted);

      expect(decrypted).toBe(testData);
    });

    it("should produce different ciphertext each time", () => {
      const encrypted1 = encrypt(testData);
      const encrypted2 = encrypt(testData);

      expect(encrypted1).not.toBe(encrypted2);
    });

    it("should throw on invalid encrypted data", () => {
      expect(() => decrypt("invalid-data")).toThrow();
    });
  });
});
