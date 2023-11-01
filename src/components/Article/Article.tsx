import clsx from 'clsx'

interface ArticleProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Article({ children, className, ...props }: ArticleProps) {
  return (
    <div
      className={clsx('bg-light dark:bg-dark shadow-shadowMain rounded-md flex flex-col flex-grow mx-2', className)}
      {...props}
    >
      {children}
    </div>
  )
}
