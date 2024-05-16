/*
 * File: /app/components/TableOfContents.tsx
 * Project: portfolio
 * Created: Thursday, 16th May 2024
 * Author: rashadatjou
 * -----
 * Copyright 2024, ©Mehdi Rashadatjou
 * -----
 */

/**
 * CSS:
 * table-of-contents.css
 */

type Row = {
  title: string;
  link: string;
};

type Section = {
  sectionTitle: string;
  sectionLink: string;
  data: Row[];
};

type Props = {
  data: Section[];
};

const TableOfContents = ({ data }: Props) => (
  <div className="table-of-contents">
    <h2>Table of Contents</h2>
    <ul className="toc-list">
      {data.map((section, index) => (
        <li key={index}>
          <a href={section.sectionLink}>{section.sectionTitle}</a>
          {section.data && section.data.length > 0 && (
            <ul className="toc-sublist">
              {section.data.map((subSection, subIndex) => (
                <li key={subIndex}>
                  <a href={subSection.link}>{subSection.title}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default TableOfContents;
