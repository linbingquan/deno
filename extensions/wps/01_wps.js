((window) => {
  const core = window.Deno.core;

  function hello(name) {
    return core.opSync("op_hello", { name });
  }

  window.__bootstrap.wps = {
    hello,
  };

})(this);
