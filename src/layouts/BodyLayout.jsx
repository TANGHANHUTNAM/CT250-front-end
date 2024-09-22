const BodyLayout = ({ children, other }) => {
  return (
    <div className={`w-full bg-bgPrimary ${other}`}>
      <div className="mx-auto max-w-screen-xl px-3">{children}</div>
    </div>
  );
};

export default BodyLayout;
