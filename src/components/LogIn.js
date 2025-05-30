import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap"
import backgroundImg from '../img/background.png'
import { loginUser } from "../services/authServices"

const Login = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("") // Nuevo estado para el rol
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const onFinish = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!role) {
      setError("Por favor selecciona tu rol")
      setLoading(false)
      return
    }

    try {
      const response = await loginUser({ username, password, role })
      localStorage.setItem("token", response.token)
      localStorage.setItem("user", JSON.stringify(response.user))
      alert("Inicio de sesión exitoso ✅")

      if (onLoginSuccess) onLoginSuccess(response.user)
      navigate("/home")
    } catch (error) {
      console.error("Error de login:", error)
      setError("Credenciales incorrectas o rol inválido")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={10} lg={8} className="p-5 bg-white rounded shadow-lg">
          <h1 className="text-center text-danger display-4 mb-4">
            🎓 Saint Mary Student Platform
          </h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onFinish}>
            <Form.Group className="mb-4">
              <Form.Label className="fs-4">👤 Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre de usuario"
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
                placeholder="Ingresa tu contraseña"
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

            <div className="d-grid">
              <Button variant="danger" size="lg" type="submit" disabled={loading}>
                {loading ? "Cargando..." : "✨ Acceder"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
