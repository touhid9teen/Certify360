import { useState } from 'react';
import Table from './components/table/Table';
import TableRow from './components/table/TableRow';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (name, checked) => {
    setIsChecked(checked);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Table Example</h1>
      <Table
        id="header"
        tableData={['Name & Designation', 'Email', 'Phone Number', 'Company', 'Label', 'Actions']}
        checkBox={true}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        customTableClass="min-w-full"
      >
        <TableRow
          id="1"
          nameAndDesignation={<div>John Doe<br /><span className="text-sm text-gray-500">Software Engineer</span></div>}
          email={['john.doe@example.com', 'john.doe@work.com']}
          phoneNumber={['123-456-7890', '098-765-4321']}
          company="Example Corp"
          label="Active"
          isChecked={isChecked}
          handleCheckboxChange={() => handleCheckboxChange({ name: '1', checked: !isChecked })}
        />
        <TableRow
          id="2"
          nameAndDesignation={<div>Jane Smith<br /><span className="text-sm text-gray-500">Product Manager</span></div>}
          email={['jane.smith@example.com']}
          phoneNumber={['987-654-3210']}
          company="Another Corp"
          label="Inactive"
          isChecked={isChecked}
          handleCheckboxChange={() => handleCheckboxChange({ name: '2', checked: !isChecked })}
        />
      </Table>
    </div>
  );
};

export default App;