import {
    Box,
    Select,
    MenuItem,
    TextField,
    IconButton,
    Button
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FiltersPanel({ filters, setFilters }) {

    const FILTER_FIELDS = [
        { value: "x", label: "X" },
        { value: "y", label: "Y" },
        { value: "r", label: "R" },
        { value: "hit", label: "Попадание" },
        { value: "executionTime", label: "Время выполнения" },
    ];

    const FILTER_OPS = [
        { value: "eq", label: "=" },
        { value: "gt", label: ">" },
        { value: "lt", label: "<" },
    ];


    const addFilter = () => {
        setFilters(prev => [
            ...prev,
            { field: "x", op: "eq", value: "" }
        ]);
    };

    const updateFilter = (index, key, value) => {
        setFilters(prev =>
            prev.map((f, i) =>
                i === index ? { ...f, [key]: value } : f
            )
        );
    };

    const removeFilter = (index) => {
        setFilters(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <Box sx={{ mb: 2 }}>
            {filters.map((filter, i) => (
                <Box
                    key={i}
                    sx={{ display: "flex", gap: 1, mb: 1 }}
                >
                    <Select
                        value={filter.field}
                        onChange={(e) =>
                            updateFilter(i, "field", e.target.value)
                        }
                        size="small"
                    >
                        {FILTER_FIELDS.map(f => (
                            <MenuItem key={f.value} value={f.value}>
                                {f.label}
                            </MenuItem>
                        ))}
                    </Select>

                    <Select
                        value={filter.op}
                        onChange={(e) =>
                            updateFilter(i, "op", e.target.value)
                        }
                        size="small"
                    >
                        {FILTER_OPS.map(op => (
                            <MenuItem key={op.value} value={op.value}>
                                {op.label}
                            </MenuItem>
                        ))}
                    </Select>

                    <TextField
                        size="small"
                        value={filter.value}
                        onChange={(e) =>
                            updateFilter(i, "value", e.target.value)
                        }
                        placeholder="значение"
                    />

                    <IconButton onClick={() => removeFilter(i)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}

            <Button onClick={addFilter}>
                + Добавить фильтр
            </Button>
        </Box>
    );
}
