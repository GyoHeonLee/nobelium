import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const Pagination = ({ page, showNext }) => {
  const locale = useLocale()
  const currentPage = +page
  let additionalClassName = 'justify-between'
  if (currentPage === 1 && showNext) additionalClassName = 'justify-end'
  if (currentPage !== 1 && !showNext) additionalClassName = 'justify-start'
  return (
    <div className={`flex font-medium text-black dark:text-gray-100 ${additionalClassName}`}>
      {currentPage !== 1 && (
      <Link
        href={
          currentPage - 1 === 1
            ? `${BLOG.path || '/'}`
            : `/page/${currentPage - 1}`
        }
      >
        <a>
          <button rel="prev" className="page-button group-hover:to-yellow-200 group-hover:via-red-300 group-hover:from-red-200 group">
            <span className="page-span">
              ← {locale.PAGINATION.PREV}
            </span>
          </button>
        </a>
      </Link>
      )}
      {showNext && (
        <Link href={`/page/${currentPage + 1}`}>
          <a>
            <button rel="next" className="page-button group-hover:to-yellow-200 group-hover:via-red-300 group-hover:from-red-200 group">
              <span className="page-span">
                {locale.PAGINATION.NEXT} →
              </span>
            </button>
          </a>
        </Link>
      )}
    </div>
  )
}

export default Pagination
