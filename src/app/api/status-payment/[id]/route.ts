import axios from "axios";
import { cookies } from "next/headers";

const apiUrl = process.env.apiUrl;
export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    const cookiesStore = cookies();
    const token = cookiesStore.get("token");

    const data = await req.json();
    try {
        const response = await axios.request({
            method: "PUT",
            url: `${apiUrl}/booking/status/${params?.id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token?.value as string}`,
            },
            data: { statusId: +data.statusId },
        });
        return Response.json({ ...response?.data }, { status: 200 });
    } catch (error) {
        return Response.json({ error, req }, { status: 500 });
    }
}
