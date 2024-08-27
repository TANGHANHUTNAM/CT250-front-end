import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useMatches } from "react-router-dom";

const Breadcrumbs = () => {
  const [crumbs, setCrumbs] = useState([]);
  const matches = useMatches();

  const { t } = useTranslation();

  useEffect(() => {
    const crumbs = matches
      .filter((match) => Boolean(match.handle?.crumb))
      .map((match) => {
        return {
          path: match.pathname,
          payload: match.handle.crumb(match.data),
        };
      });

    setCrumbs(crumbs);
  }, [matches]);

  return (
    <>
      {crumbs && crumbs.length > 1 && (
        <div className="bg-bgSecondary w-full">
          <div className="max-w-screen-xl mx-auto px-3 py-[1.125rem]">
            <ul className="text-white text-sm font-medium flex flex-nowrap gap-2.5 items-center">
              {crumbs.map((crumb, index) => {
                const {
                  payload: { trans, data },
                } = crumb;
                const label = data ? data : t(trans);

                return (
                  <li key={index}>
                    {index === crumbs.length - 1 ? (
                      <span className="text-tertiary">{label}</span>
                    ) : (
                      <>
                        <Link to={crumb.path} className="hover:text-tertiary">
                          {label}
                        </Link>
                        <span className="pl-2.5">/</span>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Breadcrumbs;
