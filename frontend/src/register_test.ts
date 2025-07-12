import { post } from "./utils/access.ts";

(async () => {
  const endpoint = "/register";
  const data = {
    // All of these must be present upon user registration, otherwise the server will reject the request
    username: "a",
    first_name: "f",
    middle_name: "s",
    last_name: "f",
    email: "mafks@gmail.com",
    password: "g",
    confirm_password: "saf"
  };
  const response = await post(endpoint, data);
  console.log(JSON.stringify(response));
})();
