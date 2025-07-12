import { post } from "./utils/access.ts";

(async () => {
  const endpoint = "";
  const data = {};
  const response = await post(endpoint, data);
  console.log(JSON.stringify(response));
})();
