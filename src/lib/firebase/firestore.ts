import { getFirestore, doc, getDoc, collection, setDoc, updateDoc, arrayUnion, CollectionReference, addDoc } from 'firebase/firestore'
import { app } from "./client";

const paperDB = getFirestore(app)
const userDB = getFirestore(app)


export class PastPaperEntry {
    private paperCollection;
    private year: number | null;
    private exam: string | null;
    private subject: string | null;
    private email: string | null;
    private filePath: string | null;
    private imagePath: string | null;

    constructor(year: number, exam: string, subject: string);

    constructor(year: number, exam: string, subject: string, email: string, cloudStoreFilePath: string, cloudStoreImageFilePath: string);

    constructor(arg1: number, arg2: string, arg3: string, arg4?: string, arg5?: string, arg6?: string) {
        this.year = arg1;
        this.exam = arg2;
        this.subject = arg3
        this.email = arg4 ?? ""
        this.filePath = arg5 ?? "";
        this.imagePath = arg6 ?? "";
        this.paperCollection = collection(paperDB, 'papers');
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
            const docUpdateResult = await updateDoc(cloudFile, { files: arrayUnion({ email: this.email, pdf: this.filePath, image: this.imagePath }) });
            return docUpdateResult;
        } else {
            console.log('[i] CREATING A NEW DOCUMENT ON THE CLOUD')
            const docAddResult = await setDoc(docRef, { files: [ { email: this.email, pdf: this.filePath, image: this.imagePath } ] });
            return docAddResult;
        }
    }

    async search() {
        if (!this.year || !this.exam || !this.subject) {
            throw new Error('[-] Need All Parameters to Perform the Search!')
        }

        const result = await getDoc(doc(this.paperCollection, `${this.year}_${this.exam}_${this.subject}`))
        return result;
    }
}

export class UserEntry {
    private email: string;
    private password: string | null;
    private userCollection: CollectionReference;

    constructor(email: string, password?: string) {
        this.email = email;
        this.password = password ?? null;
        this.userCollection = collection(userDB, 'users');
    }

    async checkExistance() {
        if (!this.email || !this.password) {
            throw new Error('[-] REQUIRED EMAIL & PASSWORD')
        }

        const docRef = doc(this.userCollection, this.email);
        const document = await getDoc(docRef)
        return document.exists()
    }

    async save(): Promise<1 | 0> {
        const docRef = doc(this.userCollection, this.email);
        await setDoc(docRef, { password: this.password })

        return 0;
    }

    async search() {
        const docRef = doc(this.userCollection, this.email);
        const document = await getDoc(docRef);
        return document;
    }

    async delete() { }

    async update() { }
}