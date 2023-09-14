import type { APIRoute } from 'astro';
import { fileRef } from '../../lib/firebase/storage';
import randomstring from 'randomstring';
import { PastPaperEntry } from '../../lib/firebase/firestore';

export const POST: APIRoute = async ({ request, cookies }) => {
    // UPLOAD THE PDF FILE
    // CREATE A DB ENTRY
    // RETURN SUCCESS RESPONSE
    const contentTypeHeader = request.headers.get('Content-Type')?.split(';')[ 0 ];

    if (contentTypeHeader != 'multipart/form-data') {
        return new Response(null, { status: 406, statusText: '[-] Invalid Data!' });
    }

    try {
        console.log('[i] NEW UPLOAD REQUEST')
        const requestBody = await request.formData();

        console.log('[i] PULLING DATA FROM THE REQUEST')
        const year = parseInt(requestBody.get('year') as string);
        const exam = requestBody.get('exam') as string;
        const subject = requestBody.get('subject') as string;
        const pdfFile = requestBody.get('file') as File;

        console.table({ year, exam, subject, pdfFile });

        if (pdfFile) {
            console.log('[i] UPLOADING FILE TO THE CLOUD')
            const fileUploadResult = await uploadFile(pdfFile)

            console.log('[i] FILE UPLOAD RESULT'.padEnd(80, '='))
            console.log(fileUploadResult);
            console.log(''.padEnd(80, '='))

            console.log('[i] ADDING ENTRY TO THE DATABASE')
            const dbEntryResult = await addDBEntry(year, exam, subject, fileUploadResult.ref.fullPath)

            console.log('[i] DB ENTRY ADD RESULT'.padEnd(80, '='))
            console.log(dbEntryResult)
            console.log(''.padEnd(80, '='))

            return new Response(JSON.stringify(dbEntryResult), { status: 201, statusText: '[+] Paper Successfully Added to the Database' })

        } else {

            return new Response(
                null, { status: 204, statusText: "[-] No PDF File Found!" }
            );
        }

    } catch (e) {
        console.log(e);
        return new Response(null, { status: 406, statusText: `[-] ${(e as Error).message}` });
    }

};


async function uploadFile(pdfFile: File) {
    const cloudFile = new fileRef(randomstring.generate(20), pdfFile.type);
    return await cloudFile.uploadFile(await pdfFile.arrayBuffer());
}

async function addDBEntry(year: number, exam: string, subject: string, cloudFilePath: string) {
    const dbEntry = new PastPaperEntry(year, exam, subject, cloudFilePath);
    return await dbEntry.save();
}