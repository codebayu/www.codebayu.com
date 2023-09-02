import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';

import { MdxFileProps } from '../types/mdx';

const loadMdxFiles = (slug: string, isProject: boolean = false): MdxFileProps[] => {
  const learnPath = path.join(process.cwd(), 'contents', 'learn', slug);
  const projectPath = path.join(process.cwd(), 'contents', 'projects');
  const dirPath = isProject ? projectPath : learnPath;
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = fs.readdirSync(dirPath);

  const contents = files.map(file => {
    const filePath = path.join(dirPath, file);
    const source = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(source);

    const mdxCompiler = remark().use(remarkParse).use(remarkGfm).use(remarkMdx);
    const mdxContent = mdxCompiler.processSync(content).toString();

    return {
      slug: file.replace('.mdx', ''),
      frontMatter: data,
      content: mdxContent
    };
  });

  return contents;
};

export default loadMdxFiles;
