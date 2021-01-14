((window) => {
  const core = window.Deno.core;

  function hello(name) {
    return core.jsonOpSync("op_hello", { name });
  }

  window.__bootstrap.wps = {
    hello,
  };

})(this);
