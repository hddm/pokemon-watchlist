import React from 'react'
import { GraphQLProvider } from '@/graphql'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { render } from '@testing-library/react'

export type Options = Parameters<typeof render>[1] & {
  graphql?: MockedResponse[]
}

const customRender = (ui: React.ReactElement, options: Options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => <GraphQLProvider>{children}</GraphQLProvider>,
    ...options,
  })
}

export * from '@testing-library/react'
// override render export
export { customRender as render }
export { default as userEvent } from '@testing-library/user-event'
