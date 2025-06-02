import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap"
import backgroundImg from '../img/background.png'
import { register } from "../services/authServices"

const Register = () => {
  const [nombreCompleto, setNombreCompleto] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [cursoId, setCursoId] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    if (!role) {
      setError("Por favor selecciona tu rol")
      setLoading(false)
      return
    }

    try {
      await register({ nombreCompleto, username, password, role, cursoId })
      alert("Registro exitoso ✅")
      navigate("/login")
    } catch (err) {
      console.error(err)
      setError("Error al registrar usuario")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 mt-3"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        //height: '100vh',
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={10} lg={8} className="p-5 bg-white rounded shadow-lg">
          <h1 className="text-center text-danger display-4 mb-4">
            🎓 Saint Mary Student Platform | Register
          </h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-4">
              <Form.Label className="fs-4">Nombre completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Pérez"
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
                required
                size="lg"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fs-4">👤 Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                size="lg"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fs-4">🔑 Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                size="lg"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fs-4">📘 Rol</Form.Label>
              <Form.Select
                size="lg"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Selecciona tu rol</option>
                <option value="alumno">Alumno</option>
                <option value="profesor">Profesor</option>
              </Form.Select>
            </Form.Group>

            {role === "alumno" && (
              <Form.Group className="mb-4">
                <Form.Label className="fs-4">📚 Curso (ID)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="ID del curso"
                  value={cursoId}
                  onChange={(e) => setCursoId(e.target.value)}
                  size="lg"
                />
              </Form.Group>
            )}

            <div className="d-grid py-2">
              <Button variant="success" size="lg" type="submit" disabled={loading}>
                {loading ? "Registrando..." : "Registrarse"}
              </Button>
            </div>
            <div className="d-grid py-2">
                <Button
                    variant="outline-secondary"
                    size="lg"
                    type="button" 
                    onClick={() => navigate("/login")} // redirige a login
                >
                    ¿Ya tienes cuenta? Inicia sesión
                </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
