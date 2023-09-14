import { getFirestore, doc, getDoc, collection, setDoc, updateDoc, arrayUnion } from 'firebase/firestore'
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

    private generateFullName() {
        return `${this.year}_${this.exam}_${this.subject}`;
    }

    async save() {
        if (!this.filePath) {
            throw new Error('[-] Cloud File Path Needed to Save the Entry!')
        }

        console.log('[i] CREATING DOCUMENT REFERENCE')
        const docRef = doc(this.paperCollection, `${this.year}_${this.exam}_${this.subject}`)
        console.log('[i] CHECKING DOCUMENT EXSISTANCE IN THE CLOUD')
        const document = await getDoc(docRef)

        if (document.exists()) {
            console.log('[i] THIS DOCUMENT ALREADY EXISTS ON THE CLOUD')
            const cloudFile = doc(this.paperCollection, this.generateFullName());
            const docUpdateResult = await updateDoc(cloudFile, { files: arrayUnion(this.filePath) });
            return docUpdateResult;
        } else {
            console.log('[i] CREATING A NEW DOCUMENT ON THE CLOUD')
            const docAddResult = await setDoc(docRef, { files: [ this.filePath ] });
            return docAddResult;
        }
    }


    async search() {
        if (this.year == null || this.exam == null || this.subject == null) {
            throw new Error('[-] Need All Parameters to Perform the Search!')
        }

        const result = await getDoc(doc(this.paperCollection, `${this.year}_${this.exam}_${this.subject}`))
        return result;
    }
}