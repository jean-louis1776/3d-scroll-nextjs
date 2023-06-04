import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-dark-gray hover:scrollbar-thumb-light-gray scrollbar-w-[.6rem] scrollbar-thumb-rounded-2xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
