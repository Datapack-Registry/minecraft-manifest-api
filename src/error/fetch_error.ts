/**
 * This class represents an error that occurs when fetching data from the API.
 */
export default class FetchError extends Error {
  readonly url : string;
  readonly status : number;
  /**
   * Creates a instance of new FetchError.
   * 
   * @param url The URL that was attempted to be fetched
   * @param status The status code of the response
   */
  constructor(
    url : string,
    status : number
  ) {
    super();
    this.url = url;
    this.status = status;
    this.name = 'FetchError';
    this.message = 'Failed to fetch data from the API.';
  }
}
