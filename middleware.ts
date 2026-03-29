// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    let pathname = request.nextUrl.pathname;

    // فك الترميز لو فيه %
    if (pathname.includes("%")) {
        pathname = decodeURIComponent(pathname);
    }

    // لو الصفحة الرئيسية للخدمات
    if (pathname === "/الخدمات") {
        return NextResponse.rewrite(new URL("/services", request.url));
    }
    if (pathname === "/المناطق") {
        return NextResponse.rewrite(new URL("/regions", request.url));
    }
    if (pathname === "/المقالات") {
        return NextResponse.rewrite(new URL("/blogs", request.url));
    }

    // لو صفحة خدمة محددة [service]


    if (pathname.includes("المقالات")) {
        const slug = pathname.split("/").filter(Boolean);
        return NextResponse.rewrite(new URL(`/blogs/${slug[0]}`, request.url));
    }

    if (pathname.includes("الخدمات")) {
        const slug = pathname.split("/").filter(Boolean);
        return NextResponse.rewrite(new URL(`/services/${slug[0]}`, request.url));
    }

    if (pathname.includes("المناطق")) {
        const slug = pathname.split("/").filter(Boolean);
        return NextResponse.rewrite(new URL(`/regions/${slug[0]}`, request.url));
    }

    // لو مفيش أي تطابق، نرجع رد عادي
    return NextResponse.next();
}
