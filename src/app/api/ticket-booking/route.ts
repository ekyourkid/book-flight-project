import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const apiUrl = process.env.apiUrl;
export async function GET(req: Request, res: NextResponse) {
    const cookiesStore = cookies();
    const token = cookiesStore.get("token");

    try {
        const response = await axios.request({
            method: "GET",
            url: `${apiUrl}/booking/tickets`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token?.value as string}`,
            },
        });
        return Response.json({ ...response?.data }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
