use deno_core::error::AnyError;
use deno_core::include_js_files;
use deno_core::op_sync;
use deno_core::Extension;
use deno_core::OpState;
use ferris_says::say;
use serde::Deserialize;
use std::io::{stdout, BufWriter};
use std::path::PathBuf;

pub fn init() -> Extension {
  Extension::builder()
    .js(include_js_files!(prefix "deno:extensions/wps", "01_wps.js"))
    .ops(vec![("op_hello", op_sync(op_hello))])
    .build()
}

pub fn get_declaration() -> PathBuf {
  PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("lib.deno_wps.d.ts")
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct HelloArgs {
  name: String,
}

fn op_hello(
  _state: &mut OpState,
  args: HelloArgs,
  _: (),
) -> Result<(), AnyError> {
  println!("args: {:?}", args);
  let name = &args.name;
  hello(name.to_string());
  Ok(())
}

pub fn hello(name: String) {
  let stdout = stdout();
  let h = String::from("Hello ");
  let message = h + &name;
  let width = message.chars().count();

  let mut writer = BufWriter::new(stdout.lock());
  say(message.as_bytes(), width, &mut writer).unwrap();
}
