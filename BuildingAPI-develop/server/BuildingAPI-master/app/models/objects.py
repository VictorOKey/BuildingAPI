import sqlalchemy

metadata = sqlalchemy.MetaData()

objects_table = sqlalchemy.Table(
    "objects",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("title", sqlalchemy.String()),
    sqlalchemy.Column("address", sqlalchemy.String()),
    sqlalchemy.Column("img_url", sqlalchemy.String()),
    sqlalchemy.Column("phone_number", sqlalchemy.String()),
    sqlalchemy.Column("description", sqlalchemy.String())
)

images_table = sqlalchemy.Table(
    "images",
    metadata,
    sqlalchemy.Column("img_url", sqlalchemy.String()),
    sqlalchemy.Column("object_id", sqlalchemy.ForeignKey("objects.id")),
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True)
)

stages_table = sqlalchemy.Table(
    "stages",
    metadata,
    sqlalchemy.Column("stage", sqlalchemy.String()),
    sqlalchemy.Column("status", sqlalchemy.String()),#planned, in process, finished
    sqlalchemy.Column("object_id", sqlalchemy.ForeignKey("objects.id")),
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True)
)

materials_table = sqlalchemy.Table(
    "materials",
    metadata,
    sqlalchemy.Column("material", sqlalchemy.String()),
    sqlalchemy.Column("object_id", sqlalchemy.ForeignKey("objects.id")),
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key = True),
)