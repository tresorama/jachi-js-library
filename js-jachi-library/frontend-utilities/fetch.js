export const createQueryString = (obj) => new URLSearchParams(obj).toString();

export async function fetchData_ASYNCAWAIT(endpoint, option = {}, responseType = "json") {
  try {
    const response = await fetch(...[endpoint, option]);
    const responseData = await response[responseType]();
    return {
      communication_ok: true,
      response: responseData,
    };
  } catch (error) {
    return {
      communication_ok: false,
    };
  }
}

export function fetchData_PROMISE(endpoint, option = {}, responseType = "json") {
  return fetch(...[endpoint, option])
    .then((res) => res[responseType]())
    .then((responseData) => ({
      communication_ok: true,
      response: responseData,
    }))
    .catch((error) => {
      return {
        communication_ok: false,
      };
    });
}

/* 

Usage

const {communication_ok, response } = await fetchData(
  "https://google-translate1.p.rapidapi.com/language/translate/v2",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": rapidAPIKey,
      },
      body: createQueryString({
        q: text,
        target: destLang,
        source: inputLang,
      }),
    },
)

*/
