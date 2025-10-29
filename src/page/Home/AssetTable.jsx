import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import bitcoinIcon from "@/assets/1534906694.svg";
import { useNavigate } from "react-router-dom";

const AssetTable = () => {

  const navigate = useNavigate() ;
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-center">COIN</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24H</TableHead>
            <TableHead>PRICE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell onClick = {() => navigate(`/market/bitcoin`)} className="font-medium py-3 px-2">
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
  );
};

export default AssetTable;
