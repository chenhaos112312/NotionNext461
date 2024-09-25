import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { MenuItemCollapse } from './MenuItemCollapse'
import SearchInput from './MediumSearchInput'

/**
 * 移动端菜单栏
 * @param {*} props
 * @returns
 */
export const MenuBarMobile = props => {
  const { customMenu, customNav } = props
  const { locale } = useGlobal()

  let links = [
    // { name: locale.NAV.INDEX, href: '/' || '/', show: true },
    {
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('NAV_MENU_CATEGORY', null, CONFIG)
    },
    {
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('NAV_MENU_TAG', null, CONFIG)
    },
    {
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('NAV_MENU_ARCHIVE', null, CONFIG)
    }
    // { name: locale.NAV.SEARCH, href: '/search', show: siteConfig('MENU_SEARCH', null, CONFIG) }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果 开启自定义菜单，则不再使用 Page生成菜单。
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
    // <nav id='nav' className=' text-md'>
    //   {links?.map((link, index) => (
    //     // <MenuItemCollapse
    //     //   onHeightChange={props.onHeightChange}
    //     //   key={index}
    //     //   link={link}
    //     // />
    //     link?.name === '登录' ? (
    //       <div class="grid grid-cols-1 gap-1   mx-10">
    //         <div>
    //          <SearchInput className='text-center w-3 text-xs ' />

    //         </div>
    //       </div>
          
    //       // <SearchInput className='text-center  mr-4 text-xs mx-4 my-8   border rounded-sm px-4' />
    //     ) : (
    //       <MenuItemCollapse
    //       onHeightChange={props.onHeightChange}
    //       key={index}
    //       link={link}
    //     />
    //     )
    //   ))}
    // </nav>
    <nav id='nav' className=' text-md'>
    {links?.map((link, index) => (
      <MenuItemCollapse
        onHeightChange={props.onHeightChange}
        key={index}
        link={link}
      />
      
    ))}
      <div class="text-blackhover:text-gray-600 px-7 w-full text-left duration-200 dark:border-black">
        <a class="py-2 w-full my-auto items-center justify-between flex  " href="javascript:void(0)">
          <div>
            <div class="fa-regular fa-circle text-center w-4 mr-2"></div><span class="text-white text-base font-bold antialiased">会员登录👇</span></div>
        </a>
      </div>
      <div class="grid grid-cols-1 gap-1   mx-10">
        <div>
          <SearchInput className='text-center w-3 text-xs ' />
        </div>
      </div>
  </nav>
  )
}
