/*
 * File: /app/views/Main/element/Footer.tsx
 * Project: portfolio
 * Created: Tuesday, 10th January 2023
 * Author: Break Zero
 * -----
 * Copyright 2022, Break Zero
 * -----
 */

type Props = {
  title: string;
  href: string;
};

const Footer = ({ title, href }: Props) => {
  return (
    <div className="intro-footer">
      <a href={href}>
        <code className='footer-title'>{title}</code>
      </a>
    </div>
  );
};

export default Footer;
