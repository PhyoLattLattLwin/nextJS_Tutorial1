import { ChildrenProps } from '@/type/ChildrenProps'

export default function PostLayout({children}:ChildrenProps) {
  return (
    <div className='bg-blue-950 min-h-screen p-4'>
        <div className=' bg-white rounded-xl p-4'>{children}</div>
    </div>
  )
}
