import { FC, ReactNode } from 'react';

interface IHtmlProps {
  title: string;
  children: ReactNode;
}

const Html: FC<IHtmlProps> = ({ title, children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/public/main.css" />
      <title>{title}</title>
    </head>
    <body>{children}</body>
  </html>
);

export default Html;
