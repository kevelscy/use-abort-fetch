export const useAbortFetch = () => {
  const abortController = new AbortController()
  const signal = abortController.signal
  const abort = () => abortController.abort()

  return [signal, abort]
}
