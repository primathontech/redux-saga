const Header = ({ user, onLogout }) => {
  return (
    <header className='border-b'>
      <nav className='bg-white border-gray-200 px-4 py-2.5 '>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <div className='flex items-center'>
            <img src={user.image} className='mr-3 h-9 rounded-full border' alt='User' />
            <span className='self-center text-xl font-semibold whitespace-nowrap'>
              {user.firstName} {user.lastName}
            </span>
          </div>
          <button className='border rounded px-4 py-1 text-gray-800' onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  user: {},
  onLogout: () => {},
};

export default Header;
