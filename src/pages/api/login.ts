import type { APIRoute } from "astro";
import { UserEntry } from "../../lib/firebase/firestore";
import * as jwt from 'jsonwebtoken'

export const POST: APIRoute = async ({ request, cookies }) => {

    console.log('[i] NEW LOGIN REQUEST');

    console.log('[i] EXTRACTING AUTH DATA FROM REQUEST');
    const authData = await request.formData();
    const email = authData.get('email') as string | null;
    const password = authData.get('password') as string | null;
    console.table({ email, password });

    console.log('[i] CHECKING REQUEST DATA AVAILABILITY');
    if (!email || !password) {
        return new Response(JSON.stringify({ messag: 'AUTHENTICATION DATA REQUIRED' }), { status: 400 });
    }

    console.log('[i] CHECKING USER EXISTANCE');
    const userEntry = new UserEntry(email, password);
    const userExists = await userEntry.checkExistance()


    if (!userExists) {
        console.log('[i] USER NOT FOUND');
        return new Response(JSON.stringify({ message: 'USER DOES NOT EXISTS' }), { status: 404 })
    }

    console.log('[i] USER FOUND');
    const user = await userEntry.search();
    const userPassword = user.get('password')

    console.log('[i] CHECKING USER PASSWORD');
    if (password !== userPassword) {
        console.log(`[i] ${password} <> ${userPassword}`);
        console.log('[i] PASSWORD DOES NOT MATCH');
        return new Response(JSON.stringify({ message: 'INVALID PASSWORD' }), { status: 406 })
    }

    console.log('[i] PASSWORDS MATCH');
    const token = jwt.sign({ email: email, password: password }, 'ppdb-authenticated-user');
    cookies.set('auth', token);

    return new Response(JSON.stringify({ message: 'OK' }), {
        status: 200, headers: {
            auth: token
        }
    })
}