import { Table } from "react-bootstrap"

const CommonTable = () => {
    return (
      <section className='Common_table'>
           <div className="w-full overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-red-900 text-white">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-4 text-left font-semibold tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-black bg-opacity-5 divide-y divide-red-200">
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => onRowClick?.(row)}
              className="hover:bg-red-50 transition-colors duration-200 cursor-pointer"
            >
              {headers.map((header) => (
                <td
                  key={`${index}-${header}`}
                  className="px-6 py-4 whitespace-nowrap text-gray-800"
                >
                  {row[header.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </section>
    )
  }
  
  export default CommonTable
  