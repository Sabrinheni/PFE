import { useState, useEffect } from "react"
import { queryApi } from "../utils/queryApi"

/**
 * @param {String} endpoint relative endpoint
 * @param {object} body request body
 * @param {String} method method can be ["GET","POST","PUT", "DELETE"] | Default GET
 * @param {boolean} transformBody whether to transform the request body from JSON to FormData | Default false
 */
export function useApi(endpoint, body = null, method = "GET", transformBody = false) {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  async function query() {
    if (!endpoint) return
    setError(false)
    setResult(null)

    const [res, err] = await queryApi(endpoint, body, method, transformBody)

    setResult(res)
    setError(err)
  }

  useEffect(() => {
    query()
    // eslint-disable-next-line
  }, [])

  return [result, error, query]
}
