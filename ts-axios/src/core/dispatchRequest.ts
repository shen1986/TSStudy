import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "../types";
import xhr from './xhr';
import { buildURL } from '../helpers/url';
import { flattenHeaders } from '../helpers/headers';
import transform from './transform';

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  throwIfCancellationRequested(config)
  processConfig(config);
  return xhr(config).then(res => {
    return transformResponseData(res);
  })
}

function throwIfCancellationRequested(config: AxiosRequestConfig): void {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested()
  }
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.data = transform(config.data, config.headers, config.transformRequest);
  config.headers = flattenHeaders(config.headers, config.method!);
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params, paramsSerializer } = config;
  return buildURL(url!, params, paramsSerializer);
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse);
  return res;
}
