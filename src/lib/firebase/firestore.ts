import { getFirestore, doc, addDoc, getDoc, deleteDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { app } from "./client";

const firestore = getFirestore(app)



export class PastPaperEntry {
    private paperCollection;
    private year: number | null;
    private exam: string | null;
    private subject: string | null;
    private filePath: string | null;

    constructor(year: number, exam: string, subject: string, cloudStoreFilePath?: string) {
        this.year = year;
        this.exam = exam;
        this.subject = subject
        this.filePath = cloudStoreFilePath || "";
        this.paperCollection = collection(firestore, 'papers');
    }

    async save() {
        if (!this.filePath) {
            throw new Error('[-] Cloud File Path Needed to Save the Entry!')
        } else {

            const result = await addDoc(this.paperCollection, { year: this.year, exam: this.exam, subject: this.subject, file: this.filePath })

            return result;
        }
    }

    async search() {
        if (this.year == null || this.exam == null || this.subject == null) {
            throw new Error('[-] Need All Parameters to Perform the Search!')
        }

        const result = await getDoc(doc(this.paperCollection, `${this.year}_${this.exam}_${this.subject}`))

        return result.data();
    }
}