import {getArticlePageConfig} from "@/app/utils/ArticleUtils";

const basePath = "patterns/behavioral";
const {generateStaticParams, generateMetadata, Page} = getArticlePageConfig(basePath);

export {generateStaticParams, generateMetadata};
export default Page;
