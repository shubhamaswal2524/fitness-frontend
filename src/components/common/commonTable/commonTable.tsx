import React, { ReactNode, useMemo, useState } from "react";
import "./CommonTable.scss";
import { Table } from "react-bootstrap";
// import {
//   NoRecord,
// } from '../../../Assets/svgImgs/SvgIcons';
import { useSelector } from "react-redux";
// import Checkbox from '../FormInputs/Checkbox';

const CommonTable = ({
  className = "", // Default parameter
  fields = [], // Default parameter
  sortbuttons = true, // Default parameter
  children,
  noRecordFound,
  editPermission,
  moduleId,
  selectAll,
  selectAllFunction,
}: {
  className?: string;
  fields?: string[];
  sortbuttons?: boolean;
  children?: ReactNode | any;
  noRecordFound?: ReactNode;
  editPermission?: boolean;
  moduleId?: number;
  selectAll?: boolean;
  selectAllFunction?: any;
}) => {
  const [checked, setchecked] = useState(false);
  const [active, setActive] = useState(false);
  const { userColumns } = useSelector((state: any) => state.user);

  const filteredColumns = useMemo(() => {
    const particularPageColumns = userColumns?.find(
      (column: any) => column?.moduleId == moduleId
    );
    return particularPageColumns?.columnNames || fields;
  }, [userColumns, moduleId, fields]);

  return (
    <Table responsive className={`commonTable ${className}`}>
      {filteredColumns && (
        <thead>
          <tr>
            {/* {selectAll ? (
              <Checkbox
                label
                onChange={() => {
                  setchecked(!checked);
                  selectAllFunction(!checked);
                }}
              />
            ) : null} */}
            {(editPermission
              ? filteredColumns
              : filteredColumns?.filter(
                  (heading: string) => heading != "Actions"
                )
            )?.map((item: any) => (
              <th key={item}>
                <div className="d-flex align-items-center">
                  {item}
                  {/* {sortbuttons && (
                    <span
                      onClick={() => setActive(!active)}
                      className={`sort_icon ${
                        active ? 'up_active' : 'down_active'
                      }`}
                      role="button"
                    >
                      <SortDownIcon />
                    </span>
                  )} */}
                </div>
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {(typeof children == "object" && children?.length) ||
        (typeof children != "object" && children != undefined) ? (
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
  );
};

export default CommonTable;
