export interface AssetObject {
  objects : {
    [key: string]: {
      hash : string,
      size : number
    }
  }
}
