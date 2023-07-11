import {generatePage} from "./components/page.js";
import {displayFirstLoad} from "./components/page.js";

const webPage = generatePage();
document.body.append(webPage);
displayFirstLoad();