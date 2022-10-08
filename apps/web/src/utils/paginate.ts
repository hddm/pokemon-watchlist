export interface PageData<T> {
  previousPage: number
  nextPage: number
  start: number
  total: number
  end: number
  totalPages: number
  items: T[]
}

export function paginate<T>(items: T[], page = 1, perPage = 10): PageData<T> {
  const totalPages = Math.ceil(items.length / perPage)
  const offset = items.length > perPage ? perPage * (page - 1) : 0
  const start = offset + 1
  const total = items.length
  const paginatedItems = items.slice(offset, perPage * page)

  return {
    previousPage: page > 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    start: items.length > 0 ? offset + 1 : 0,
    total: items.length,
    end: start + perPage > total ? total : start + perPage - 1,
    totalPages: totalPages,
    items: paginatedItems,
  }
}
