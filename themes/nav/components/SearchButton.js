import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
const AlgoliaSearchModal = dynamic(() => import('@/themes/nav/components/AlgoliaSearchModal'), { ssr: false })

/**
 * 搜索按钮
 * @returns
 */
export default function SearchButton(props) {
  const { locale } = useGlobal()
  const router = useRouter()
  const searchModal = useRef(null)

  function handleSearch() {
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal.current.openSearch()
    } else {
      router.push('/search')
    }
  }

  return <>
        {/* <div onClick={handleSearch} title={locale.NAV.SEARCH} alt={locale.NAV.SEARCH} className='cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all'>
            <i title={locale.NAV.SEARCH} className="fa-solid fa-magnifying-glass" />
        </div> */}
                                    {/* className={`signUpBtn text-white rounded-md bg-white bg-opacity-20 px-6 py-1  my-5 mr-6  h-full pt-px signup-text-base font-medium duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark`} */}

        <div class="flex w-36 hover:w-36 md:hover:w-56 md:w-56 transition md:mr-5">
        <a onClick={handleSearch}
                            href='javascript:void(0)'
                            className={` my-3   outline-none  text-base  font-bold leading-10 btn   text-white rounded-md bg-white bg-opacity-20 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark
`}
                            >
                           登录
                            </a>
          </div>
         {/* <a onClick={handleSearch}
                            href='javascript:void(0)'
                            className={`leading-10 text-white rounded-md bg-white bg-opacity-20 px-6 py-1   mr-6 flex items-center h-full pt-px signup-text-base font-medium duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark`}
                            >
                           登录
                            </a>  */}
                            {/* <a  className="btn text-white rounded-md bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 px-6 py-1 my-4  mr-6  h-full pt-px  font-medium"
                                        href='javascript:void(0)' rel="noreferrer">
                                        登录
                                    </a>                            */}
        <AlgoliaSearchModal cRef={searchModal} {...props}/>
    </>
}
