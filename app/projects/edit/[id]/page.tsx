// Server wrapper for static export: pre-renders a placeholder path,
// then hydrates client-side where navigation uses real ids.
export async function generateStaticParams() {
  return [{ id: "demo" }]
}
export const dynamicParams = false

import EditClient from "./edit-client"

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params
  return <EditClient params={resolved} />
}
