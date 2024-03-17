//import user controller dari file controller.mjs
import { index, store } from "./controller.mjs";

const main = () => {
    const user = { name: "Martha", age: 22 };

    index();
    store(user);
    index();
}

main();