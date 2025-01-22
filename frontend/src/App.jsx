
import Avatar from './components/Aavater';
import { NotificationIcon, SettingsIcon } from './elements/Icon';
import Search from './elements/Search';

const Header = () => {
  


  const handleSearch = () => {
   
  };

  const handleSettings = () => {
    console.log('setting button clicked!');
  };

  const handleNotification = () => {
    console.log('notification button clicked!');
  };

  return (
    <nav className="flex justify-between pe-5 py-4.5 bg-white">
      <Search setSearchText={handleSearch} className="w-[541px] h-10.5" />
      <div className="flex justify-center gap-5 items-center">
        <SettingsIcon onClick={handleSettings} className="cursor-pointer" />
        <NotificationIcon onClick={handleNotification} className="cursor-pointer" />
        <Avatar divCustomClass="h-10 w-10" nameCustomClass="text-2xl flex items-center cursor-pointer" />
      </div>
    </nav>
  );
};

export default Header;
