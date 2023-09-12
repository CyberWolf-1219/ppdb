import { getFirestore, doc, getDoc, collection, setDoc } from 'firebase/firestore'
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
            const docRef = doc(this.paperCollection, `${this.year}_${this.exam}_${this.subject}`)

            const result = setDoc(docRef, { files: [ this.filePath ] });

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