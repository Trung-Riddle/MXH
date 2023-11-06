import React, { useEffect, useRef } from 'react'

interface InfiniteScrollProps {
  children: React.ReactNode
  loader: React.ReactNode
  hasMore: boolean
  endMessage: React.ReactNode
  next: () => void
  currentPage: number
  pageSize: number
}

const InfiniteScroll = ({
  children,
  currentPage,
  pageSize,
  endMessage,
  hasMore,
  next,
  loader
}: InfiniteScrollProps) => {
  const pageEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const pageEnd = pageEndRef.current

    if (hasMore) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          const itemCount = currentPage * pageSize
          const isLastItem = itemCount === children ? 0 : React.Children.count(children)
          const isNinthOrEighthItem = itemCount - isLastItem <= -8

          if (isLastItem || isNinthOrEighthItem) {
            next()
          }
        }
      })

      if (pageEnd) {
        observer.observe(pageEnd)
      }

      return () => {
        if (pageEnd) {
          observer.unobserve(pageEnd)
        }
      }
    }
  }, [hasMore, next, children, currentPage, pageSize])

  return (
    <div>
      {children}

      {hasMore ? <div ref={pageEndRef}>{loader}</div> : endMessage}
    </div>
  )
}

export default InfiniteScroll
