import React from 'react'
import clsx from 'clsx'

type BubbleChatProps = {
  isReceiver?: boolean
  children: React.ReactNode
}

export default function BubbleChat({ isReceiver = false, children }: BubbleChatProps) {
  return (
    <div className={clsx(
      'relative max-w-xs w-fit px-4 py-3 text-white font-normal select-none rounded-lg',
      'bg-gradient-to-r from-[#134679] to-[#226DB8]'
    )}>
      {children}

      {/* Tail bubble */}
      <div className={clsx(
        'absolute w-0 h-3 border-[10px] border-solid',
        isReceiver
          ? 'left-3 -bottom-4 -z-10 border-t-[#134679] border-l-transparent border-r-transparent border-b-transparent'
          : 'right-3 -bottom-4 -z-10 border-t-[#226DB8] border-l-transparent border-r-transparent border-b-transparent'
      )} />
    </div>
  )
}