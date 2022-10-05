import { AppLogo } from '@/components/AppLogo'

export function AppBar() {
  return (
    <div data-testid="app-bar" className="tw-w-full tw-bg-white">
      <div
        className={`
        tw-mx-auto tw-flex tw-h-[72px] tw-w-full
        tw-max-w-screen-xl tw-items-center tw-justify-between`}
      >
        <AppLogo />
      </div>
    </div>
  )
}
