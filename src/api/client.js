/* eslint-disable no-use-before-define */
const localStorageKey = '__bookshelf_token__'
const appUrl = import.meta.env.VITE_APP_API_URL

function client(endpoint, { body, ...customConfig } = {}) {
  const token = window.localStorage.getItem(localStorageKey)
  const headers = { 'content-type': 'application/json' }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }

  return window
    .fetch(`${appUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        logout()
        window.location.assign(window.location)
        return
      }
      if (response.ok) {
        return response.json()
      }
      const errorMessage = await response.text()
      Promise.reject(new Error(errorMessage))
    })
}

function logout() {
  window.localStorage.removeItem(localStorageKey)
}

export default client
