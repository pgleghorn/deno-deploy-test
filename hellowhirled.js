addEventListener("fetch", (event) => {
  const response = new Response("Hello whirled", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
