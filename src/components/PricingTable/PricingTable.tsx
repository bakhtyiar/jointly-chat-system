import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {getAllPricingData, IPricingTableRowData} from "@/services/pricing";
import {useEffect, useState} from "react";

function convertCellData(plan: string | boolean) {
    if (typeof plan === 'boolean') {
        return plan ? <CheckIcon color="success"/> : <CloseIcon color="error"/>;
    }
    if (typeof plan === 'string') {
        return plan;
    }
}

export const PricingTable = () => {
    let [pricingData, setPricingData] = useState<IPricingTableRowData[]>([])
    useEffect(() => {
        const fetch = async () => {
            let { data } = await getAllPricingData();
            if (data)
                setPricingData(data);
        }
        fetch();
    }, [])

    return (
        <TableContainer sx={{maxWidth: 720}} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Option</TableCell>
                        <TableCell align="right">Free</TableCell>
                        <TableCell align="right">Premium</TableCell>
                        <TableCell align="right">Super premium</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pricingData.map((row) => (
                        <TableRow
                            key={row.optionName}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.optionName}
                            </TableCell>
                            <TableCell
                                align="right">{convertCellData(row.freeVer)}</TableCell>
                            <TableCell
                                align="right">{convertCellData(row.individualSubscribition)}</TableCell>
                            <TableCell
                                align="right">{convertCellData(row.corporativeSubscribition)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
