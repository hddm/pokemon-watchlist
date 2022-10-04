import { AppLogo } from '@/components/AppLogo';

export function AppBar() {

  return (
    <div data-testid="app-bar" className="tw-w-full tw-bg-white">
      <div
        className={`
        tw-max-w-screen-xl tw-w-full tw-mx-auto tw-h-[72px]
        tw-flex tw-items-center tw-justify-between`}
      >
        <AppLogo />
      </div>
    </div>
  )
}