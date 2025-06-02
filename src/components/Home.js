import React, { useState, useEffect } from "react"
import { mostrarAlumnos } from "../services/authServices"
import { Table, Container } from "react-bootstrap"
import Header from "./Header"
import Footer from './Footer'

const Home = () => {
  const [alumnos, setAlumnos] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    setUser(loggedUser)

    if (loggedUser?.rol === "profesor") {
      // Sólo cargamos alumnos si es profesor
      mostrarAlumnos()
        .then(data => setAlumnos(data))
        .catch(error => console.error("Error cargando alumnos", error))
    }
  }, [])

  return (
    <div>
      <Header />
      <Container>
        <h1 className="my-4 text-center">Bienvenido, {user?.nombreCompleto}</h1>

        {user?.rol === "profesor" ? (
          <>
            <h2 className="mb-4">Lista de Alumnos</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Curso</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map(alumno => (
                  <tr key={alumno.id}>
                    <td>{alumno.nombreCompleto}</td>
                    <td>{alumno.Curso?.nombreCurso || "Sin curso asignado"}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <>
            <h2>Detalles de Alumno</h2>
            <p><strong>Nombre:</strong> {user?.nombreCompleto}</p>
            <p><strong>Curso:</strong> {user?.Curso?.nombreCurso || "Sin curso asignado"}</p>
          </>
        )}
      </Container>
      <Footer />
    </div>
  )
}

export default Home
