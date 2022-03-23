import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import fs from "fs";
import path from "path";

export async function getPostData(id) {
  const fullPath = path.join(process.cwd(), "pages", id);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const processedContent = await remark().use(html).use(prism).process(fileContents);
  const contentHtml = processedContent.toString();

  return {
    props: {
      content: contentHtml,
    },
  };
}
