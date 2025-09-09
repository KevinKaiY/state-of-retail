import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const adminHtmlPath = join(process.cwd(), 'public', 'admin', 'index.html');
    const adminHtml = readFileSync(adminHtmlPath, 'utf8');
    
    return new NextResponse(adminHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    return NextResponse.redirect(new URL('/admin/', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
  }
}
