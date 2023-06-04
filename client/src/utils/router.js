import ViewObject from "../pages/ViewObject/ViewObject";
import Tasks from "../pages/Tasks/Tasks";
import Main from "../pages/main/Main";

export const routs = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/viewObject',
        component: ViewObject
    },
    {
        path: '/tasks',
        component: Tasks
    },
]