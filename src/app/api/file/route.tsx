import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const file = form.get('file')

  if (!file) {
    return NextResponse.json({ error: 'No file provided' })
  }

  const fileName = 'name' in file ? file.name : null

  const blob = await put(fileName, file, {
    access: 'public',
  })

  return NextResponse.json(blob)
}
