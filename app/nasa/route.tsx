import { NextRequest , NextResponse } from "next/server";
export async function  GET() {
    try{
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API}`)
        const data = await response.json()
        return NextResponse.json(data)
    }catch(err){
        return NextResponse.error()
    }
}