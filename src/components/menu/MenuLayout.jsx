const MenuLayout = ({
  children,
  title,
  titleClass = "text-base font-bold uppercase text-primary",
}) => {
  return (
    <div className="w-full">
      <div>
        <div className="rounded-t-lg bg-tertiary px-4 py-3">
          <span className={titleClass}>{title}</span>
        </div>
        <div className="rounded-b-lg border-x border-b border-solid border-tertiary">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuLayout;
