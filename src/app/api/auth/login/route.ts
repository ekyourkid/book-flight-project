import axios from "axios";
import { cookies } from "next/headers";

const apiUrl = process.env.apiUrl;
console.log(apiUrl, "XXXXXXXXXXxx");
export async function POST(req: Request) {
    const data = await req.json();
    try {
        const response = await axios.request({
            method: "POST",
            url: `${apiUrl}/auth/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data,
        });

        const token = response?.data?.data?.access_token;
        if (data) {
            cookies().set({
                name: "token",
                value: token,
                secure: true,
                httpOnly: false,
                path: "/",
            });
        }
        return Response.json({ ...response?.data }, { status: 200 });
    } catch (error) {
        return Response.json({ error, req }, { status: 500 });
    }
}
