const NavBtn = ({ children, active = false }) => {
  return (
    <a
      href="#"
      className={`text-sm uppercase tracking-wider border p-2 px-4 rounded-full transition-all duration-150 ease-in hover:-translate-y-1 hover:font-bold hover:border-zinc-400 hover:text-zinc-900 ${
        active
          ? "border-zinc-400 font-bold text-zinc-900"
          : "border-transparent text-zinc-600"
      }`}
    >
      {children}
    </a>
  );
};

export default NavBtn;
