import { Pagination, Table } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import styled from "@emotion/styled";
import { JSX } from "react";

interface propTypes<T> {
  data: T[];
  columns?: ColumnsType<T>;
  [key: string]: unknown;
}

const CustomTable = <T extends object>({
  data,
  columns,
  ...props
}: propTypes<T>) => {
  return (
    <div className="flex flex-col gap-5">
      <StyledTable<T>
        key={data.length}
        dataSource={data}
        columns={columns}
        scroll={{ x: "fit-content" }}
        rowKey="id"
        pagination={false}
        {...props}
      />
      <div className="w-full flex justify-end">
        <StyledPagination showSizeChanger={false} />
      </div>
    </div>
  );
};

export default CustomTable;

const StyledTable = styled(Table)`
  .ant-table-tbody > tr:not(:last-child) > td {
    padding-bottom: 15px !important;
  }

  .ant-table {
    border-radius: 0px;
  }

  .ant-table-container {
    border: none !important;
    border-radius: 15px !important;
  }
  .ant-table-thead .ant-table-cell {
    background: var(--primary-table-header);
    font-size: 16px;
    padding: 15px 20px;
    font-weight: 600;
    border-bottom: none !important;
    border-top: none !important;
    border-bottom: none !important;
  }

  .ant-table-thead .ant-table-cell:before {
    display: none;
  }

  .ant-table-thead .ant-table-cell:last-child {
    border-radius: 0px 5px 5px 0px !important;
  }

  .ant-table-thead .ant-table-cell:first-of-type {
    border-radius: 5px 0px 0px 5px !important;
  }

  .ant-table-row .ant-table-cell {
    padding: 20px;
    min-width: 150px;
  }

  .ant-table .ant-table-tbody .ant-table-row .ant-table-cell {
    color: var(--secondary);
    font-size: 14px;
  }

  .ant-table .ant-table-tbody .ant-table-row {
    cursor: pointer;
  }

  .ant-table .ant-table-tbody .ant-table-expanded-row-fixed {
    width: 100% !important;
  }

  .ant-table .ant-table-tbody .ant-table-cell-row-hover {
    background: var(--primary-table-header-dark) !important;
    border-bottom: 1px solid var(--primary) !important;
  }
` as <T extends object>(props: TableProps<T>) => JSX.Element;

const StyledPagination = styled(Pagination)`
  .ant-pagination-item-active {
    background-color: var(--secondary);
    border: 1px solid var(--primary);
  }

  .ant-pagination-item-active a {
    color: var(--primary) !important;
  }

  .ant-pagination-item-active:hover {
    border: 1px solid var(--primary);
  }

  .ant-pagination-item-link-icon {
    color: var(--primary) !important;
  }
`;
