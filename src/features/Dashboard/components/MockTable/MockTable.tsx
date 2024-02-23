import Table from '@components/Table/Table'

import withMockTable from '@features/Dashboard/components/MockTable/withMockTable'

const MOCK_DATA_JSON = [
  {
    id: 1,
    company_name: 'MEGA PRETOLIUM',
    sale: '23,567,345',
    cost: '18,594,256',
    benefit: '4,569,567',
    profit: '1,569,567',
  },
  {
    id: 2,
    company_name: 'GT METAL',
    sale: '23,567,345',
    cost: '18,594,256',
    benefit: '4,569,567',
    profit: '1,569,567',
  },
  {
    id: 3,
    company_name: 'THAI PETOLIUM',
    sale: '23,567,345',
    cost: '18,594,256',
    benefit: '4,569,567',
    profit: '1,569,567',
  },
  {
    id: 4,
    company_name: 'วัดตะมุตะมิอุอิอุอิ',
    sale: '23,567,345',
    cost: '18,594,256',
    benefit: '4,569,567',
    profit: '1,569,567',
  },
  {
    id: 4,
    company_name: 'IRON ENERGY SERVICE',
    sale: '23,567,345',
    cost: '18,594,256',
    benefit: '4,569,567',
    profit: '1,569,567',
  },
]

const MockTable = ({ data, isLoading, pageChange }: any) => (
  <div>
    <div className='bg-white'>
      <Table
        data={MOCK_DATA_JSON}
        isSortable={false}
        isLoading={isLoading}
        isShowPagination
        pagination={{
          totalCount: 5,
          totalPage: 10,
          currentPage: 1,
          currentPageSize: 5,
          onPageChange: pageChange,
        }}
        columns={[
          {
            header: 'Name',
            id: 'company_name',
            accessorKey: 'company_name',
            maxSize: 80,
          },
          {
            header: 'Revanue(THB)',
            id: 'sale',
            accessorKey: 'sale',
            maxSize: 60,
          },
          {
            header: 'Costs(THB)',
            id: 'cost',
            accessorKey: 'cost',
            maxSize: 60,
          },
          {
            header: 'Expenses(THB)',
            id: 'benefit',
            accessorKey: 'benefit',
            maxSize: 60,
          },
          {
            header: 'Profits(THB)',
            id: 'profit',
            accessorKey: 'profit',
            maxSize: 60,
          },
        ]}
      />
    </div>
  </div>
)

const WrappedComponent = withMockTable(MockTable)
export default WrappedComponent
