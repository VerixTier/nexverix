import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { mainNav } from "@/config/site";
import { projects } from "@/data/projects";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
const router = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    expect(router().matchRoutes("/").at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each([...mainNav.map((n) => n.to), "/technologies", "/privacy", "/terms"])("has a page for %s", (path) => {
    expect(router().matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("has a detail page for every project", () => {
    for (const p of projects) {
      expect(router().matchRoutes(`/work/${p.slug}`).at(-1)?.routeId).toBe("/work/$slug");
    }
  });
});
