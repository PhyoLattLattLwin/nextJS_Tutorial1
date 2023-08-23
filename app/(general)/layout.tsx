import { ChildrenProps } from '@/type/ChildrenProps';

export default function GeneralLayout({children}:ChildrenProps) {
  return (
    <div className='max-w-2xl m-auto'>{children}</div>
  )
}
