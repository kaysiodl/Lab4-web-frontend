import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, TablePagination
} from "@mui/material";
import { useEffect, useState } from "react";
import { usePoints } from "../features/points/usePoints";
import FiltersPanel from "./FiltersPanel";

export default function ResultsTable({points, total, getPoints}) {
    const [sort, setSort] = useState({ field: "id", dir: "desc" });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const params = {
            page,
            size: rowsPerPage,
            sort: `${sort.field},${sort.dir}`
        };

        filters.forEach(f => {
            if (!f.value) return;
            params[`filter.${f.field}.${f.op}`] = f.value;
        });

        getPoints(params);
    }, [page, rowsPerPage, sort, filters]);


    const toggleSort = (field) => {
        setSort(prev => {
            if (prev.field === field) {
                return {
                    field,
                    dir: prev.dir === "asc" ? "desc" : "asc"
                };
            }
            return {
                field,
                dir: "asc"
            };
        });
    };

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{ cursor: "pointer", fontWeight: "bold" }}
                                onClick={() => toggleSort("x")}
                            >
                                X {sort.field === "x" ? (sort.dir === "asc" ? "↑" : "↓") : ""}
                            </TableCell>
                            <TableCell
                                sx={{ cursor: "pointer", fontWeight: "bold" }}
                                onClick={() => toggleSort("y")}
                            >
                                Y {sort.field === "y" ? (sort.dir === "asc" ? "↑" : "↓") : ""}
                            </TableCell>
                            <TableCell
                                sx={{ cursor: "pointer", fontWeight: "bold" }}
                                onClick={() => toggleSort("r")}
                            >
                                R {sort.field === "r" ? (sort.dir === "asc" ? "↑" : "↓") : ""}
                            </TableCell>
                            <TableCell>Попадание</TableCell>
                            <TableCell
                                sx={{ cursor: "pointer", fontWeight: "bold" }}
                                onClick={() => toggleSort("currentTime")}
                            >
                                Время {sort.field === "currentTime" ? (sort.dir === "asc" ? "↑" : "↓") : ""}
                            </TableCell>
                            <TableCell
                                sx={{ cursor: "pointer", fontWeight: "bold" }}
                                onClick={() => toggleSort("executionTime")}
                            >
                                Время выполнения {sort.field === "executionTime" ? (sort.dir === "asc" ? "↑" : "↓") : ""}
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {points.map(p => (
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

            <TablePagination
                component="div"
                count={total}
                page={page}
                onPageChange={(_, newPage) => setPage(newPage)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(e) => {
                    setRowsPerPage(parseInt(e.target.value, 10));
                    setPage(0);
                }}
                rowsPerPageOptions={[5, 10, 20]}
            />

            <FiltersPanel
                filters={filters}
                setFilters={setFilters}
            />

        </Paper>
    );
}
