import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import qs from "qs";
import { apiHost } from "./hosts";

const api = axios.create();

interface ApiPros extends AxiosRequestConfig {
  endpoint?: string;
}

export default function (props: ApiPros): Promise<AxiosResponse> {
  const { method, endpoint, data, params, withCredentials = false } = props;

  return api({
    method,
    url: apiHost + endpoint,
    data,
    params,
    withCredentials,
    paramsSerializer: (urlParams) => {
      return qs.stringify(urlParams, { arrayFormat: "repeat" });
    },
  });
}
