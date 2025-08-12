import {getArticlePageConfig} from "@/app/utils/ArticleUtils";

const basePath = "";
const {generateMetadata, Page} = getArticlePageConfig(basePath);

export {generateMetadata};
export default Page;
