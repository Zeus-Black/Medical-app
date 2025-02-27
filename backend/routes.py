from flask import Blueprint, request, jsonify
from models import db, MedicalRecord, Message

blueprint = Blueprint('api', __name__)

@blueprint.route('/records', methods=['GET'])
def get_records():
    records = MedicalRecord.query.all()
    return jsonify([{'id': r.id, 'patient_name': r.patient_name, 'diagnosis': r.diagnosis, 'treatment': r.treatment, 'date_created': r.date_created} for r in records])

@blueprint.route('/records', methods=['POST'])
def add_record():
    data = request.get_json()
    new_record = MedicalRecord(patient_name=data['patient_name'], diagnosis=data['diagnosis'], treatment=data['treatment'])
    db.session.add(new_record)
    db.session.commit()
    return jsonify({'message': 'Dossier ajouté'}), 201

@blueprint.route('/messages', methods=['GET'])
def get_messages():
    messages = Message.query.all()
    return jsonify([{'id': m.id, 'sender': m.sender, 'recipient': m.recipient, 'content': m.content, 'timestamp': m.timestamp} for m in messages])

@blueprint.route('/messages', methods=['POST'])
def send_message():
    data = request.get_json()
    new_message = Message(sender=data['sender'], recipient=data['recipient'], content=data['content'])
    db.session.add(new_message)
    db.session.commit()
    return jsonify({'message': 'Message envoyé'}), 201
