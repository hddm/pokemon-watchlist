import { APP_NAME } from '@/constants'
import { AppBar } from '@/components/AppBar'
import { Helmet } from 'react-helmet'
import { PropsWithChildren, ReactElement, ReactNode } from 'react'

interface PageProps {
  appBar?: ReactNode
  title?: string
}

export function Page(props: PropsWithChildren<PageProps>): ReactElement {
  const { appBar = <AppBar />, title } = props

  return (
    <div
      data-testid="page"
      className="tw-flex tw-min-h-screen tw-w-screen tw-flex-col"
    >
      {title && (
        <Helmet>
          <title>{`${title} - ${APP_NAME}`}</title>
        </Helmet>
      )}
      <div data-testid="page-app-bar">{appBar}</div>
      <div data-testid="page-contents" className="tw-flex-grow tw-py-4">
        <div className={`tw-mx-auto tw-w-full tw-max-w-screen-xl`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
