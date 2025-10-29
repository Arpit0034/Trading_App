import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import bitcoinIcon from "@/assets/1534906694.svg";

const Portfolio = () => {
  return (
    <div className='p-2 lg:p-24'>
      <h1 className='font-bold text-2xl pl-4 pb-5'>Portfolio</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-center">Asset</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Change%</TableHead>
            <TableHead>VOLUME</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1,].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium py-3 px-2">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={bitcoinIcon}
                      alt="Bitcoin"
                      className="w-8 h-8 object-contain"
                    />
                  </Avatar>
                  <span>Bitcoin</span>
                </div>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>41601028446</TableCell>
              <TableCell>2224350554199</TableCell>
              <TableCell>+0.32068</TableCell>
              <TableCell>$111492</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </div>
  )
}

export default Portfolio