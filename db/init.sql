CREATE TABLE medical_records (
    id SERIAL PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    diagnosis TEXT NOT NULL,
    treatment TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender VARCHAR(100) NOT NULL,
    recipient VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);