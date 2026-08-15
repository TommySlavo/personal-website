import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://tomslavonia.com/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Tom Slavonia's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Tom Slavonia \| Robotics, Machine Learning &amp; Control<\/title>/i,
  );
  assert.match(html, /Waymo LiDAR Semantic Segmentation/);
  assert.match(html, /Visual-Inertial SLAM/);
  assert.match(html, /INCEPTION Lab/);
  assert.match(html, /slavoniatom@gmail\.com/);
  assert.match(html, /thomas-slavonia-resume\.pdf/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
