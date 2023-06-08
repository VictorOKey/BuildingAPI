import ViewObject from "../pages/ViewObject/ViewObject";
import Tasks from "../pages/Tasks/Tasks";
import Main from "../pages/main/Main";
import CreatePage from "../pages/CreatePage/CreatePage";

export const routs = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/viewObject/:id',
        component: ViewObject
    },
    {
        path: '/tasks',
        component: Tasks
    },
    {
        path: '/createObject',
        component: CreatePage
    },
]