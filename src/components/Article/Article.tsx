import clsx from 'clsx'

interface ArticleProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Article({ children, className, ...props }: ArticleProps) {
  return (
    <div
      className={clsx(
        'bg-[#ffffff] dark:bg-dark-main shadow-md rounded-xl mt-3 flex flex-col flex-grow article',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
