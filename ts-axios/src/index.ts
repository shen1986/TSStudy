import { AxiosRequestConfig } from './types';
import { buildURL } from './helpers/url';
import xhr from './xhr';
import { transformRequest } from './helpers/data';

function axios(config: AxiosRequestConfig): void {
  processConfig(config);
  xhr(config);
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config);
  config.data = transformRequestData(config);
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data);
}

export default axios;
