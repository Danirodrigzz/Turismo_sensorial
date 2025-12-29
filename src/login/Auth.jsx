import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import './Auth.css'

export default function Auth() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [preferencias, setPreferencias] = useState("alto_contraste");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    setLoading(true);
    setMessage("");
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage("Error en registro: " + error.message);
      setLoading(false);
      return;
    }

    const userId = data?.user?.id || null;
    if (userId) {
      const { error: insertError } = await supabase
        .from("usuarios")
        .insert([{ id_auth: userId, nombre, email, preferencias }]);
      if (insertError) {
        setMessage("Registrado en Auth, pero error guardando usuario: " + insertError.message);
      } else {
        setMessage("Registro exitoso. Revisa tu correo para confirmar.");
      }
    } else {
      setMessage("Registro enviado. Revisa tu correo.");
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage("Error al iniciar sesión: " + error.message);
    } else {
      setMessage("Sesión iniciada correctamente.");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: 20, background: "#fff", borderRadius: 12 }}>
      <h2  style={{ textAlign: "center", marginBottom: 12 }} >Acceso de usuarios</h2>

      <label>Nombre completo</label>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" style={{ width: "100%", padding: 8, marginBottom: 8 }} />

      <label>Correo electrónico</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="ejemplo@correo.com" style={{ width: "100%", padding: 8, marginBottom: 8 }} />

      <label>Contraseña</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="****" style={{ width: "100%", padding: 8, marginBottom: 8 }} />

      <label>Preferencias</label>
      <select value={preferencias} onChange={(e) => setPreferencias(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 12 }}>
        <option value="alto_contraste">Alto contraste</option>
        <option value="narracion">Narración por voz</option>
        <option value="teclado">Navegación por teclado</option>
      </select>
       
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={handleLogin} disabled={loading} style={{ flex: 1, padding: 10 }}>Iniciar sesión</button>
        <button onClick={handleSignUp} disabled={loading} style={{ flex: 1, padding: 10}}>Registrarse</button>
      </div>
      
      {message && <p style={{ marginTop: 12 }}>{message}</p>}
    </div>
  );
}
