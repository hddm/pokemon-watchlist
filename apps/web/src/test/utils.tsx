import React from 'react'
import { GraphQLProvider } from '@/graphql'
import { render, RenderOptions } from '@testing-library/react'

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return render(ui, {
    wrapper: ({ children }) => <GraphQLProvider>{children}</GraphQLProvider>,
    ...options,
  })
}

export * from '@testing-library/react'
// override render export
export { customRender as render }
export { default as userEvent } from '@testing-library/user-event'
