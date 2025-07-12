import { post } from "./utils/access.ts";

(async () => {
  const endpoint = "/login";
  const data = {
    username: "khianvictory",
    password: "123",
  };
  const response = await post(endpoint, data);
  console.log(JSON.stringify(response));
})();
