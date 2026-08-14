import { describe, expect, it } from "vitest";
import { buildApp } from "../src/app.js";

describe("POST /api/admin/users", () => {
  it("rejects a non-admin user attempting to grant admin", async () => {
    const app = buildApp();

    const response = await app.inject({
      method: "POST",
      url: "/api/admin/users",
      headers: {
        authorization: "Bearer live-token",
      },
      payload: {
        role: "admin",
      },
    });

    expect(response.statusCode).toBe(403);
    expect(response.json()).toEqual({
      ok: false,
    });
  });
});
