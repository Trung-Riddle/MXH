interface MetricProps {
  count: number
  label: string
}

const Metric = ({ count, label }: MetricProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <span className='text-xs uppercase font-bold'>{count}</span>
      <p className='font-medium text-xs uppercase'>{label}</p>
    </div>
  )
}

export default Metric
