import type { APIRoute } from 'astro';
import { FileRef, ScreenshotRef } from '../../lib/firebase/storage';
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
        const email = requestBody.get('email') as string;
        const year = parseInt(requestBody.get('year') as string);
        const exam = requestBody.get('exam') as string;
        const subject = requestBody.get('subject') as string;
        const screenshot = requestBody.get('screenshot') as File;
        const pdf = requestBody.get('file') as File;

        console.table({ email, year, exam, subject });
        console.log(screenshot);
        console.log(pdf);

        if (pdf && screenshot && email && year && exam && subject) {
            const fileName = randomstring.generate(20);

            console.log('[i] UPLOADING IMAGE FILE THE CLOUD');
            const imageUploadResult = await uploadImage(fileName, screenshot)


            console.log('[i] FILE UPLOAD RESULT'.padEnd(80, '='))
            console.log(imageUploadResult)
            console.log(''.padEnd(80, '='))

            console.log('[i] UPLOADING PDF FILE TO THE CLOUD')
            const pdfUploadResult = await uploadPDF(fileName, pdf)

            console.log('[i] FILE UPLOAD RESULT'.padEnd(80, '='))
            console.log(pdfUploadResult);
            console.log(''.padEnd(80, '='))

            console.log('[i] ADDING ENTRY TO THE DATABASE')
            const dbEntry = new PastPaperEntry(year, exam, subject, email, pdfUploadResult.ref.fullPath, imageUploadResult.ref.fullPath);
            const dbEntryResult = await dbEntry.save();

            console.log('[i] DB ENTRY ADD RESULT'.padEnd(80, '='))
            console.log(dbEntryResult)
            console.log(''.padEnd(80, '='))

            return new Response(JSON.stringify({ message: 'Paper Added to The Database Successfully' }), { status: 201 })

        } else {

            return new Response(
                JSON.stringify({ message: 'Please Provide All The Information' }), { status: 204 }
            );
        }

    } catch (e) {
        console.log(e);
        return new Response(JSON.stringify({ message: (e as Error).message }), { status: 406 });
    }

};


async function uploadImage(fileName: string, image: File) {
    const imageRef = new ScreenshotRef(fileName, image.type)
    const imageUploadResult = await imageRef.uploadFile(await image.arrayBuffer());
    return imageUploadResult;
}

async function uploadPDF(fileName: string, pdf: File) {
    const fileRef = new FileRef(fileName, pdf.type);
    const fileUploadResult = await fileRef.uploadFile(await pdf.arrayBuffer());
    return fileUploadResult;
}