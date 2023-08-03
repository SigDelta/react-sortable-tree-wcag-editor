export const slideRows = (
  rows: any[],
  fromIndex: number,
  toIndex: number,
  count = 1
) => {
  const rowsWithoutMoved = [
    ...rows.slice(0, fromIndex),
    ...rows.slice(fromIndex + count),
  ]

  return [
    ...rowsWithoutMoved.slice(0, toIndex),
    ...rows.slice(fromIndex, fromIndex + count),
    ...rowsWithoutMoved.slice(toIndex),
  ]
}

export function arePathsEqual(path1: number[], path2: number[]): boolean {
  if (path1.length !== path2.length) {
    return false
  }

  for (const [i, element] of path1.entries()) {
    if (element !== path2[i]) {
      return false
    }
  }

  return true
}
