// app/not-found/page.tsx
'use client'
import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <p className="fs-4 text-secondary mb-4">صفحه مورد نظر پیدا نشد</p>
            <Link href="/" className="btn btn-primary btn-lg">
                بازگشت به صفحه اصلی
            </Link>
        </div>
    )
}