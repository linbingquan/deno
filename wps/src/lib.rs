use ferris_says::say;
use std::io::{stdout, BufWriter};

pub fn hello(name: String) {
  let stdout = stdout();
  let h = String::from("Hello ");
  let message = h + &name;
  let width = message.chars().count();

  let mut writer = BufWriter::new(stdout.lock());
  say(message.as_bytes(), width, &mut writer).unwrap();
}
