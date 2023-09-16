import type { APIRoute } from "astro";
import { UserEntry } from "../../lib/firebase/firestore";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {

    console.log('[i] NEW USER REGISTRATION REQUEST');

    console.log('[i] EXTRACTING REQUEST DATA');
    const requestBody = await request.formData();

    const email = requestBody.get('email') as string
    const password = requestBody.get('password') as string

    console.log('[i] CHECKING USER EXISTANCE IN THE DATABASE');
    const userEntry = new UserEntry(email, password);
    const userExists = await userEntry.checkExistance();

    if (userExists) {
        console.log('[i] USER FOUND ON THE DATABASE');
        return new Response(JSON.stringify({ message: 'This Email is Already Registered!' }), { status: 409, statusText: '' })
    } else {
        console.log('[i] ADDING USER TO THE DATABASE');
        const result = await userEntry.save()
        return new Response(JSON.stringify({ message: 'Successfully Registered' }), { status: 201, statusText: '' });
    }
}