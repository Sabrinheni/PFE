import api from "../utils/api"

/**
 * @param {String} endpoint relative endpoint
 * @param {object} body request body
 * @param {String} method method can be ["GET","POST","PUT", "DELETE"] | Default GET
 * @param {boolean} transformBody whether to transform the request body from JSON to FormData | Default false
 */
export async function queryApi(endpoint, body = null, method = "GET", transformBody = false, forceJson = false) {
  let error = null
  let result = null
  try {
    let config = {
      method,
      url: `${api.defaults.baseURL}${endpoint}`,
    }

    if (body) {
      if (method.toUpperCase() === "GET" || forceJson)
        config = {
          ...config,
          headers: { "Content-Type": "application/json" },
          data: body,
        }

      if (["POST", "PUT"].includes(method.toUpperCase()) && !forceJson) {
        if (transformBody) {
          // transform body object to form data entries
          let bodyFormData = new FormData()
          for (let [key, value] of Object.entries(body)) {
            if (value) {
              if (Array.isArray(value)) {
                let numberOfItems = 0
                value.forEach(v => {
                  if (typeof v !== "string" && v instanceof File === false) {
                    for (let [keyC, valueC] of Object.entries(v)) {
                      if (Array.isArray(valueC)) {
                        let numberOfNestedItems = 0
                        // eslint-disable-next-line
                        valueC.forEach(nested => {
                          for (let [keyCN, valueCN] of Object.entries(nested)) {
                            bodyFormData.append(
                              `${key}[${numberOfItems}][${keyC}][${numberOfNestedItems}][${keyCN}]`,
                              valueCN
                            )
                          }
                          numberOfNestedItems++
                        })
                      } else {
                        bodyFormData.append(`${key}[${numberOfItems}][${keyC}]`, valueC)
                      }
                    }
                  } else {
                    bodyFormData.append(key, v)
                  }

                  numberOfItems++
                })
              } else bodyFormData.append(key, value)
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

    // Setting authorization token if available with each request
    const token = localStorage.getItem("token")
    if (token) config.headers = { ...config.headers, Authorization: `Bearer ${token}` }

    // console.log(`Requesting : ${config.url}`)
    // console.log(config)

    const res = await api(config)
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
