import * as XLSX from 'xlsx'
import { XlsxRange } from '@interfaces/XlsxRange.ts'

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

export const capitalizeSnakeCase = (str: string) => {
  const words = str.toLowerCase().split('_')
  const result: string[] = []
  words.forEach((word, index) => {
    const firstLetter =
      index === 0 ? word.charAt(0).toUpperCase() : word.charAt(0)
    result.push(firstLetter + word.slice(1))
  })
  return result.join(' ')
}

export const saveFile = ({
  blobOrUri,
  fileExtension,
  fileName,
}: {
  blobOrUri: Blob | string
  fileName?: string
  fileExtension: string
}) => {
  const href =
    typeof blobOrUri === 'string' ? blobOrUri : URL.createObjectURL(blobOrUri)
  const now = new Date()

  const link = document.createElement('a')
  link.href = href
  link.target = '_blank'
  link.download = `${fileName ?? now.toString()}.${fileExtension}`
  document.body.appendChild(link)
  link.click()

  // clean up "a" element & remove ObjectURL
  document.body.removeChild(link)
  URL.revokeObjectURL(href)
}

export const customXlsxRange = ({
  workbook,
  sheetName,
  range,
}: {
  workbook: XLSX.WorkBook
  sheetName: string
  range: XlsxRange
}) => {
  if (range && workbook) {
    const ref = workbook?.Sheets[sheetName]['!ref']
    if (ref) {
      const sheetRange = XLSX.utils.decode_range(ref)
      sheetRange.s.c = range.start
      sheetRange.e.c = range.end
      return XLSX.utils.encode_range(sheetRange)
    }
  }
  return undefined
}
