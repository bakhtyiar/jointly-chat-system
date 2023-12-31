import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {getAllPricingData, IPricingTableRowData} from "@/services/pricing";
import {useEffect, useState} from "react";

function convertCellData(plan: string | boolean) {
    if (typeof plan === 'boolean') {
        return plan ? <CheckIcon color="success"/> : <CloseIcon color="error"/>;
    }
    return plan;
}

//todo : implement buttons logic
export const PricingTable = () => {
    let [pricingData, setPricingData] = useState<IPricingTableRowData[]>([])
    useEffect(() => {
        const fetch = async () => {
            let {data} = await getAllPricingData();
            if (data)
                setPricingData(data);
        }
        fetch();
    }, [])

    return (
        <TableContainer sx={{maxWidth: 720}}>
            <Table aria-label="pricing table">
                <TableHead>
                    <TableRow>
                        <TableCell>Option</TableCell>
                        <TableCell align="center">Free</TableCell>
                        <TableCell align="center">Premium</TableCell>
                        <TableCell align="center">Super premium</TableCell>
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
                                align="center">{convertCellData(row.freeVer)}</TableCell>
                            <TableCell
                                align="center">{convertCellData(row.individualSubscribition)}</TableCell>
                            <TableCell
                                align="center">{convertCellData(row.corporativeSubscribition)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow
                        key='buttons'
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">
                        </TableCell>
                        <TableCell
                            align="center"><Button>Create account</Button></TableCell>
                        <TableCell
                            align="center"><Button>Get premium</Button></TableCell>
                        <TableCell
                            align="center"><Button>Get super premium</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
