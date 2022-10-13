export const BASE_URL = "https://skill-remit.herokuapp.com/api";

const GetValue = (key) => {
  const decode = document.cookie.split(" ").join("").trim().split(";");
  const arr = decode.map((data, index) => {
    return data.split("=");
  });

  console.log(arr);

  const valueIndex = arr.flat().findIndex((data, index) => {
    return data === key;
  });
  if (valueIndex === -1) {
    return undefined;
  }
  console.log(valueIndex);
  return arr.flat()[valueIndex + 1];
};
export const TOKEN = GetValue("token");
// https://skill-remit.herokuapp.com/api/auth/login
