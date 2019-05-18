import React from 'react';
import MUIDataTable from "mui-datatables";

const columns = ["Name", "Owner", "Stars", "Created at"];

const options = {
    filterType: 'checkbox',
};

const Table = ({data}) => {
    return (
        <MUIDataTable
            title={"Results"}
            data={data}
            columns={columns}
            options={options}
            responsive={'scroll'}
        />
    )
}

export default Table;
