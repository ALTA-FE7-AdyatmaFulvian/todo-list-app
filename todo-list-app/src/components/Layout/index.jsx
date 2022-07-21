import Sidebar from "../Sidebar";

export const Layout = ({ children }) => {
  return (
    <>
      {/* <Sidebar /> */}
      <main className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white p-10 font-poppins">
        {children}
      </main>
    </>
  );
};
