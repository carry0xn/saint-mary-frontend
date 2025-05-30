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
