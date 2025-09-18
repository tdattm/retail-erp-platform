import React, {useState} from 'react';
import type { Supplier, SupplierTableProp } from '../../../types/InventoryServiceType';
import { CardContent, CardDescription, CardTitle, Card, CardHeader, CardFooter } from '../../ui/card';
import { TableBody, TableCell, TableHead, TableRow, TableHeader, Table } from '../../ui/table';
import { Button } from '../../ui/button';
import { Tooltip, TooltipTrigger} from '../../ui/tooltip';
import { Eye, Trash, Pencil, Tag, Calendar, Mail, Phone, Space, ArrowLeft, ArrowRight } from 'lucide-react';
import { DialogHeader, Dialog, DialogContent, DialogDescription, DialogTitle } from '../../ui/dialog';
import { formatCurrency, formatDate } from '../Convert';

export const SupplierTable: React.FC<SupplierTableProp> = ({
  data,
  loading,
  onEdit,
  onDelete,
  totalElements,
  goToPage,
  page,
  totalPages
}) => {
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [openInformationSupplier, setOpenInformationSupplier] = useState<boolean>(false);
  const handleViewSupplier = (supplier : Supplier) => {
    setSelectedSupplier(supplier);
    setOpenInformationSupplier(true);
  }

  return (
    <div className='w-full mx-auto items-center'>
      <Card>
        <CardHeader>
          <div className = 'flex items-center justify-between'>
            <div>
              <CardTitle>
                Danh sách các nhà cung cấp
                <p>
                  Quản lý thông tin các nhà cung cấp và đối tác
                </p>
              </CardTitle>
              <CardDescription className='mt-2'>
                Hiển thị {data.length} trong tổng số {totalElements} nhà cung cấp
              </CardDescription>
            </div>
            <div className='text-sm text-muted-foreground'>
              Cuộn để xem thêm
            </div>'
          </div>
        </CardHeader>
        <CardContent>
          <div className='rounded-md border relative'>
            <div className='w-full h-[400px] overflow-auto scroll-smooth'
              style = {{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(155,155,155,0.5) transparent'
              }}
            >
              <Table className = 'relative'>
                <TableHeader className=" sticky top-0 z-50 !border-b border-gray-900 bg-gray-100 dark:bg-gray-900">
                  <TableRow className='hover:bg-transparent'>
                    <TableHead className='text-center !border-r !border-gray-300'>
                      Nhà cung cấp
                    </TableHead>
                    <TableHead className='text-center !border-r !border-gray-300'>Liên hệ</TableHead>
                    <TableHead className='text-center !border-r !border-gray-300'>Danh mục</TableHead>
                    <TableHead className='text-center !border-r !border-gray-300'>Đơn hàng</TableHead>
                    <TableHead className='text-center !border-r !border-gray-300'>Tổng giá trị</TableHead>
                    <TableHead className='text-center !border-r !border-gray-300'>Mô tả</TableHead>
                    <TableHead className='text-center !border-r !border-gray-300'>Trạng thái</TableHead>
                    <TableHead className='text-center '>Chức năng</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={5} className='px-4 py-6 text-center'>
                        Đang tải dữ liệu
                      </TableCell>
                    </TableRow>
                  ): data.length>0 ? (
                    data.map((sup) => (
                      <TableRow key = {sup.id} className="!border-b">
                        <TableCell className='!border-r !border-gray-300'>
                          <div>
                            <div className='font-medium'>{sup.name}</div>
                            <p>MaSku</p>
                            <p className='font-light text-blue-700'>LinkWebsize</p>
                          </div>
                        </TableCell>
                        <TableCell className='text-center !border-r !border-gray-300'>
                          <div className='space-y-1'>
                            <div className='flex items-center gap-1 text-sm'>
                              <Mail className = 'h-3 w-3' />
                              {sup.email}
                            </div>
                            <div className='flext items-center gap-1 text-sm'>
                              <Phone className='h-3 w-3' />
                              {sup.phone} Đang phát triển ...
                            </div>
                            
                          </div>
                        </TableCell>
                        <TableCell className='text-left !border-r !border-gray-300'>Đang phát triển</TableCell>
                        <TableCell className='text-left !border-r !border-gray-300'>Đang phát triển</TableCell>
                        <TableCell className='text-left !border-r !border-gray-300'>Đang phát triển</TableCell>
                        <TableCell className='text-left !border-r !border-gray-300'>
                          {sup.description}
                        </TableCell>
                        <TableCell className='text-center !border-r !border-gray-300 '>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            sup.status === 'active' ? 'bg-green-100 text-green-700'
                            :'bg-red-100 text-red-700'
                          }`}
                          >
                            {sup.status}
                          </span>
                        </TableCell>
                        <TableCell className='text-center'>
                          <div className='flex gap-2 items-center justify-center'>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => {handleViewSupplier(sup)}}
                                  className='!rounded-md text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors'
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                            </Tooltip>

                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => onEdit(sup)}
                                  className='!rounded-md text-green-500 border-green-500 hover:bg-green-500 hover:text-white transition-colors'
                                >
                                  <Pencil className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                            </Tooltip>

                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => onDelete(sup.id)}
                                  className='!rounded-md text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition-colors'
                                >
                                  <Trash className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className='px-4 py-6 text-center'>
                        Không có dữ liệu
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex items-center'>
          <div className="flex  items-center space-x-4 mx-auto">
            <div>
              <Button
                onClick={() => goToPage(page - 1)}
                disabled={page === 0}
                className='px-3 py-1 bg-gray-500 rounded disabled:opacity-50'
              >
                <ArrowLeft />
              </Button>
            </div>

            <div>
              <span>
              Trang <strong>{totalPages === 0 ? 0 : page + 1}</strong> / <strong>{totalPages}</strong>
              </span>
            </div>

            <div>
              <Button
                onClick={() => goToPage(page + 1)}
                disabled={page + 1 >= totalPages}
                className="px-3 py-1 bg-gray-500 rounded disabled:opacity-50"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}