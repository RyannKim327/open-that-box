import { post } from "./utils/access.ts";

(async () => {
  const endpoint = "/user";
  const data = {
    username: "khdian",
    password: "123"
  };
  const response = await post(endpoint, data);
  console.log(JSON.stringify(response));
})();
