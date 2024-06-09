import axios from "axios";
import { cookies } from "next/headers";

const apiUrl = process.env.apiUrl;
export async function POST(
    req: Request,
    { params }: { params: { id: string } } //ngambil params id
) {
    // ngambil token dari cookies
    const cookiesStore = cookies();
    const token = cookiesStore.get("token");
    // ngambil data dari request
    const data = await req.json();

    try {
        const response = await axios.request({
            method: "POST",
            url: `${apiUrl}/booking/tickets/${params.id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token?.value as string}`,
            },
            data: data,
        });
        return Response.json({ ...response?.data }, { status: 200 });
    } catch (error) {
        return Response.json({ error, req }, { status: 500 });
    }
}
