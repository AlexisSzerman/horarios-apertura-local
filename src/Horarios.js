import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Horarios() {
  const [localAbierto, setLocalAbierto] = useState(false);

  useEffect(() => {
    const fecha = new Date();
    const diaSemana = fecha.getDay();
    const hora = fecha.getHours();

    const esDiaLaboral = diaSemana === 1 || diaSemana === 4 || diaSemana === 5;
    const esDiaFinSemana =
      diaSemana === 2 || diaSemana === 3 || diaSemana === 6;

    const esHoraLaboral = (hora >= 9 && hora < 13) || (hora >= 17 && hora < 21);

    if (
      (esDiaLaboral && esHoraLaboral) ||
      (esDiaFinSemana && hora >= 9 && hora < 13)
    ) {
      setLocalAbierto(true);
    } else {
      setLocalAbierto(false);
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Horarios de Apertura</h2>
          {localAbierto ? (
            <p>¡El local está abierto en este momento!</p>
          ) : (
            <p>El local está cerrado en este momento.</p>
          )}
          <p>Lunes, Jueves y Viernes: 9:00 - 13:00 y 17:00 - 21:00</p>
          <p>Martes, Miércoles y Sábados/Feriados: 9:00 - 13:00</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Horarios;
