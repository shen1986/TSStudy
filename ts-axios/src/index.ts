import { AxiosRequestConfig } from './types';
import { buildURL } from './helpers/url';
import xhr from './xhr';
import { transformRequest } from './helpers/data';
import { processHeaders } from './helpers/header';

function axios(config: AxiosRequestConfig): void {
  processConfig(config);
  xhr(config);
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data);
}

function transformHeaders(config: AxiosRequestConfig) {
  const {headers = {}, data} = config;
  return processHeaders(headers, data);
}

export default axios;
