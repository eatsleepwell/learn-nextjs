const DashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
  test,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
  test: React.ReactNode;
}) => {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div
      className="container flex items-center 
    justify-center flex-col p-10 "
    >
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
      <div>{test}</div>
    </div>
  ) : (
    <div>{login}</div>
  );
};

export default DashboardLayout;
