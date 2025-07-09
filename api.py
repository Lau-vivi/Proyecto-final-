# api.py
from flask import Blueprint, jsonify
from huecos import db, Hueco

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route("/huecos", methods=["GET"])
def obtener_huecos():
    huecos = Hueco.query.all()
    datos = []
    for h in huecos:
        datos.append({
            "id": h.id,
            "nombre": h.nombre,
            "estado": h.estado,
            "direccion": h.direccion,
            "fecha": h.fecha.strftime("%Y-%m-%d"),
            "celular": h.celular,
            "localizacion": h.localizacion
        })
    return jsonify(datos)
