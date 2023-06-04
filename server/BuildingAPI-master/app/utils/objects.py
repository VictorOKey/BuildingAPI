from app.models.database import database
from app.schemas import objects as objects_schema
from app.models.objects import objects_table, images_table, stages_table, materials_table
from sqlalchemy import select, and_

async def create_object(object: objects_schema.ObjectCreate):
    print(object.img_url)
    query = (
        objects_table.insert().values(
            title = object.title,
            address = object.address,
            img_url = object.img_url[0].img_url,
            phone_number = object.phone_number,
            description = object.description
        ).returning(
            objects_table.c.id,
            objects_table.c.title,
            objects_table.c.address,
            objects_table.c.img_url,
            objects_table.c.phone_number,
            objects_table.c.description,
        )
    )
    result = await database.fetch_one(query)
    object_result = dict(zip(result, result.values()))
    id = object_result['id']
    images = [(x.img_url, id) for x in object.img_url]
    images = await database.fetch_all(
        images_table.insert().values(
            images
        ).returning(
            images_table.c.img_url
        )
    )
    images_list = []
    for img in images:
        images_list.append(dict(zip(img, img.values())))
    stages = [(x.stage, x.status, id) for x in object.stages]
    stages = await database.fetch_all(
        stages_table.insert().values(
            stages
        )
        .returning(
            stages_table.c.stage,
            stages_table.c.status
        )
    )
    stages_list = []
    for stage in stages:
        stages_list.append(dict(zip(stage, stage.values())))
    materials = [(x.material, id) for x in object.materials]
    materials = await database.fetch_all(
        materials_table.insert().values(
            materials
        ).returning(
            materials_table.c.material
        )
    )
    materials_list = []
    for material in materials:
        materials_list.append(dict(zip(material, material.values())))
    print(object_result)
    object = {'id': id,
              'title': object_result['title'],
              'address': object_result['address'],
              'img_url': images_list,
              'phone_number': object_result['phone_number'],
              'description': object_result['description'],
              'stages': stages_list,
              'materials': materials_list
              }
    print(object)
    return object

async def get_object(object_id: int):
    query = (select(objects_table.c.id,
                    objects_table.c.title,
                    objects_table.c.address,
                    objects_table.c.phone_number,
                    objects_table.c.description).select_from(objects_table).where(objects_table.c.id==object_id))
    object = await database.fetch_one(query)
    object = dict(zip(object, object.values()))

    print(object)

    query = (select(images_table.c.img_url).select_from(images_table.join(objects_table)).where(objects_table.c.id==object_id))
    images_list = []
    images = await database.fetch_all(query)
    for img in images:
        images_list.append(dict(zip(img, img.values())))

    query = (select(stages_table.c.stage, stages_table.c.status).select_from(stages_table.join(objects_table)).where(objects_table.c.id == object_id))
    stages_list = []
    stages = await database.fetch_all(query)
    for stage in stages:
        stages_list.append(dict(zip(stage, stage.values())))

    query = (select(materials_table.c.material).select_from(materials_table.join(objects_table)).where(objects_table.c.id == object_id))
    materials_list = []
    materials = await database.fetch_all(query)
    for material in materials:
        materials_list.append(dict(zip(material, material.values())))

    object = {'id': object['id'],
              'title': object['title'],
              'address': object['address'],
              'img_url': images_list,
              'phone_number': object['phone_number'],
              'description': object['description'],
              'stages': stages_list,
              'materials': materials_list
              }
    return object

async def get_objects():
    query = (
        select(
            objects_table.c.id,
            objects_table.c.title,
            objects_table.c.img_url,
            objects_table.c.address
        ).select_from(objects_table)
    )
    results = await database.fetch_all(query)
    results_list = []
    for result in results:
        results_list.append(dict(zip(result, result.values())))
    print(results_list)
    return {'entries': results_list}

async def get_stages(stage_query: objects_schema.StagesQuery):
    query = (select(
        stages_table.c.stage,
        stages_table.c.status
    ).select_from(stages_table.join(objects_table)).where(and_(
        objects_table.c.id == stage_query.object_id,
        stages_table.c.status == stage_query.status
    )))
    stages = await database.fetch_all(query)
    stages_list = []
    for stage in stages:
        stages_list.append(dict(zip(stage, stage.values())))
    return {'stages': stages_list}

async def change_status(id, status):
    query = (
        (stages_table.update().values(
            status = status
        ).where(stages_table.c.id==id)).returning(
            stages_table.c.stage,
            stages_table.c.status
        )
    )
    result = await database.fetch_one(query)
    result = dict(zip(result, result.values()))
    return result

async def delete_stage(id):
    query = (stages_table.delete().where(stages_table.c.id == id))
    await database.execute(query)

