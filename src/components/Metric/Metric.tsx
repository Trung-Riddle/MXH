interface MetricProps {
  count: number
  label: string
}

const Metric = ({ count, label }: MetricProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <span className='text-sm uppercase font-semibold '>{count}</span>
      <p className='font-normal text-xs uppercase'>{label}</p>
    </div>
  )
}

export default Metric
