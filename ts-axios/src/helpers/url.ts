import { isDate, isPlainObject } from './util';

interface URLOrigin {
    protocol: string
    host: string
}

export function isURLSameOrigin(requestURL: string): boolean {
    const parsedOrigin = resolveURL(requestURL)
    return (
        parsedOrigin.protocol === currentOrgin.protocol && parsedOrigin.host === currentOrgin.host
    )
}

const urlParsingNode = document.createElement('a')
const currentOrgin = resolveURL(window.location.href)

function resolveURL(url: string): URLOrigin {
    urlParsingNode.setAttribute('href', url)
    const { protocol, host } = urlParsingNode

    return {
        protocol,
        host
    }
}

function encode(val: string) : string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL (url: string, params?: any) {
  if (!params) {
    return url
  }

  const parts: string[] = [];

  Object.keys(params).forEach((key)=> {
    let val = params[key];
    if (val == null || typeof val === 'undefined') {
      return
    }
    let values: string[]
    if (Array.isArray(val)) {
      values = val;
      key+='[]';
    } else {
      values = [val];
    }
    values.forEach((val) => {
      if (isDate(val)) {
        val = val.toISOString();
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val);
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&');

  if (serializedParams) {
    const markIndex = url.indexOf('#');
    if (markIndex !== -1) {
      url = url.slice(0, markIndex);
    }

    url += (url.indexOf('?') === -1? '?':'&') + serializedParams;
  }

  return url;
}
