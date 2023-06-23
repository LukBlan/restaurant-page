import {generatePage} from "./components/page/page.js";
import {displayFirstLoad} from "./components/page/page.js";

const webPage = generatePage();
document.body.append(webPage);
displayFirstLoad();