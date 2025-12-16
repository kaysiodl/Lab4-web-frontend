import {
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper
} from "@mui/material";

export default function ResultsTable({points}) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>X</TableCell>
                        <TableCell>Y</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>Попадание</TableCell>
                        <TableCell>Время</TableCell>
                        <TableCell>Время выполнения</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(points) && points.map(p => (
                        <TableRow key={p.id}>
                            <TableCell>{p.x.toFixed(2)}</TableCell>
                            <TableCell>{p.y.toFixed(2)}</TableCell>
                            <TableCell>{p.r.toFixed(2)}</TableCell>
                            <TableCell>{p.hit ? "✔" : "✘"}</TableCell>
                            <TableCell>{p.currentTime}</TableCell>
                            <TableCell>{p.executionTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
