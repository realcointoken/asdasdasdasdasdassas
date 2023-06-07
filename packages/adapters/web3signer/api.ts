import { axiosPost, axiosGet, NxtpError } from "@connext/nxtp-utils";
import { Bytes } from "ethers";

// TODO: This class might benefit from some error handling / logging and response sanitization logic.
/**
 * Simple class for wrapping axios calls to the web3signer API.
 */
export class Web3SignerApi {
  private static ENDPOINTS = {
    SIGN: "api/v1/eth1/sign",
    SERVER_STATUS: "upcheck",
    PUBLIC_KEY: "api/v1/eth1/publicKeys",
  } as const;

  constructor(private readonly url: string) {}

  public async sign(identifier: string, data: string | Bytes): Promise<string> {
    const endpoint = Web3SignerApi.ENDPOINTS.SIGN;
    let response = await axiosPost<string>(this.formatUrl(endpoint, identifier), {
      data,
    });
    response = this.sanitizeResponse(response, endpoint);
    return response.data;
  }

  public async getServerStatus(): Promise<string> {
    const endpoint = Web3SignerApi.ENDPOINTS.SERVER_STATUS;
    let response = await axiosGet<string>(this.formatUrl(endpoint));
    response = this.sanitizeResponse(response, endpoint);
    return response.data[0];
  }

  public async getPublicKey(): Promise<string> {
    const endpoint = Web3SignerApi.ENDPOINTS.PUBLIC_KEY;
    let response = await axiosGet<string>(this.formatUrl(endpoint));
    response = this.sanitizeResponse(response, endpoint);
    return response.data[0];
  }

  private formatUrl(
    endpoint: typeof Web3SignerApi.ENDPOINTS[keyof typeof Web3SignerApi.ENDPOINTS],
    identifier?: string,
  ): string {
    let url = `${this.url}/${endpoint}`;
    if (identifier) {
      url += `/${identifier}`;
    }
    return url;
  }

  private sanitizeResponse(response, endpoint: typeof Web3SignerApi.ENDPOINTS[keyof typeof Web3SignerApi.ENDPOINTS]) {
    if (!response || !response.data || response.data.length === 0) {
      throw new NxtpError(
        "Received bad response from web3signer instance; make sure your key file is configured correctly.",
        {
          response,
          endpoint,
        },
      );
    }
    return response;
  }
}
