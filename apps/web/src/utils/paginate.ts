export function paginate({ items, page = 1, perPage = 10 }) {
  const offset = perPage * (page - 1)
  const start = offset + 1
  const total = items.length
  const totalPages = Math.ceil(items.length / perPage)
  const paginatedItems = items.slice(offset, perPage * page)

  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    start: offset + 1,
    total: items.length,
    end: start + perPage > total ? total : start + perPage - 1,
    totalPages: totalPages,
    items: paginatedItems,
  }
}
