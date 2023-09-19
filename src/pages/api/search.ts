import type { APIRoute } from "astro";
import { PastPaperEntry } from "../../lib/firebase/firestore";

export const GET: APIRoute = async ({ request, redirect }) => {
    console.log('[i] NEW SEARCH REQUEST')
    console.log('[i] PARSING URL');
    const reqURL = new URL(request.url)

    console.log('[i] PULLING SEARCH PARAMETERS')
    const year = parseInt(reqURL.searchParams.get('year') as string)
    const exam = reqURL.searchParams.get('exam') as string
    const subject = reqURL.searchParams.get('subject') as string

    console.log('[i] CREATING NEW DOCUMENT REFERENCE');
    const dbEntryRef = new PastPaperEntry({ year, exam, subject });

    console.log('[i] SEARCHING THE DATABASE');
    const searchResult = await dbEntryRef.search()

    if (!searchResult.exists()) {
        console.log('[i] FILE DOES NOT EXISTS')
        return new Response(JSON.stringify({ message: 'File Does Not Exists' }), { status: 404 })
    }

    const files = searchResult.get('files');

    console.log('[i] FILE FOUND IN THE DATABASE');
    return new Response(JSON.stringify(files), { status: 200 });
}