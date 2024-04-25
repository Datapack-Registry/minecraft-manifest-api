import type { FileObject } from './file_object.ts';


export interface Asset extends FileObject {
  id : string
  totalSize : number
}
