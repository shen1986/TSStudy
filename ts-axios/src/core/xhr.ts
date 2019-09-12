import { AxiosRequestConfig, AxiosResponse, AxiosPromise } from '../types';
import { parseHeaders } from '../helpers/headers';
import { createError } from '../helpers/error';
import { isURLSameOrigin } from '../helpers/url';
import cookie from '../helpers/cookie';

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout, cancelToken, withCredentials, xsrfCookieName, xsrfHeaderName} = config;

    const request = new XMLHttpRequest();

    if ((withCredentials || isURLSameOrigin(url!)) && xsrfCookieName) {
        const xsrfValue = cookie.read(xsrfCookieName)
        if (xsrfValue) {
            headers[xsrfHeaderName!] = xsrfValue
        }
    }

    if (withCredentials) {
        request.withCredentials = true
    }

    if (cancelToken) {
      cancelToken.promise.then(reason => {
        request.abort();
        reject(reason);
      })
    }

    if (responseType) {
      request.responseType = responseType;
    }

    request.open(method.toUpperCase(), url!, true);

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }

      if (request.status === 0) {
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData = responseType && responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response);
    }

    Object.keys(headers).forEach((name) => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name];
      } else {
        request.setRequestHeader(name, headers[name]);
      }
    })

    function handleResponse(response: AxiosResponse) {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(createError(
          `Request failed with status code ${response.status}`,
          config,
          null,
          request,
          response
        ));
      }
    }

    request.onerror = function handleError() {
      reject(createError(
        'NetWork Error',
        config,
        null,
        request
      ))
    }

    if (timeout) {
      request.timeout = timeout;
    }

    request.ontimeout = function handleTimeout(){
      reject(createError(
        `Timeout of ${timeout} ms exceeded`,
        config,
        'ECONNABORTED',
        request
      ))
    }

    request.send(data);
  })
}
