from flask_sqlalchemy import SQLAlchemy
from geoalchemy2 import Geometry  # Para campos espaciales

db = SQLAlchemy()

class Hueco(db.Model):
    __tablename__ = 'huecos'

    id = db.Column(db.Integer, primary_key=True)
    
    # Usamos Geometry con tipo 'POINT' para la columna localizacion
    localizacion = db.Column(Geometry(geometry_type='POINT', srid=4326), nullable=False)
    # SRID 4326 es el sistema de coordenadas geográficas estándar (WGS84)

    nombre = db.Column(db.String(100), nullable=False)
    estado = db.Column(db.Integer)
    direccion = db.Column(db.String(150), nullable=False)
    fecha = db.Column(db.Date, nullable=False)
    celular = db.Column(db.String(13), nullable=False)

    def __repr__(self):
        return f"<Hueco {self.id} - {self.nombre}>"
