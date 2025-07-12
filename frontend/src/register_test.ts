import { post } from "./utils/access.ts";

(async () => {
  const endpoint = "/register";
  const data = {
    // All of these must be present upon user registration, otherwise the server will reject the request
    username: "aaasfsf",
    first_name: "f",
    middle_name: "s",
    last_name: "f",
    email: "mafasfhks@gmail.com",
    password: "123",
    confirm_password: "123"
  };
  const response = await post(endpoint, data);
  console.log(JSON.stringify(response));
})();
