import { ReactNode } from 'react';
import { Table } from 'react-bootstrap';

const CommonTable = ({
  className = '',
  fields = [],
  children,
  noRecordFound,
}: {
  className?: string;
  fields?: string[];
  children?: ReactNode | any;
  noRecordFound?: ReactNode;
}) => {
 
  return (
    <div className={`common_table ${className}`}>
    <Table responsive>
        <thead>
          <tr>
            {fields?.map((item: any) => (
              <th key={item}>
                <div className="d-flex align-items-center">
                  {item}
                
                </div>
              </th>
            ))}
          </tr>
        </thead>
      <tbody>
        {children?.length > 0 ? (
          children
        ) : (
          <tr className="no_record text-center">
            <td colSpan={fields?.length}>
              {noRecordFound || (
                <div className="no_record_box">
                  {/* <NoRecord /> */}
                  <h4>No Record Found</h4>
                </div>
              )}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
                  </div>
  );
};

export default CommonTable;
