from pydantic import BaseModel
from typing import List, Optional

class Stage(BaseModel):
    stage: str
    status: Optional[str]

class Material(BaseModel):
    material: str

class Image(BaseModel):
    img_url: str
class ObjectCreate(BaseModel):
    title: str
    address: Optional[str]
    img_url: Optional[List[Image]]
    phone_number: Optional[str]
    description: str
    stages: List[Stage]
    materials: List[Material]

class ObjectEntry(BaseModel):
    id: int
    title: str
    address: str
    img_url: str

class ObjectEntries(BaseModel):
    entries: List[ObjectEntry]
class Object(ObjectCreate):
    id: int

class StagesQuery(BaseModel):
    object_id: int
    status: str


class Stages(BaseModel):
    stages: List[Stage]




