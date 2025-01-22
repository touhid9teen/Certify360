import TableRow from './components/table/TableRow';

const App= () => {
  const handleCheckboxChange = (id, checked) => {
    console.log(`Checkbox with id ${id} is now ${checked ? 'checked' : 'unchecked'}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Table Example</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Select</th>
            <th className="py-2">Name & Designation</th>
            <th className="py-2">Email</th>
            <th className="py-2">Phone Number</th>
            <th className="py-2">Company</th>
            <th className="py-2">Label</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            id="1"
            nameAndDesignation={<div>John Doe<br /><span className="text-sm text-gray-500">Software Engineer</span></div>}
            email={['john.doe@example.com', 'john.doe@work.com']}
            phoneNumber={['123-456-7890', '098-765-4321']}
            company="Example Corp"
            label="Active"
            isChecked={false}
            handleCheckboxChange={() => handleCheckboxChange('1', !false)}
          />
          <TableRow
            id="2"
            nameAndDesignation={<div>Jane Smith<br /><span className="text-sm text-gray-500">Product Manager</span></div>}
            email={['jane.smith@example.com']}
            phoneNumber={['987-654-3210']}
            company="Another Corp"
            label="Inactive"
            isChecked={true}
            handleCheckboxChange={() => handleCheckboxChange('2', !true)}
          />
        </tbody>
      </table>
    </div>
  );
};

export default App;