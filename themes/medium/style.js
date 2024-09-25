/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
    // 底色
    .dark body{
        background-color: black;
    }

    .max-h-96 {
      max-height: 14rem;
      border-radius:1%;
    }
    // .w-full{
    //   max-width:80%;
    // }

    //none block
    .xl\:block { 
      display: none; 
    }
    .my-4{
      display:none;
    }
    .lg\:py-8 {
      padding-top: 1rem;
      padding-bottom: 0rem;
  }


  `}</style>
}

export { Style }
