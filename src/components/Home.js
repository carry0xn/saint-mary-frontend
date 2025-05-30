import React, { useState, useEffect } from "react"
import { mostrarAlumnos } from "../services/authServices"
import { Table, Container } from "react-bootstrap"
import Header from "./Header" 
import Footer from './Footer'


const Home = () => {
  const [alumnos, setAlumnos] = useState([])

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const data = await mostrarAlumnos()
        setAlumnos(data)
      } catch (error) {
        console.error("Error cargando alumnos", error)
      }
    }

    fetchAlumnos()
  }, [])

  return (
    <div>
      <Header />
      <Container>
        <h1 className="my-4 text-center">Lista de Alumnos</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.nombreCompleto}</td>
                <td>{alumno.Curso?.nombreCurso || "Sin curso asignado"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  )
}

export default Home
