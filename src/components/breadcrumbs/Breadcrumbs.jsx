import { useEffect, useState } from "react";
import { Link, useMatches } from "react-router-dom";

const Breadcrumbs = () => {
  const [crumbs, setCrumbs] = useState([]);
  const matches = useMatches();

  useEffect(() => {
    const crumbs = matches
      .filter((match) => Boolean(match.handle?.crumb))
      .map((match) => {
        return { path: match.pathname, label: match.handle.crumb(match.data) };
      });

    setCrumbs(crumbs);
  }, [matches]);

  return (
    <>
      {crumbs && crumbs.length > 1 && (
        <div className="bg-bgSecondary w-full">
          <div className="max-w-screen-xl mx-auto px-3 py-[1.125rem]">
            <ul className="text-white text-sm font-medium flex flex-nowrap gap-2.5 items-center">
              {crumbs.map((crumb, index) => (
                <li key={index}>
                  {index === crumbs.length - 1 ? (
                    <span className="text-tertiary">{crumb.label}</span>
                  ) : (
                    <>
                      <Link to={crumb.path} className="hover:text-tertiary">
                        {crumb.label}
                      </Link>
                      <span className="pl-2.5">/</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Breadcrumbs;
