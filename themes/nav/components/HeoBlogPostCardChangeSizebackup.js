import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
// import TagItemMini from './TagItemMini'
import TagItemMini from './MediumTagItemMini'



const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  console.log(post,"----------post-------------");
  let tagarr =[];
  post?.tags?.map(tag => {
    console.log(tag,"------tag--------")
    // tagarr.push({name:tag})
    }
  )
  // post?.tags = tagarr;
  // console.log(post.tags,"------posttags--------");
  const showPreview =
    siteConfig('HEO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  if (
    post &&
    !post.pageCoverThumbnail &&
    siteConfig('HEO_POST_LIST_COVER_DEFAULT', null, CONFIG)
  ) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  // const showPageCover =
  //   siteConfig('HEO_POST_LIST_COVER', null, CONFIG) &&
  //   post?.pageCoverThumbnail &&
  //   !showPreview
  const showPageCover = true;
  // 'wow fadeInUp border bg-white dark:bg-[#1e1e1e] flex mb-4 flex-col h-[23rem] md:h-52 md:flex-row 2xl:h-96 2xl:flex-col group w-full dark:border-gray-600 hover:border-indigo-600  dark:hover:border-yellow-600 duration-300 transition-colors justify-between overflow-hidden rounded-xl'
  // card h-full rounded-2xl p-4 dark:bg-neutral-800 cursor-pointer bg-white hover:bg-white dark:hover:bg-gray-800 bg-green-50 text-green-500
  //315.2 184.5  手机端宽不变高165
  //311.39 240
  return (
    <article
      className={` ${siteConfig('HEO_POST_LIST_COVER_HOVER_ENLARGE', null, CONFIG) ? ' hover:scale-110 transition-all duration-150' : ''}`}>
      <div
        data-wow-delay='.2s'
        className={
          'wowfadeInUp border bg-white dark:bg-[#1e1e1e] flex mb-4 flex-col h-[23rem] md:h-52 md:flex-row  2xl:flex-col group w-full dark:border-gray-600 hover:border-indigo-600  dark:hover:border-yellow-600 duration-300 transition-colors justify-between overflow-hidden rounded-xl'
        }>
        {/* 图片封面 */}
        {showPageCover && (
          <Link href={post?.href} passHref legacyBehavior>
             {/* <Link href="https://www.baidu.com" passHref legacyBehavior> */}
            <div className='w-full md:w-5/12 2xl:w-full overflow-hidden'>
              <LazyImage
                priority={index === 0}
                src={post?.pageCoverThumbnail}
                alt={post?.title}
                className='h-60 w-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300'
              />
            </div>
          </Link>
        )}

        {/* 文字区块 */}
        <div
          className={
            'flex p-6 2xl:p-1 flex-col justify-between h-24 md:h-full 2xl:h-24 w-full md:w-7/12 2xl:w-full'
          }>
          <header>
            {/* 分类 */}
            {/* {post?.category && (
              <div
                className={`flex mb-1 items-center ${showPreview ? 'justify-center' : 'justify-start'} hidden md:block flex-wrap dark:text-gray-300 text-gray-600 hover:text-indigo-700 dark:hover:text-yellow-500`}>
                <Link
                  passHref
                  href={`/category/${post.category}`}
                  className='cursor-pointer text-xs font-normal menu-link '>
                  {post.category}
                </Link>
              </div>
              
            )} */}

            {/* 标题 */}
            <Link
              href={post?.href}
              passHref
              className={
                ' group-hover:text-indigo-700 dark:hover:text-yellow-700 dark:group-hover:text-yellow-600 text-black dark:text-gray-100  line-clamp-2 replace cursor-pointer text-sm font-extrabold leading-tight'
              }>
              {siteConfig('POST_TITLE_ICON') && (
                <NotionIcon icon={post.pageIcon} />
              )}
              <span className='menu-link '>{post.title}</span>
            </Link>
          </header>

          {/* 摘要 */}
          {/* {(!showPreview || showSummary) && (
            <main className='line-clamp-2 replace text-gray-700  dark:text-gray-300 text-sm font-light leading-tight'>
              {post.summary}
            </main>
          )} */}
          
          <div className='md:flex-nowrap flex-wrap md:justify-start inline-block'>
            <div>
              {/* {' '} */}
              {siteConfig('NAV_MENU_TAG', null, CONFIG) &&
              // {post.tagItems?.map(tag => (
                post.tags?.map(tag => (
                // <TagItemMini key={tag.name} tag={tag} />
                <TagItemMini key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPostCard
