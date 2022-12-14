import axios from "axios"

/**
 * @param {String} endpoint relative endpoint
 * @param {object} body request body
 * @param {String} method method can be ["GET","POST","PUT", "DELETE"] | Default GET
 * @param {boolean} transformBody whether to transform the request body from JSON to FormData | Default false
 */
export async function queryApi(endpoint, body = null, method = "GET", transformBody = false) {
  let error = null
  let result = null
  try {
    let config = {
      method,
      url: `${process.env.REACT_APP_API_URL}api/${endpoint}`,
    }

    if (body) {
      if (method.toUpperCase() === "GET")
        config = {
          ...config,
          headers: { "Content-Type": "application/json" },
          data: body,
        }

      if (["POST", "PUT"].includes(method.toUpperCase())) {
        if (transformBody) {
          // transform body object to form data entries
          let bodyFormData = new FormData()
          for (let [key, value] of Object.entries(body)) {
            if (value) {
              if (Array.isArray(value)) value.forEach(v => bodyFormData.append(key, v))
              else bodyFormData.append(key, value)
            }
          }

          config = {
            ...config,
            headers: { "Content-Type": "multipart/form-data" },
            data: bodyFormData,
          }
        } else {
          config = {
            ...config,
            headers: { "Content-Type": "application/json" },
            data: body,
          }
        }
      }
    }

    // console.log(`Requesting : ${config.url}`)
    // console.log(config)

    const res = await axios(config)
    result = res.data
  } catch (e) {
    // To differentiate between validation errors and response errors,
    // check whether the "errors" key is defined or not in the returned error from this function.

    if (e.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      error = e.response.data
      //   console.log(e.message);
      //   console.log(error);
    } else {
      // 1) The request was made but no response was received
      // OR
      // 2) Something went wrong in setting up the request that triggered an Error

      //   console.log(e.request);
      //   console.log(e.message);
      error = e.message
    }
  }
  return [result, error]
}
