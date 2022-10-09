import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid'

interface WatchListButtonProps {
  savedToWatchList: boolean
  onClick: (params: any) => any
}

export default function WatchListButton(props: WatchListButtonProps) {
  const { savedToWatchList, onClick } = props
  const buttonClassName = `tw-inline-flex tw-items-center tw-rounded-md tw-border tw-border-transparent tw-px-6 tw-py-3 tw-text-base tw-font-medium tw-text-white tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2`
  const iconClassName = `${
    savedToWatchList ? 'tw-text-yellow-500' : ''
  }  tw--ml-1 tw-mr-3 tw-h-5 tw-w-5`
  return savedToWatchList ? (
    <button type="button" onClick={onClick} className={buttonClassName}>
      <BookmarkIconSolid className={iconClassName} aria-hidden="true" />
      Saved to Watchlist
    </button>
  ) : (
    <button type="button" onClick={onClick} className={buttonClassName}>
      <BookmarkIconOutline className={iconClassName} aria-hidden="true" />
      Add to Watchlist
    </button>
  )
}
