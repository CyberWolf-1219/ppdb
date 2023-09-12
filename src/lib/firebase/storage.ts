import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';
import type { StorageReference } from 'firebase/storage';
import { app } from './client';

const storage = getStorage(app);

export class fileRef {
  private file: StorageReference | null = null;
  private fileName: string;
  private fileType: string;

  constructor(fileName: string, fileType: string) {
    this.fileName = fileName;
    this.fileType = fileType;

    this.file = ref(storage, this.generateFullFileName());
    console.log('New Cloud File Ref Created: ', this.generateFullFileName());
  }

  private generateFullFileName() {
    return this.fileName + '.' + this.fileType.split('/')[ 1 ]
  }

  public async uploadFile(pdfFile: ArrayBuffer) {
    if (!this.file) {
      throw new Error('[-] File Ref Not Found!');
    }

    const result = await uploadBytes(this.file, pdfFile, { contentType: this.fileType });

    return result;
  }

  public async removeFile() { }

  public async updateFile() { }

  static async getFile(filePath: string) {
    const _fileRef = ref(storage, filePath);
    const downloadUrlResult = await getDownloadURL(_fileRef);
    return downloadUrlResult;
  }
}
