from flask import Flask, render_template, request
from datetime import datetime
from shapely.geometry import Point
from geoalchemy2.shape import from_shape
from geoalchemy2 import Geometry
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configuración correcta con usuario y contraseña 'postgre'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgre:postgre@localhost:5432/huecos'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Modelo basado en la tabla 'huecos' con campo Geometry
class Hueco(db.Model):
    __tablename__ = 'huecos'
    id = db.Column(db.Integer, primary_key=True)
    localizacion = db.Column(Geometry('POINT'), nullable=False)
    nombre = db.Column(db.String(100), nullable=False)
    estado = db.Column(db.Integer)
    direccion = db.Column(db.String(150))
    fecha = db.Column(db.Date, nullable=False)
    celular = db.Column(db.String(13), nullable=False)

@app.route('/')
def index():
    return render_template('addPoint.html')

@app.route('/registrar', methods=['POST'])
def registrar():
    try:
        nombre = request.form['nombre']
        estado = int(request.form['estado']) if request.form['estado'] else None
        direccion = request.form['direccion']
        fecha = datetime.strptime(request.form['fecha'], '%Y-%m-%d').date()
        celular = request.form['celular']
        lat = float(request.form['latitud'])
        lon = float(request.form['longitud'])

        punto = from_shape(Point(lon, lat), srid=4326)

        nuevo_hueco = Hueco(
            localizacion=punto,
            nombre=nombre,
            estado=estado,
            direccion=direccion,
            fecha=fecha,
            celular=celular
        )

        db.session.add(nuevo_hueco)
        db.session.commit()
        return render_template('confirmacion.html', nombre=nombre)
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Crea tablas si no existen
    app.run(debug=True)
