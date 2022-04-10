import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import toc from "remark-toc";
import fs from "fs";
import path from "path";
import slug from "rehype-slug";
import { rehype } from "rehype";

export async function getPostData(id) {
  const fullPath = path.join(process.cwd(), "pages", id);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const processedContent = await remark()
    .use(toc)
    .use(html, { sanitize: false })
    .use(prism)
    .process(fileContents);
  const hyped = await rehype().use(slug).process(processedContent);
  const contentHtml = hyped.toString();

  return {
    props: {
      content: contentHtml,
    },
  };
}
