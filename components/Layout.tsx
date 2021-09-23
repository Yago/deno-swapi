import React from "https://esm.sh/react"

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

const Layout = ({ children }: Props): JSX.Element => (
  <html>
    <head>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
    </head>
    <body className="bg-gray-100">
      <div className="max-w-lg mx-auto p-5">
        {children}
      </div>
    </body>
  </html>
);

export default Layout;

