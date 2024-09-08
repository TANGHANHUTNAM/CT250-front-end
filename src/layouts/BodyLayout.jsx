const BodyLayout = ({ children }) => {
  return (
    <div className="w-full bg-bgPrimary">
      <div className="mx-auto max-w-screen-xl px-3">{children}</div>
    </div>
  );
};

export default BodyLayout;
