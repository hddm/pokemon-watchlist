interface PaginationProps {
  start: number
  end: number
  total: number
  onPrevClick: (params: any) => any
  onNextClick: (params: any) => any
  itemName?: string
}

export default function Pagination(props: PaginationProps) {
  const prevBtnDisabled = props.start <= 1
  const nextBtnDisabled = props.end >= props.total
  return (
    <nav
      className="tw-flex tw-items-center tw-justify-between tw-border-t tw-border-gray-200 tw-bg-white tw-px-4 tw-py-3 sm:tw-px-6"
      aria-label="Pagination"
    >
      <div className="tw-hidden sm:tw-block">
        <p className="tw-text-sm tw-text-gray-700">
          Showing <span className="tw-font-medium">{props.start}</span> to{' '}
          <span className="tw-font-medium">{props.end}</span> of{' '}
          <span className="tw-font-medium">{props.total}</span>{' '}
          {props.itemName ? props.itemName : 'results'}
        </p>
      </div>
      <div className="tw-flex tw-flex-1 tw-justify-between sm:tw-justify-end">
        <button
          onClick={
            prevBtnDisabled
              ? (event) => event.preventDefault()
              : props.onPrevClick
          }
          className={`${
            prevBtnDisabled
              ? 'tw-text-gray-300 tw-pointer-events-none'
              : 'tw-text-gray-700 hover:tw-bg-gray-50'
          } tw-relative tw-inline-flex tw-items-center tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-px-4 tw-py-2 tw-text-sm tw-font-medium`}
        >
          Previous
        </button>
        <button
          onClick={
            nextBtnDisabled
              ? (event) => event.preventDefault()
              : props.onNextClick
          }
          className={`${
            nextBtnDisabled
              ? 'tw-text-gray-300 tw-pointer-events-none'
              : 'tw-text-gray-700 hover:tw-bg-gray-50'
          } tw-relative tw-ml-3 tw-inline-flex tw-items-center tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-px-4 tw-py-2 tw-text-sm tw-font-medium`}
        >
          Next
        </button>
      </div>
    </nav>
  )
}
