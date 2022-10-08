import { fetch } from 'cross-fetch'
import { server } from '@/mocks/server'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom'

// Add `fetch` polyfill.
global.fetch = fetch

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => {
  server.resetHandlers()
  localStorage.clear()
})
