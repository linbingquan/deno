import { parse } from "https://deno.land/std@0.85.0/flags/mod.ts";
import { green } from "https://deno.land/std@0.85.0/fmt/colors.ts";

import { vue3, react, Template } from "./template.ts";

/**
 * WPS CLI 命令行入口
 */
async function main() {
  console.log(green("WPS CLI v0.1.0"));

  const wpsArgs = parse(Deno.args);

  if (wpsArgs.h ?? wpsArgs.help) {
    console.log(`
      使用：

        wps --template vue3        生成 vue3  的 helloworld 示例
        wps --template react       生成 react 的 helloworld 示例
    `);
  }

  if (wpsArgs.template === 'vue3') {
    await generator(vue3, 'vue3')
  } else if (wpsArgs.template === 'react') {
    await generator(react, 'react')
  }
}

/**
 * 生成 HTML 模板
 * @param templateDate 模板数据
 * @param templateName 模板名称
 */
async function generator(templateDate: Template, templateName: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(templateDate);
  await Deno.writeFile(`${templateName}.html`, data);
  console.log(`✅ 成功生成 ${templateName}.html`)
}

if (import.meta.main) {
  await main();
}
