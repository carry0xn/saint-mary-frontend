import axios from "axios"

const API_URL = "http://localhost:3001"

export const mostrarAlumnos = async () => {
  try {
    const response = await axios.get(`${API_URL}/alumnos`)
    console.log("Alumnos:", response.data)
    return response.data
  } catch (error) {
    console.error("Error al obtener alumnos:", error)
    throw error
  }
}

export const loginUser = async ({ username, password, role }) => {
  let endpoint = "/login"

  if (role === "alumno") {
    endpoint = "/alumnos/login"
  } else if (role === "profesor") {
    endpoint = "/profesores/login"
  }

  const response = await axios.post(`${API_URL}${endpoint}`, {
    username,
    password
  })

  return response.data
}

export const register = async ({ nombreCompleto, username, password, role, cursoId }) => {
  let endpoint = ""

  if (role === "alumno") {
    endpoint = "/alumnos/register"
  } else if (role === "profesor") {
    endpoint = "/profesores/register"
  } else {
    throw new Error("Rol inválido")
  }

  const userData = {
    nombreCompleto,
    username,
    password
  }

  if (role === "alumno" && cursoId) {
    userData.cursoId = cursoId
  }

  try {
    const response = await axios.post(`${API_URL}${endpoint}`, userData)
    return response.data
  } catch (error) {
    console.error("Error al registrar:", error.response?.data || error.message)
    throw error
  }
}
