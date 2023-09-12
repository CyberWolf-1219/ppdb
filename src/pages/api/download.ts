import type { APIRoute } from "astro";
import { PastPaperEntry } from "../../lib/firebase/firestore";
import type { DocumentData } from "firebase-admin/firestore";
import { fileRef } from "../../lib/firebase/storage";

export const GET: APIRoute = async ({ request }) => {
    const reqURL = new URL(request.url);
    const searchParams = reqURL.searchParams;

    const year = parseInt(searchParams.get('year') as string)
    const exam = searchParams.get('exam') as string
    const subject = searchParams.get('subject') as string

    console.log(year, exam, subject)

    try {
        const dbEntry = new PastPaperEntry(year, exam, subject);

        const result = await dbEntry.search()
        console.log(result)

        if (!result) {
            return new Response(null, { status: 404, statusText: "[-] File Not Found in the Cloud!" })
        }

        const links = await Promise.all((result as { files: string[] }).files.map(async (filePath) => {
            try {
                const result = await fileRef.getFile(filePath)
                return result;
            } catch (e) {
                console.error(e)
            }
        }))

        console.log(links)

        return new Response(JSON.stringify(links))
    } catch (e) {
        console.error(e)
        return new Response(null, { status: 500, statusText: (e as Error).message })
    }

}