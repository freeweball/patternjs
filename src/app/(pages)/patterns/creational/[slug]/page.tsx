import {getArticlePageConfig} from "@/app/utils/ArticleUtils";

const basePath = "patterns/creational";
const {generateStaticParams, generateMetadata, Page} = getArticlePageConfig(basePath);

export {generateStaticParams, generateMetadata};
export default Page;
