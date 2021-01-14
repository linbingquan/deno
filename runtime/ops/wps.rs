use deno_core::error::AnyError;
use deno_core::serde_json;
use serde::Deserialize;
use deno_core::serde_json::json;
use deno_core::serde_json::Value;
use deno_core::OpState;
use deno_core::ZeroCopyBuf;
use wps::hello;

pub fn init(rt: &mut deno_core::JsRuntime) {
  super::reg_json_sync(rt, "op_hello", op_hello);
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct HelloArgs {
  name: String
}

fn op_hello(
  _state: &mut OpState,
  args: Value,
  _zero_copy: &mut [ZeroCopyBuf],
) -> Result<Value, AnyError> {
  let args: HelloArgs = serde_json::from_value(args)?;
  let name = args.name as String;
  hello(name);
  Ok(json!(()))
}
