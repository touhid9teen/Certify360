import Search from './elements/Search';

const App = () => {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Perform search logic here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Search Example</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default App;