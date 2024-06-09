import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

const apiUrl = process.env.apiUrl;

export async function GET(req: Request, res: NextResponse) {
    const url = new URL(req.url);
    const qs = url.search;

    try {
        const response = await axios.request({
            method: "GET",
            url: `${apiUrl}/airlines/flight${qs}`,
        });
        return Response.json({ ...response?.data }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
