import { Calendar } from 'lucide-react'

export function CollectionMeta({ date }: { date: string }) {
  return (
    <div className="flex items-center space-x-3 text-ash font-medium">
      <Calendar />
      <span>Created on {date}</span>
    </div>
  )
}
