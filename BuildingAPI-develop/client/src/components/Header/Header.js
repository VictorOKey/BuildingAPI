import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import style from './header.module.css';
export default function Header() {
    return(
        <AppBar position="static">
        <Toolbar className ={style.header}>
            <Typography variant="h6"
                        component="div" sx={{ flexGrow: 1 }} className ={style.text}>
                Список Проектов
            </Typography>
            <Button className ={style.text}>Создать проект</Button>
        </Toolbar>
    </AppBar>
    )
}