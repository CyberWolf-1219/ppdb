import { getFirestore, doc, addDoc, getDoc, deleteDoc, updateDoc, collection } from 'firebase/firestore'
import { app } from "./client";

const firestore = getFirestore(app)



export class PastPaperEntry {
    private paperCollection;
    private examYear: number;
    private exam: string;
    private examSubject: string;
    private filePath: string;

    constructor(year: number, exam: string, subject: string, cloudStoreFilePath: string) {
        this.examYear = year;
        this.exam = exam;
        this.examSubject = subject
        this.filePath = cloudStoreFilePath;
        this.paperCollection = collection(firestore, 'papers');
    }

    async save() {
        const result = await addDoc(this.paperCollection, { year: this.examYear, exam: this.exam, subject: this.examSubject, file: this.filePath })
    }
}