import clsx from 'clsx'

interface ArticleProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Article({ children, className, ...props }: ArticleProps) {
  return (
    <div className={clsx('bg-[#ffffff] shadow-md rounded-xl mt-3 article', className)} {...props}>
      {children}
    </div>
  )
}
