import Image from 'next/image'

export default function AppLogo() {
  return (
    <div
      data-testid="app-logo"
      className="tw-flex tw-items-center tw-justify-between tw-gap-4"
    >
      <span className="tw-m-r-3 tw-border-grey-400 tw-border-r tw-border-solid tw-pr-3">
        <Image
          width={40}
          height={40}
          src="https://camo.githubusercontent.com/5dca7f80c5e21b6aef434b81f8a13cd3223e4ea6030254f99cd0f6e273094fff/68747470733a2f2f63646e2e666176776172652e746563682f696d672f67716c702e706e67"
          alt="ArchAngel"
        />
      </span>
      <span className="tw-font-semibold">Pokemon Watchlist</span>
    </div>
  )
}
