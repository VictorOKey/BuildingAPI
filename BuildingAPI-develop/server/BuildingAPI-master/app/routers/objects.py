import http

from fastapi import APIRouter
from app.schemas import objects
from app.utils import objects as objects_utils

router = APIRouter()


@router.post("/create-object", response_model=objects.Object)
async def create_object(object: objects.ObjectCreate):
    return await objects_utils.create_object(object)

@router.post("/get-object", response_model=objects.Object)
async def get_object(id: int):
    return await objects_utils.get_object(id)

@router.get("/get-objects", response_model=objects.ObjectEntries)
async def get_objects():
    return await objects_utils.get_objects()

@router.post("/get-stages", response_model=objects.Stages)
async def get_stages(query: objects.StagesQuery):
    return await objects_utils.get_stages(query)

@router.put("/change-status", response_model=objects.Stage)
async def change_status(id: int, status: str):
    return await objects_utils.change_status(id, status)

@router.delete("/delete-stage")
async def delete_stage(id: int):
    await objects_utils.delete_stage(id)
    return f'stage with id {id} is deleted'